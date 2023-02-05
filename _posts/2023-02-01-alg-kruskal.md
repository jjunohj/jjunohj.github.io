---
title: "[알고리즘] 크루스칼 알고리즘 (Kruskal Algorithm)"
excerpt: "대표적인 최소 신장 트리 알고리즘"

categories:
  - Algorithm
tags:
  - [MST, Tree, Greedy, Graph, Python]

toc: true
toc_sticky: true

date: 2023-02-01
last_modified_at: 2023-02-01

header:
  teaser: /assets/images/teaser.png
---



# 크루스칼 알고리즘이란

`크루스칼 알고리즘`은 `그리디 메소드`와 간선 선택을 기반으로 한 `MST 알고리즘`이다.

`MST`, `최소 비용 신장 트리`는 `신장 트리`의 조건을 만족하는 가장 최소 비용의 간선들로 구성된 트리이다.

## 크루스칼 알고리즘의 동작

`크루스칼 알고리즘`은 다음과 같은 순서로 동작한다.

1. 간선 데이터를 비용에 따라 오름차순으로 정렬한다.
2. 간선을 하나씩 확인하며 현재의 간선이 사이클을 발생시키는지 확인한다.
2-1. 사이클이 발생하지 않는 경우 최소 신장 트리에 포함시킨다.
2-2. 사이클이 발생하는 경우 최소 신장 트리에 포함시키지 않는다.
3. 모든 간선에 대하여 2번의 과정을 반복한다.

그림으로 보는 크루스칼 알고리즘의 동작도는 다음과 같다.

![image](https://user-images.githubusercontent.com/121740394/215971493-8caa695d-facb-4ebb-bd93-9e7821077687.png)

[이미지 출처) Heee's Development Blog](https://gmlwjd9405.github.io/2018/08/29/algorithm-kruskal-mst.html)

## 크루스칼 알고리즘 구현

파이썬으로 구현한 크루스칼 알고리즘의 소스코드는 다음과 같다.

```py
def find_parent(parent, x):
  if parent[x] != x:
    parent[x] = find_parent(parent, parent[x])
  return parent[x]

def union_parent(parent, a, b):
  a = find_parent(parent, a)
  b = find_parent(parent, b)
  if a < b:
    parent[b] = a
  else:
    parent[a] = b

v, e = map(int, input().split())
parent = [0] * (v + 1)

edges = []
result = 0

for i in range(1, v + 1):
  parent[i] = i

for _ in range(e):
  a, b, cost = map(int, input().split())
  edges.append((cost, a, b))

edges.sort()

for edge in edges:
  cost, a, b = edge
  if find_parent(parent, a) != find_parent(parent, b):
    union_parent(parent, a, b)
    result += cost

print(result) 
```

## 크루스칼 알고리즘의 시간 복잡도

`서로소 집합 알고리즘 (Union-Find)`의 시간 복잡도는 크루스칼 알고리즘 내부의 간선 정렬 시간 복잡도보다 작으므로 무시된다.

`서로소 집합 알고리즘`에 관한 포스팅은 여기로 ! [[자료구조] 서로소 집합 알고리즘](https://jjunohj.github.io/datastructure/DS-disjoint-set/)

크루스칼 알고리즘에서 간선 `E`개를 정렬하는 데 걸리는 시간 복잡도는 `O(ElogE)`이기 때문에, 크루스칼 알고리즘의 시간 복잡도 또한 `O(ElogE)`로 동일하다.

# References

[이미지 출처) Heee's Development Blog](https://gmlwjd9405.github.io/2018/08/29/algorithm-kruskal-mst.html)

이것이 취업을 위한 코딩테스트다 with 파이썬