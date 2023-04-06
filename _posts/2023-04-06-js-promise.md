---
title: "[JS] Promise, then 제대로 이해하기"
excerpt: "서버님, 데이터 좀 빨리 보내주세요."

categories:
  - JavaScript
tags:
  - [JavaScript, Promise, then]

toc: true
toc_sticky: true

date: 2023-04-06
last_modified_at: 2023-04-06

header:
  teaser: /assets/images/JavaScript.png
---

![JavaScript](/assets/images/JavaScript.png)

프론트엔드 개발자로서 웹 개발을 할때, 서버 혹은 Open-API에서 데이터를 받아와 웹페이지에 띄우게 될 일이 매우 많다. ~~(setTime, async, fetch 등등,, 하나도 모르면 간첩)~~

이 때, 정말 매우 빠르게 빛의 속도로 데이터 요청을 보내고 그 요청에 대한 결과값을 빠르게 웹 페이지에 띄워주면 좋겠지만, 실상은 그렇지 않다. 서버에서 데이터를 받아오는 것은 시간이 어느정도 걸리기 마련이다.

그럼 우리는 서버에서 데이터를 받아올 때까지 기다린 후에 받아오면 그 요소를 띄워준 뒤 다음 코드를 실행하는 것이 좋을까? 아니면 그냥 무시한 후 다른 코드부터 실행하는 것이 좋을까? 이에 대한 문제가 바로 **동기/비동기 처리**이다.

**동기 처리**란 하나하나 요청에 대한 응답을 기다리고 서버가 응답을 줄 때까지 기다린 뒤 다음 코드가 실행되는 처리 방식이고, **비동기 처리**란 요청에 대한 응답을 기다리지 않고 일단 요청을 보내놓고 바로 다음 코드를 실행하는 처리 방식이다.

자바스크립트는 기본적으로 비동기적으로 동작하기 때문에 요청에 대한 응답이 오기까지 기다리지 않고 다음 코드를 수행한다. 그렇기 때문에 요청에 대한 응답이 오기도 전에 다음 코드에서 응답을 표시하려고 하면 오류가 발생하거나 빈 화면이 뜬다. 이와 같은 문제를 해결하기 위한 방법 중 하나가 바로 **Promise**이다.

# Promise란?

프로미스는 자바스크립트의 <b>비동기 처리에 사용되는 객체</b>이며, 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용한다.

## Promise의 3가지 상태 (states)

프로미스를 사용할 때 알아야 하는 가장 기본적인 개념이 바로 프로미스의 상태이다. 여기서 말하는 상태란 프로미스의 처리 과정을 의미한다. 프로미스는 기본적으로 다음과 같은 3가지 상태를 갖는다.

- Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
- Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
- Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

## then이란?

`then`이란 서버로부터 응답이 왔을 때 성공, 혹은 실패의 결과를 담은 Promise 객체를 파라미터로 실행하게 될 콜백들을 등록하는 <b>Promise 객체의</b>메소드이다. then의 첫 번째 파라미터는 **fulfilled** 상태가 되었을 때 실행할 콜백 함수이며, 두 번째 파라미터는 **rejected** 상태가 되었을 때 실행할 콜백함수이다. then 메소드는 마찬가지로 Promise 객체를 반환하며 이 Promise 객체에 대한 또 다른 `then`을 설정할 수도 있다. _이를 Promise chaining이라고 한다 !_

### then의 리턴 값에 따른 작업 상태 결과

- return값이 Promise일 경우 : 동일한 상태값(fulfilled, rejected...)을 갖는 Promise를 리턴
- return값이 기본, 참조 타입일 경우 : fulfilled 상태로 리턴된다.
- return값이 없을 경우 : fulfilled 상태지만 undefined가 리턴된다.
- 콜백 함수 내부에서 에러가 발생할 경우 : rejected 상태가 되고, 작업 실패 정보를 담은 Promise 객체를 리턴

### catch, finally

1. `catch` : rejected 상태일 때 실행하는 콜백함수를 적는다. `then(undefined, 콜백)`의 축약 버전이다. 보통 맨 마지막 줄에 작성한다.

2. `finally` : rejected이든 fulfilled이든 무조건 실행한다. 보통 `catch`보다 밑에 작성한다.

## Promise와 then의 작동 방식

Promise의 작동 방식을 `fetch`함수를 통해 간단히 알아보자.

`fetch`는 프론트가 서버에 원하는 데이터를 요청할 수 있도록 돕는 함수이며, 첫번째 인자 값으로 url을 넣어주고 두번째 인자로는 post와 delete할 때 요청할 데이터를 head와 body에 담아서 보내준다.

```js
const successCallback = function (result) {};
const errorCallback = function (result) {};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST", // 데이터 종류
  headers: {
    // 요청에 대한 부가 정보
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    // 실제 데이터를 담는 부분, 보통 post나 put에 해당
    title: "Test",
    body: "I am testing!",
    userId: 1,
  }),
}).then(successCallback, errorCallback);
```

위 `fetch`함수를 실행했다면 서버로부터 이 요청의 응답을 Promise객체에 담은 뒤 성공 혹은 실패 값의 `status`를 담은 Promise객체를 `then`의 첫 번째 파라미터로 전달한다. 이 때 `fetch`함수를 요청해놓고 아직 서버로부터 요청의 응답이 오지않은 상태가 **Pending**상태이다. 그리고 비동기 처리가 완료되어 Promise가 요청한 결과 값이 반환이 된 상태, 즉 Promise가 Pending에서 **fulfilled** 상태가 될 때 바로 실행할 Callback 함수를 `.then()`의 소괄호 안에 넣게 된다. 굳이 비유하자면, 메일 예약 전송을 걸어두고, 다음 코드를 동기적으로 실행하게 되는 것이다. 이후 동기적으로 코드를 실행하다가 서버로부터 응답이 와서 Promise가 fulfilled 상태가 되면 작업 성공 정보가 담긴 Promise 객체를 then 메소드의 첫 번째 파라미터로 주어진 `successCallback`함수의 파라미터로 전달 후 실행한다. 만약 요청이 실패할 경우에는 **rejected**상태가 되어 작업 실패 정보가 담긴 Promise 객체를 then 메소드 안의 두 번째 파라미터로 주어진 `errorCallback` 함수의 파라미터로 전달 후 실행한다. 이런 식으로 순차적으로 then 메소드를 계속해서 실행해 나간다. 단, 모든 then은 promise객체를 리턴해야한다.

### + async, await

`await`은 Promise 객체가 fulfilled 상태가 될 때까지 기다리고 작업 성공 결과를 추출해서 리턴한다. `await`을 사용할 때는 항상 짝꿍인 `async`를 필수로 사용해야 하는데, 이는 곧 비동기 함수라는 것을 표시한다. 따라서 `await`은 `async`가 붙은 함수 안에서만 사용이 가능하다. `async` 객체는 항상 Promise 객체를 리턴한다.

# References

[CAPTAIN PANGYO](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)

[무엇이 될지 모르는 평범한 개발자](https://zibu-story.tistory.com/127)
