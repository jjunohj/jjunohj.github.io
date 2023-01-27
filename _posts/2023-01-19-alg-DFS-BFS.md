---
title: "[알고리즘] 탐색 알고리즘 DFS/BFS"
excerpt: "그래프를 탐색하기 위한 대표적인 두 가지 알고리즘"

categories:
  - Algorithm
tags:
  - [DFS, BFS, Recursive, Stack, Queue, Python]

toc: true
toc_sticky: true

date: 2023-01-19
last_modified_at: 2023-01-27

header:
  teaser: /assets/images/teaser.png
---

# 그래프

`DFS`, `BFS`를 설명하기 전에 `Graph`의 기본 구조를 알아야 한다.

해당 내용은 자세히 포스팅 해놓았으니 다음 링크를 클릭하자 !

[[자료구조] 그래프(Graph)란](https://jjunohj.github.io/datastructure/DS-graph/)

다음 모양의 트리에서 직접 DFS, BFS를 적용하며 이해해보도록 하자.

![image](https://user-images.githubusercontent.com/121740394/215081227-255c7b14-d82a-4f88-809c-432a00d848ae.png)


# 그래프 탐색 알고리즘


## DFS

`DFS`는 `Depth-First Search`, `깊이 우선 탐색`이라고도 부르며, 그래프에서 **깊은 부분을 우선적으로 탐색**하는 알고리즘이다. 

즉, 특정한 경로로 탐색하다가 특정한 상황에서 최대한 깊숙히 들어가서 노드를 방문한 후, 다시 돌아가 다른 경로로 탐색하는 것이다.

`DFS`는 `스택` 자료구조를 이용하며, 구체적인 동작 과정은 다음과 같다.

1. 탐색 시작 노드를 스택에 삽입하고 방문 처리를 한다.
2. 스택의 최상단 노드에 방문하지 않은 인접 노드가 있으면 해당 인접 노드를 스택에 넣고 방문 처리를 한다.
3. 스택의 최상단 노드에 만약 방문하지 않은 인접 노드가 없으면 스택에서 최상단 노드를 꺼낸다.
4. 2, 3번을 더 이상 수행할 수 없을 때 까지 반복한다.

![image](https://user-images.githubusercontent.com/121740394/215082724-d19e2262-b500-4a5d-ba90-855ac2598d54.png)

결과적으로 위 그래프에서 노드의 탐색 순서는 다음과 같다.

`1 > 2 > 4 > 5 > 3 > 6`

`DFS`는 `스택` 자료구조에 기초한다는 점에서 구현이 간단하다. 실제로는 스택을 쓰지 않아도 되며 탐색을 수행함에 있어서 데이터의 개수가 `N`개인 경우 `O(N)`의 시간이 소요된다는 특징이 있다.

또한 `DFS`는 `스택`을 이용하기 때문에 `재귀 함수`를 이용했을 때 매우 간결하게 구현할 수 있다.

파이썬으로 작성한 `DFS` 예제 소스코드는 다음과 같다.

```py
def dfs(graph, v, visited):
  visited[v] = True
  print(v, end= ' ')
  for i in graph[v]:
    if not visited[i]
      dfs(graph, i, visited)

visited = [False] * n # n은 노드의 수
dfs(graph, 1, visited)
```


## BFS

`BFS`는 `Breadth First Search`, `너비 우선 탐색`이라고도 부르며, 그래프에서 가까운 노드부터 탐색하는 알고리즘이다. 

`BFS` 구현은 `선입선출(FIFO)` 방식인 `큐` 자료구조를 이용하는 것이 정석이다. 인접한 노드를 반복적으로 큐에 넣도록 알고리즘을 작성하면 자연스럽게 먼저 들어온 것이 먼저 나가게 되어, 가까운 노드부터 탐색을 진행하게 된다.

구체적인 동작 과정은 다음과 같다.

1. 탐색 시작 노드를 큐에 삽입하고 방문 처리를 한다.
2. 큐에서 노드를 꺼내 해당 노드의 인접 노드 중에서 방문하지 않은 노드를 모두 큐에 삽입한 뒤 방문 처리를 한다.
3. 2번의 과정을 더 이상 수행할 수 없을 때까지 반복한다.

![image](https://user-images.githubusercontent.com/121740394/215085426-e5ee7cc2-ad12-4823-bbf3-7ca14d82e627.png)

결과적으로 위 그래프에서 노드의 탐색 순서는 다음과 같다.

`1 > 2 > 3 > 4 > 5 > 6 > 7`

`BFS`는 `큐` 자료구조에 기초한다는 점에서 구현이 간단하다. 코드로 구현할 때는 `deque` 라이브러리를 사용하는 것이 좋으며 수행함에 있어 `O(N)`의 시간이 소요된다. 일반적인 경우 실제 수행 시간은 `DFS`보다 좋은 편이다.

파이썬으로 작성한 `BFS` 예제 소스코드는 다음과 같다.

```py
from collections import deque

def bfs(graph, start, visited):
  queue = deque([start])
  visited[start] = True

  while queue:
    v = queue.popleft()
    print(v, end=' ')
    for i in graph[v]:
      if not visited[i]:
        queue.append(i)
        visited[i] = True

visited = [False] * n # n은 노드의 수
bfs(graph, 1, visited)
```

## DFS/BFS 상황별 선택 가이드

두 가지 알고리즘의 *시간 복잡도는 거의 동일하다.* 하지만 공간 복잡도에 있어서 <u>한 레벨에 존재하는 노드의 수</u>와 <u>트리의 최대 높이</u>를 비교하여 한 레벨에 존재하는 노드의 수가 더 클 경우 `DFS`를, 최대 높이가 더 클경우 `BFS`가 더 효율적이다.

따라서 **가장 가까운 이웃 혹은 최단 경로를 찾는 문제일 경우 BFS**를 사용하고, **퍼즐을 풀거나 위상 정렬(리프 노드에 도달했을 때 결과를 평가해야 하는 경우)을 해야하는 경우 DFS**가 더 잘 수행된다.

# References

이것이 취업을 위한 코딩 테스트다 with 파이썬

[Images from betterprogramming.pub](https://betterprogramming.pub/algorithms-searching-through-a-tree-33610e4577bd)