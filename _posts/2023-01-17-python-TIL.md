---
title: "[Python] 파이썬 리스트 중복 제거하기"
excerpt: "set() / for / dict.fromkeys() / Comprehension"

categories:
  - Python
tags:
  - [List]

toc: true
toc_sticky: true

date: 2023-01-17
last_modified_at: 2023-01-17

header:
  teaser: /assets/images/teaser.png
---

## set()을 이용한 중복 제거

`set()`은 중복을 허용하지 않고, 순서가 없다는 특징이 있다.

따라서 `list`를 `set`으로 변경하면 중복된 값이 제거되고, 그 뒤에 다시 `list`로 변경하면 중복된 값이 제거된다.

단 이 방식으로 중복을 제거할 경우, 순서가 뒤죽박죽 된다는 단점이 있다.

만약 순서를 지켜야 할 경우, 반복문을 사용한다.

```py
list_1 = [1, 1, 2, 2, 3, 3, 4, 4]
list_2 = list(set(list_1))
print(list_2)
# [1 ,3, 4, 2]
```

## for 반복문을 이용한 중복 제거

`for`로 중복을 제거할 경우 순서가 보장된다.

```py
list_1 = [1, 1, 2, 2, 3, 3, 4, 4]
list_2 = list()
for i in list_1:
    if i not in list_2:
        list_2.append(i)
print(list_2)
# [1, 2, 3, 4]
```

## Comprehension을 이용한 중복 제거

`for`로 구현한 것과 유사하다.

```py
list_1 = [1, 1, 2, 2, 3, 3, 4, 4]
list_2 = list()
[list_2.append(x) for x in list_1 if x not in list_2]
print(list_2)
# [1, 2, 3, 4]
```

## dict.fromkeys()를 이용한 중복 제거

`dict.fromkeys()`는 딕셔너리 생성을 위한 키들을 입력 받는 함수인데, 키들은 중복값을 갖지 않기 때문에 자동으로 중복된 값들을 제거해준다.

아래와 같이 사용하면 된다.

```py
list_1 = [1, 1, 2, 2, 3, 3, 4, 4]
list_2 = list(dict.fromkeys(list_1))
print(list_2)
# [1, 2, 3, 4]
```

## References

[codechacha.com](https://codechacha.com/ko/python-list-remove-duplicates/)