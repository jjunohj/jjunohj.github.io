---
title: "[이코테] 그리디 문제 03 - 문자열 뒤집기"
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

다솜이는 0과 1로만 이루어진 문자열 S를 가지고 있습니다. 다솜이는 이 문자열 S에 있는 모든 숫자를 전부 같게 만들려고 합니다. 다솜이가 할 수 있는 행동은 S에서 연속된 하나 이상의 숫자를 잡고 모두 뒤집는 것입니다. 뒤집는 것은 1을 0으로, 0을 1로 바꾸는 것을 의미합니다.
예를 들어 S = 0001100일 때는 다음과 같습니다.

1. 전체를 뒤집으면 1110011이 됩니다.
2. 4번째 문자부터 5번째 문자까지 뒤집으면 1111111이 되어서 두 번 만에 모두 같은 숫자로 만들 수 있습니다.

하지만, 처음부터 4번째 문자부터 5번째 문자까지 문자를 뒤집으면 한 번에 0000000이 되어서 1번 만에 모두 같은 숫자로 만들 수 있습니다. 문자열 S가 주어졌을 때, 다솜이가 해야 하는 행동의 최소 횟수를 출력하세요.

<a href="https://www.acmicpc.net/problem/1439" target="_blank">백준 동일문제 풀러가기</a>

## 입력 조건

* 첫째 줄에 0과 1로만 이루어진 문자열 S가 주어집니다. S의 길이는 100만보다 작습니다.

## 출력 조건

* 첫째 줄에 다솜이가 해야 하는 행동의 최소 횟수를 출력합니다.

# 해결

## 아이디어

* 연속된 숫자를 바꿀 수 있으므로, 0과 1의 연속된 공간을 한번에 바꾸는 것이 이득이다.

* 따라서 처음부터 끝까지 0과 1중 뭉쳐져 있는 그룹의 수 중 작은 수가 답이다.

## 정답

```py
s = input()
temp = s[0] # 첫번째 문자 temp에 저장
cnt = [0] * 2 # 0, 1 연속 숫자 저장 배열
cnt[int(temp)] = 1 # 첫번째 문자의 카운트 + 1

for num in s:
  if temp != num: # 만약 저장된 temp와 num이 다를 경우
    cnt[int(num)] += 1 # num 숫자 카운트 + 1
    temp = num # temp에 새로운 숫자 num 저장

if min(cnt) == 0: # 만약 min값이 0일 경우 하나도 안바뀌었다는 의미로 0
  print(0)
else: print(min(cnt)) # 그 외에는 뭉쳐져있는 0 혹은 1의 수 중 작은 수
```