---
title: "[자료구조] 서로소 집합 자료구조 (Union-Find)"
excerpt: "쌓아보자 자료구조"

categories:
  - DataStructure
tags:
  - [Union, Find, Python]

toc: true
toc_sticky: true

date: 2023-02-01
last_modified_at: 2023-02-01

header:
  teaser: /assets/images/DS-disjoint-set.png
---

## 서로소 집합

* <b>서로소 집합(Disjoint Sets)</b>이란 <u>공통 원소가 없는 두 집합</u>을 의미한다.

![image](https://user-images.githubusercontent.com/121740394/215975147-171c0004-d103-4496-9d67-6cd7e39393fc.png)

# 서로소 집합 자료구조

* 서로소 부분 집합들로 나누어진 원소들의 데이터를 처리하기 위한 자료구조

* 서로소 부분 집합 자료구조는 두 종류의 연산으로 조작할 수 있다.
  + **union(합집합) 연산**: 2개의 원소가 포함된 집합을 하나의 집합으로 합치는 연산
  + **find(찾기) 연산**: 특정한 원소가 속한 집합이 어떤 집합인지 알려주는 연산

따라서 서로소 집합 자료구조는 union-find 자료구조라고 불리기도 한다.

서로소 집합 자료구조를 구현할 때는 트리 자료구조를 이용하여 집합을 표현하는데, 합집합 연산이 주어졌을 때 트리 자료구조를 이용해서 집합을 표현하는 서로소 집합 계산 알고리즘은 다음과 같다.

1. union 연산을 확인하여, 서로 연결된 두 노드 A, B를 확인한다.
1-1. A와 B의 루트 노드 A', B'를 찾는다.
1-2. A'를 B'의 부모 노드로 설정한다. (혹은 반대)
2. 모든 union 연산을 처리할 때까지 1번을 반복한다.

> 보통 1-2번에서 번호가 작은 원소가 부모 노드가 되도록 구현하는 경우가 많다.

## 서로소 집합 자료구조 동작 과정

* 처리할 연산: union(1, 4), union(2, 3), union(2, 4), union(5, 6)

![image](https://user-images.githubusercontent.com/121740394/215977024-1638a614-1f8e-468d-ac6a-d6963590b727.png)
![image](https://user-images.githubusercontent.com/121740394/215977089-3c43e9cf-1189-4e0d-8dda-b88c75fefb7b.png)
![image](https://user-images.githubusercontent.com/121740394/215976890-92991d30-9bab-42cf-a2f4-b137beee199c.png)
![image](https://user-images.githubusercontent.com/121740394/215977137-617e4b7e-0692-4f07-8974-af78a4552ddc.png)
![image](https://user-images.githubusercontent.com/121740394/215977172-6c44bb11-e3f5-4976-919a-7b1acb8e5e20.png)

## 서로소 집합 자료구조 확인

* 서로소 집합 자료구조에서는 연결성을 통해 집합의 형태를 확인할 수 있다.

![image](https://user-images.githubusercontent.com/121740394/215977351-52c7bc93-26f5-4dc0-ad78-1bbc33fe71c8.png)

* 기본적인 형태의 서로소 집합 자료구조에서는 루트 노드에 즉시 접근할 수 없고, 루트 노드를 찾기 위해 부모 테이블을 계속해서 확인하며 거슬러 올라가야 한다.

## 서로소 집합 자료구조 구현

파이썬으로 작성한 서로소 집합 자료구조의 소스코드는 다음과 같다.

```py
# 특정 원소가 속한 집합을 찾기
def find_parent(parent, x):
    # 루트 노드가 아니라면, 루트 노드를 찾을 때까지 재귀적으로 호출
    if parent[x] != x:
        return find_parent(parent, parent[x])
    return x

# 두 원소가 속한 집합을 합치기
def union_parent(parent, a, b):
    a = find_parent(parent, a)
    b = find_parent(parent, b)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b

# 노드의 개수와 간선(Union 연산)의 개수 입력 받기
v, e = map(int, input().split())
parent = [0] * (v + 1) # 부모 테이블 초기화하기

# 부모 테이블상에서, 부모를 자기 자신으로 초기화
for i in range(1, v + 1):
    parent[i] = i

# Union 연산을 각각 수행
for i in range(e):
    a, b = map(int, input().split())
    union_parent(parent, a, b)

# 각 원소가 속한 집합 출력하기
print('각 원소가 속한 집합: ', end='')
for i in range(1, v + 1):
    print(find_parent(parent, i), end=' ')

print()

# 부모 테이블 내용 출력하기
print('부모 테이블: ', end='')
for i in range(1, v + 1):
    print(parent[i], end=' ')
```

## 서로소 집합 자료구조의 문제점

* union 연산이 편향되게 이루어지는 경우 find(부모 찾기)가 비효율적으로 동작하게 되는데, 최악의 경우 O(V)의 시간 복잡도를 갖는다.

![image](https://user-images.githubusercontent.com/121740394/215977873-edef4f21-5387-43c5-a8e6-283a940ef4bd.png)

## 서로소 집합 자료구조 최적화 : 경로 압축

* union 연산이 편향되게 이루어져 find가 비효율적으로 동작하는 걸 방지하기 위해 경로 압축을 사용할 수 있다.

* 경로 압축(Path Compression)이란, 재귀 함수의 인자가 될 변수에 재귀 함수의 리턴값을 대입해나가는 방식

* 경로 압축 최적화 방법으로 Find 함수를 재귀적으로 호출한 뒤 부모 테이블 값을 바로바로 갱신한다.

```py
# 특정 원소가 속한 집합을 찾기
def find_parent(parent, x):
    # 루트 노드가 아니라면, 루트 노드를 찾을 때까지 재귀적으로 호출
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]
```

위에 예시로 든 모든 union 함수를 처리한 후 각 원소에 대하여 Find 함수를 수행하면 다음과 같이 부모 테이블이 갱신된다.

![image](https://user-images.githubusercontent.com/121740394/215978538-dab28077-44e0-46d5-85a1-5bf989e1fa2a.png)

# 서로소 집합 알고리즘의 전체 코드

```py
# 특정 원소가 속한 집합을 찾기
def find_parent(parent, x):
    # 루트 노드가 아니라면, 루트 노드를 찾을 때까지 재귀적으로 호출
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]

# 두 원소가 속한 집합을 합치기
def union_parent(parent, a, b):
    a = find_parent(parent, a)
    b = find_parent(parent, b)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b

# 노드의 개수와 간선(Union 연산)의 개수 입력 받기
v, e = map(int, input().split())
parent = [0] * (v + 1) # 부모 테이블 초기화하기

# 부모 테이블상에서, 부모를 자기 자신으로 초기화
for i in range(1, v + 1):
    parent[i] = i

# Union 연산을 각각 수행
for i in range(e):
    a, b = map(int, input().split())
    union_parent(parent, a, b)

# 각 원소가 속한 집합 출력하기
print('각 원소가 속한 집합: ', end='')
for i in range(1, v + 1):
    print(find_parent(parent, i), end=' ')

print()

# 부모 테이블 내용 출력하기
print('부모 테이블: ', end='')
for i in range(1, v + 1):
    print(parent[i], end=' ')
```

# References

이것이 취업을 위한 코딩테스트다 with 파이썬