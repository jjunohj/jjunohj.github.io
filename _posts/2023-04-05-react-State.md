---
title: "[React] useState()와 setState()"
excerpt: "useState()의 인자, setState()"

categories:
  - React
tags:
  - [WEB, React]

toc: true
toc_sticky: true

date: 2023-04-05
last_modified_at: 2023-04-05

header:
  teaser: /assets/images/react.png
---

React를 사용하면서 자주 사용하게 되는 함수인 `useState`와 `setState`.

이 두 함수에 대해 조금 더 자세히 알아보고자 한다.

## useState()

`useState()`는 state를 선언하고, 초기값을 설정해주는 함수이다.

useState가 동작하는 방식을 좀 더 깊게 살펴보면 다음과 같다.

1. 함수형 컴포넌트에서 클로저를 통해 컴포넌트 외부에서 상태관리를 하고 있는 요소에 접근해 해당 값을 가져온다.
2. 상태를 변경하는 set함수를 실행하게 되면 컴포넌트 외부에 존재하는 값을 바꾼다. 따라서 상태가 변경되고 리렌더링이 되기 전에는 상태관리를 하고 있는 요소는 계속 이전 상태값을 참조하고 있다.
3. 리렌더링이 될 경우 컴포넌트가 다시 호출될 때 useState를 호출하고, 이때 변경된 외부 상태값을 클로저를 통해 가져와 렌더링한다.

자주 사용하는 코드와 내부 작동방식을 간단히 코드로 알아보자.

```js
// 매우 자주 사용하는 useState()
const [contents, setContents] = useState("");
```

```js
// 초기값 설정과 값을 바꿔주는 함수를 리턴한다.
let _value;

export useState(initialValue){
  if (_value === 'undefined') {
  // 초기값 설정
    _value = initialValue;
  }
  const setValue = newValue => {
  // set함수로 전역에 있는 _value값을 재할당
    _value = newValue;
  }

  //리렌더링 되고 useState()가 다시 호출될때 전역에 있는 _value를 반환
  return [_value, setValue];
}
```

위 코드에서 `setValue`가 상태값을 바꿔주는 `setState()`가 될 것이다.

그럼 `setState`를 자세하게 한 번 알아보자.

## setState()

setState를 이해하기 위해서는 아래를 먼저 이해해야 한다.

1. setState()는 비동기로 처리된다.
2. setState()를 연속으로 호출하면 Batch로 모아서 처리한다.
3. setState() 함수는 인자로 값과, 함수를 차례로 받는다.
   - 값 : 새로운 state 객체(값)을 받는다.
   - 함수 : 이전 state 객체를 인자로 받아 새로운 state 객체를 반환한다.

여기서 2번의 Batch로 처리한다는 것을 설명하자면, setState()를 모두 모아서 처리한다는 것이다. setState가 호출되자마자 바로 state가 변경되는 것이 아니라 리액트에게 변경해야하는 state를 알려주면 리액트는 다른 state의 변경 요청까지 모두 다 받은 뒤에야 한 번에 묶어서 state를 변경한 뒤 리렌더링한다.

결국 setState를 여러 번 호출한다면 리액트는 전달받은 변경할 state를 모두 가져와 병합하는데 이 과정에서 **가장 마지막 setState()**가 이전의 setState()를 덮어쓰게 되는 것이다.

따라서 만약 모든 setState()를 동기적으로 처리하고 싶을 경우 setState()에 값이 아닌 함수를 전달하면 된다.

```js
setNumber((number) => number - 1);
setNumber((number) => number * 2);
```

이렇게 함수를 인자로 전달할 경우 setState가 비동기로 동작하더라도 내부의 함수는 큐에 저장되어 순서대로 처리되기 때문에 첫 번째 함수의 리턴 state가 바로 두 번째 함수의 인자로 들어가게 되어 state가 차례로 업데이트된다.

## References

[일문학도의 개발자 도전기](https://velog.io/@juunghunz/ReactuseState-setState-%EC%9D%B8%EC%9E%90-%EA%B0%92-%ED%95%A8%EC%88%98)
