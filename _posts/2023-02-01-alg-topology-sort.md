---
title: "[알고리즘] 위상 정렬 (Topology Sort)"
excerpt: "방향성에 맞게 순서대로 나열하자"

categories:
  - Algorithm
tags:
  - [Sort, Tree, Graph, Queue, Python]

toc: true
toc_sticky: true

date: 2023-02-01
last_modified_at: 2023-02-01

header:
  teaser: /assets/images/teaser.png
---


# 위상 정렬 (Topology Sort)

`위상 정렬`은 `정렬` 알고리즘의 일종으로, **순서가 정해져 있는 일련의 작업을 차례대로 수행해야 할 때** 사용할 수 있는 알고리즘이다.

즉, 방향 그래프의 모든 노드를 **방향성에 거스르지 않도록 순서대로 나열하는 것**이다.

예시를 들어보자.

컴퓨터공학과의 커리큘럼이 아래 그림과 같이 총 3개의 과목만으로 구성되고, '알고리즘'의 선수과목으로 '자료구조'가, '고급 알고리즘'의 선수과목으로 '알고리즘'이 있다고 가정한다.

![image](https://user-images.githubusercontent.com/121740394/215981148-11f998ff-4c34-4c05-b877-d495016bb563.png)

이 때 주어진 그래프에서 자료구조, 알고리즘, 고급 알고리즘의 진입차수(Indegree)는 각각 0, 1, 2다. 

이 진입차수를 이용한 위상 정렬 알고리즘은 다음과 같다.

1. 진입차수가 0인 노드를 `큐`에 넣는다.
2. `큐`가 빌 때까지 다음의 과정을 반복한다.
2-1. `큐`에서 원소를 꺼내 해당 노드에서 출발하는 간선을 그래프에서 제거한다.
2-2. 새롭게 진입차수가 0이 된 다음 노드를 `큐`에 넣는다.

이때 모든 원소를 방문하기 전에 큐가 빈다면 `사이클`이 존재한다고 판단할 수 있는데, 이는 `사이클`에 포함되어 있는 원소 중 어떠한 원소도 큐에 들어가지 못하기 때문에, 원소가 V번 추출되기 전에 큐가 비어버리는 것은 `사이클`이 발생했다고 볼 수 있는 것이다.

![image](https://user-images.githubusercontent.com/121740394/215982911-17d255d7-0e93-44c9-86ec-490a948f75df.png)

그럼 위 그래프의 경우에 직접 위상 정렬된 결과를 구해보자.

결과는 `1 2 5 3 6 4 7` 이 답이 될 것이다.

이때 `큐`에 새롭게 들어가는 원소가 2개 이상인 경우가 있다면 여러 가지의 답이 존재할 수 있다.

## 위상 정렬 구현

위상 정렬을 파이썬으로 구현한 소스코드는 아래와 같다.

```py
import sys
from collections import deque

input = sys.stdin.readline
# 노드의 개수와 간선의 개수 입력
v, e = map(int, input().split())
# 모든 노드에 대한 진입차수는 0으로 초기화
indegree = [0] * (v + 1)
# 각 노드에 연결된 간선 정보를 담기 위한 연결 리스트
graph = [[] for _ in range(v + 1)]

for _ in range(e):
    a, b = map(int, input().split())
    graph[a].append(b)
    indegree[b] += 1


# 위상 정렬 함수
def topology_sort():
    result = []
    q = deque()

    for i in range(1, v + 1):
        if indegree[i] == 0:
            q.append(i)

    while q:
        now = q.popleft()
        result.append(now)
        # 해당 원소와 연결된 노드들의 진입차수에서 1빼기
        for g in graph[now]:
            indegree[g] -= 1
            if indegree[g] == 0:
                q.append(g)

    # 위상 정렬 수행한 결과 출력
    for res in result:
        print(res, end=' ')


topology_sort()

# sample input
# 7 8
# 1 2
# 1 5
# 2 3
# 2 6
# 3 4
# 4 7
# 5 6
# 6 4
```

## 위상 정렬의 시간 복잡도

위상 정렬을 수행할 때는 차례대로 모든 노드를 확인하면서 `O(V)`, 해당 노드에서 출발하는 간선을 차례대로 제거 `O(E)`해야하기 때문에 `O(V+E)`의 시간이 소요된다. 

# References

이것이 취업을 위한 코딩테스트다 with 파이썬