---
title: "[Python] 파이썬 리스트 덧붙이기"
excerpt: "\+ | extend | append"

categories:
  - Python
tags:
  - [List]

toc: true
toc_sticky: true

date: 2023-01-16
last_modified_at: 2023-01-17

header:
  teaser: /assets/images/teaser.png
---

## list + list

```py
list1 = [1, 2, 3]
list1 = list1 + [4, 5]
print(lis1)
# [1, 2, 3, 4, 5]
```

* `+`를 사용하면 새로운 리스트가 반환되므로 똑같이 `list1`에 재대입해도 리스트의 id가 변경된다.

아래 코드를 실행하면

```py
list1 = [1,2,3]
print('original id:', id(list1))
list1 = list1 + [[4,5]]
print('list1:', list1)
print('+ id:', id(list1))
```

결과는 다음과 같다.

```
original id: 2359106440768
list1: [1, 2, 3, [4, 5]]
+ id: 2359106439872
```

원래 list1의 id와 재대입된 list1의 id가 다르다.

## extend

```py
list1 = [1, 2, 3]
list1.extend([4, 5])
print(list1)
# [1, 2 ,3 ,4, 5]
```

* `extend`를 사용하면 <u>list1의 주소 값이 변하지 않고 유지된다.</u>

마찬가지로 아래 코드를 실행하면

```py
list1 = [1,2,3]
print('original id:', id(list1))
list1.extend([4,5])
print('list1:', list1)
print('+ id:', id(list1))
```

결과는 아래와 같다.

```
original id: 2359106440768
list1: [1, 2, 3, [4, 5]]
+ id: 2359106440768
```

즉 원래 list1의 id값이 변하지 않는다.

## append

`append`와 `extend`의 공통점

* `append`를 사용했을 때는 `extend`와 마찬가지로 <u>id값이 변경되지 않는다.</u> 즉, 새로운 리스트를 반환하지 않고 원래의 리스트에 값이 추가된다.


`append`와 `extend`의 차이점

* `append`는 매개변수 그 자체를 원소로 넣는다.
* `extend`는 iterable의 각 항목들을 원소로 넣는다.
    이때, 가장 바깥쪽 iterable을 넣는다.

```py
x = ['a', 'b', 'c']
y = [['x', 'y']]
x.append(y)
print('x:', x)

# x: ['a', 'b', 'c', [['x', 'y']]]
```

```py
x = ['a', 'b', 'c']
y = [['x', 'y']]
x.extend(y)
print('x:', x)

# x: ['a', 'b', 'c', ['x', 'y']]
```

결론적으로 `append`는 리스트 끝에 x 1개를 원소 그대로 넣고, `extend(iterable)`은 리스트 끝에 가장 바깥쪽 iterable의 모든 항목을 넣는다.

## Reference

[minam.log](https://velog.io/@cha-suyeon/Python-%EB%A6%AC%EC%8A%A4%ED%8A%B8%EC%9D%98-%EB%8D%94%ED%95%98%EA%B8%B0-extendappend-%EC%B0%A8%EC%9D%B4-%EC%A0%90%ED%94%84%ED%88%AC%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EC%A2%85%ED%95%A9%EB%AC%B8%EC%A0%9C-3%EB%B2%88)

<https://m.blog.naver.com/wideeyed/221541104629>