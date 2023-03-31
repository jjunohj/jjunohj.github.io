---
title: "[이코테] 구현 문제 9 - 문자열 압축"
excerpt: "알고리즘 유형별 기출문제"

categories:
  - ecote
tags:
  - [이코테, Greedy, Python]

toc: true
toc_sticky: true

date: 2023-03-31
last_modified_at: 2023-03-31

header:
  teaser: /assets/images/ECOTE.png
---

![image](/assets/images/ECOTE_inner.png)

# 문제

[프로그래머스로 이동하여 직접 풀어보기 !](https://school.programmers.co.kr/learn/courses/30/lessons/60057)

## 설명

데이터 처리 전문가가 되고 싶은 "어피치"는 문자열을 압축하는 방법에 대해 공부를 하고 있습니다. 최근에 대량의 데이터 처리를 위한 간단한 비손실 압축 방법에 대해 공부를 하고 있는데, 문자열에서 같은 값이 연속해서 나타나는 것을 그 문자의 개수와 반복되는 값으로 표현하여 더 짧은 문자열로 줄여서 표현하는 알고리즘을 공부하고 있습니다.
간단한 예로 "aabbaccc"의 경우 "2a2ba3c"(문자가 반복되지 않아 한번만 나타난 경우 1은 생략함)와 같이 표현할 수 있는데, 이러한 방식은 반복되는 문자가 적은 경우 압축률이 낮다는 단점이 있습니다. 예를 들면, "abcabcdede"와 같은 문자열은 전혀 압축되지 않습니다. "어피치"는 이러한 단점을 해결하기 위해 문자열을 1개 이상의 단위로 잘라서 압축하여 더 짧은 문자열로 표현할 수 있는지 방법을 찾아보려고 합니다.

예를 들어, "ababcdcdababcdcd"의 경우 문자를 1개 단위로 자르면 전혀 압축되지 않지만, 2개 단위로 잘라서 압축한다면 "2ab2cd2ab2cd"로 표현할 수 있습니다. 다른 방법으로 8개 단위로 잘라서 압축한다면 "2ababcdcd"로 표현할 수 있으며, 이때가 가장 짧게 압축하여 표현할 수 있는 방법입니다.

다른 예로, "abcabcdede"와 같은 경우, 문자를 2개 단위로 잘라서 압축하면 "abcabc2de"가 되지만, 3개 단위로 자른다면 "2abcdede"가 되어 3개 단위가 가장 짧은 압축 방법이 됩니다. 이때 3개 단위로 자르고 마지막에 남는 문자열은 그대로 붙여주면 됩니다.

압축할 문자열 s가 매개변수로 주어질 때, 위에 설명한 방법으로 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이를 return 하도록 solution 함수를 완성해주세요.

## 제한 사항

- s의 길이는 1 이상 1,000 이하입니다.
- s는 알파벳 소문자로만 이루어져 있습니다.

## 입출력 예

| s                          | result |
| -------------------------- | ------ |
| "aabbaccc"                 | 7      |
| "ababcdcdababcdcd"         | 9      |
| "abcabcdede"               | 8      |
| "abcabcabcabcdededededede" | 14     |
| "xababcdcdababcdcd"        | 17     |

# 해결

```py
def solution(s):

    min_l = len(s) # 최대 길이

    for p in range(1, (len(s) // 2) + 1): #문자열의 절반 길이까지 단위 반복
        result = "" # 압축된 str

        prev_part = s[0:p] # 첫 마디
        count = 1 # 반복횟수 초기값 = 1
        for i in range(p, len(s), p): # p칸씩 확인
            next_part = s[i:i + p] # 다음 마디

            if prev_part == next_part: # 이전 마디와 다음 마디가 같을 경우
                count += 1 # 반복횟수 ++
            else:
                if count > 1: # 반복이 있을 경우
                    result += (str(count) + prev_part) # 반복횟수 + 이전 마디
                else: # 반복이 없을 경우
                    result += prev_part # 이전 마디만
                prev_part = next_part # 이전 마디와 다음 마디가 다르기 때문에 이전 <- 다음
                count = 1 # 반복 횟수 초기화
        if count > 1: # for문 종료되었을 때를 대비하여 다시 result에 삽입
            result += (str(count) + prev_part)
        else:
            result += prev_part
            print(result)

        min_l = min(min_l, len(result))
        print(min_l)

    return min_l
```
