---
title: "[알고리즘] 이진 탐색 알고리즘"
excerpt: "탐색 범위를 반으로 좁혀가며 빠르게 탐색하는 알고리즘"

categories:
  - Algorithm
tags:
  - [Search, List, Python]

toc: true
toc_sticky: true

date: 2023-01-27
last_modified_at: 2023-01-27

header:
  teaser: /assets/images/teaser.png
---

# 이진 탐색 (Binary Search)

이진 탐색은 탐색 범위를 절반씩 좁혀가며 데이터를 탐색하는 알고리즘으로, 배열 내부의 데이터가 정렬되어 있어야만 사용할 수 있는 탐색 알고리즘이다.

이진 탐색은 위치를 나타내는 변수 3개를 사용하는데 탐색하고자 하는 범위의 시작점, 끝점 그리고 중간점이다. 찾으려는 데이터와 중간점 위치에 있는 데이터를 반복적으로 비교해서 원하는 데이터를 찾는 게 이진 탐색 과정이다.

구체적인 동작 과정은 다음과 같다.

1. 시작점과 끝점을 확인한 다음 둘 사이의 중간점을 정한다. 중간점이 실수일 때는 소수점 이하를 버린다.

2. 중간점의 데이터와 찾으려는 데이터를 비교하여 중간점의 데이터가 더 크면 끝점을 중간점 - 1로 옮긴다. 중간점의 데이터가 더 작으면 시작점을 중간점 + 1로 옮긴다.

3. 2번의 과정을 반복하면서 중간점에 위치한 데이터가 찾으려는 데이터와 같아질 때까지 탐색을 반복한다.

이렇게 2번의 과정을 반복할 때마다 확인하는 원소의 개수가 절반씩 줄어든다는 점에서 시간 복잡도가 O(logN)이다. 

따라서 탐색 범위가 2000만을 넘어가는 매우 큰 상황에서는 이진 탐색으로 문제에 접근해야 한다. 

처리해야 할 데이터의 개수나 값이 1000만 단위 이상으로 넘어가면 이진 탐색과 같이 O(logN)의 속도를 내야 하는 알고리즘을 알고리즘을 사용하도록 해야한다. 

## 이진 탐색의 구현

이진 탐색을 구현하는 방법에는 2가지가 있다.

### 재귀 함수를 이용한 구현

```py
def binary_search(array, target, start, end):
    if start > end:
        return None
    mid = (start + end) // 2
    if array[mid] == target:
        return mid
    elif array[mid] > target:
        return binary_search(array, target, start, mid - 1)
    else:
        return binary_search(array, target, mid + 1, end)

n, target = list(map(int, input().split()))
array = list(map(int, input().split()))

result = binary_search(array, target, 0, n-1)
if result == None:
    print("There's no target in array")
else:
    print(result + 1)
```

## 이진 탐색 예제 (파라메트릭 서치)

### 문제 - 나무 자르기

![image](https://user-images.githubusercontent.com/121740394/215106259-3a08af60-0721-4ac7-9a30-0bb3014495c6.png)

[백준 바로가기](https://www.acmicpc.net/problem/2805)

[[BOJ] 백준 2805번 - 나무 자르기 (Python)](https://jjunohj.github.io/boj/boj-2805/)

파라메트릭 서치란 최적화 문제를 결정 문제로 바꾸어 해결하는 기법이다. 여기서 결정 문제란 '예' 또는 '아니오'로 답하는 문제를 말한다.

'원하는 조건을 만족하는 가장 알맞은 값을 찾는 문제'에 주로 파라메트릭 서치를 사용한다.

예를 들어 범위 내에서 조건을 만족하는 가장 큰 값을 찾으라는 최적화 문제일 경우 이진 탐색으로 결정 문제를 해결하면서 범위를 좁혀갈 수 있다.

# References

이것이 취업을 위한 코딩테스트다 with 파이썬