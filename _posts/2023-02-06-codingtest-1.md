---
title: "[이코테] 그리디 문제 01 - 모험가 길드"
excerpt: "알고리즘 유형별 기출문제"

categories:
  - ecote
tags:
  - [이코테, Greedy, Python]

toc: true
toc_sticky: true

date: 2023-02-06
last_modified_at: 2023-02-06

header:
  teaser: /assets/images/ECOTE.png
---

![image](/assets/images/ECOTE_inner.png)

# 문제

![image](https://user-images.githubusercontent.com/121740394/216900519-dfee4b12-10b2-46c1-b8a6-0078c41b8895.png)



## 해결

우선 문제를 풀면서 생각한 아이디어부터 나열해보면,

1. `1`이 여러 개면 되도록 `1, 1, 1, 1, ... 1`이 되어야 한다. 가능한 한 많은 그룹을 만들어야 하기 때문에.

2. 몇몇의 모험가는 여행을 떠나지 않아도 되기 때문에 꼭 모두를 선택할 필요가 없다는 것이므로, 큰 공포도의 모험가를 굳이 챙길 필요가 없다. 어차피 `1, 2` 와 같은 작은 그룹에 뭉치기 때문이다. 예를들어, 문제의 예시인 `2 3 1 2 2`에서 `(1), (2, 2)`나 `(1), (2, 2, 3)`이나 `(2, 2), (1, 2, 3)`이나 결과값은 똑같단 뜻이다. 그렇기 때문에 작은 공포도의 모험가들부터 뭉치고 마지막에 남은 모험가들은 과감하게 버린다는 생각으로 접근한다.

### 정답

```py
n = int(input())
advntr = list(map(int, input().split()))
advntr.sort()
grp_cnt = 0
advntr_cnt = 0

for i in advntr: # 한 사람의 공포도에 대해
  advntr_cnt += 1 # 사람을 한 명씩 추가시켜가며
  if advntr_cnt >= i: # 그룹원이 공포도와 같아질 때
    grp_cnt += 1 # 한 그룹 달성
    advntr_cnt = 0 # 다음 사람의 측정을 위해 그룹원 초기화

print(grp_cnt)
```

# References

이것이 취업을 위한 코딩테스트다 with 파이썬