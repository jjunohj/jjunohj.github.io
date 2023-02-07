---
title: "[이코테] 그리디 문제 06 - 무지의 먹방 라이브"
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

[프로그래머스로 이동하여 직접 풀어보기 !](https://school.programmers.co.kr/learn/courses/30/lessons/42891)

평소 식욕이 왕성한 무지는 자신의 재능을 뽐내고 싶어 졌고 고민 끝에 카카오 TV 라이브로 방송을 하기로 마음먹었다.

![image](https://user-images.githubusercontent.com/121740394/217051564-5af7a2cf-cc93-4753-aa3b-3ce7df37d06c.png)

그냥 먹방을 하면 다른 방송과 차별성이 없기 때문에 무지는 아래와 같이 독특한 방식을 생각해냈다.

회전판에 먹어야 할 N 개의 음식이 있다.
각 음식에는 1부터 N 까지 번호가 붙어있으며, 각 음식을 섭취하는데 일정 시간이 소요된다.
무지는 다음과 같은 방법으로 음식을 섭취한다.

* 무지는 1번 음식부터 먹기 시작하며, 회전판은 번호가 증가하는 순서대로 음식을 무지 앞으로 가져다 놓는다.
* 마지막 번호의 음식을 섭취한 후에는 회전판에 의해 다시 1번 음식이 무지 앞으로 온다.
* 무지는 음식 하나를 1초 동안 섭취한 후 남은 음식은 그대로 두고, 다음 음식을 섭취한다.
    + 다음 음식이란, 아직 남은 음식 중 다음으로 섭취해야 할 가장 가까운 번호의 음식을 말한다.
* 회전판이 다음 음식을 무지 앞으로 가져오는데 걸리는 시간은 없다고 가정한다.

무지가 먹방을 시작한 지 K 초 후에 네트워크 장애로 인해 방송이 잠시 중단되었다.
무지는 네트워크 정상화 후 다시 방송을 이어갈 때, 몇 번 음식부터 섭취해야 하는지를 알고자 한다.
각 음식을 모두 먹는데 필요한 시간이 담겨있는 배열 food_times, 네트워크 장애가 발생한 시간 K 초가 매개변수로 주어질 때 몇 번 음식부터 다시 섭취하면 되는지 return 하도록 solution 함수를 완성하라.

## 제한 사항

* food_times 는 각 음식을 모두 먹는데 필요한 시간이 음식의 번호 순서대로 들어있는 배열이다.
* k 는 방송이 중단된 시간을 나타낸다.
* 만약 더 섭취해야 할 음식이 없다면 -1을 반환하면 된다.

## 정확성 테스트 제한 사항

* food_times 의 길이는 1 이상 2,000 이하이다.
* food_times 의 원소는 1 이상 1,000 이하의 자연수이다.
* k는 1 이상 2,000,000 이하의 자연수이다.

## 효율성 테스트 제한 사항

* food_times 의 길이는 1 이상 200,000 이하이다.
* food_times 의 원소는 1 이상 100,000,000 이하의 자연수이다.
* k는 1 이상 2 x 10^13 이하의 자연수이다.

## 입출력 예

|food_times|k|result|
|---|---|---|
|[3, 1, 2]|5|1

## 입출력 예 설명

입출력 예 #1

* 0~1초 동안에 1번 음식을 섭취한다. 남은 시간은 [2,1,2] 이다.
* 1~2초 동안 2번 음식을 섭취한다. 남은 시간은 [2,0,2] 이다.
* 2~3초 동안 3번 음식을 섭취한다. 남은 시간은 [2,0,1] 이다.
* 3~4초 동안 1번 음식을 섭취한다. 남은 시간은 [1,0,1] 이다.
* 4~5초 동안 (2번 음식은 다 먹었으므로) 3번 음식을 섭취한다. 남은 시간은 [1,0,0] 이다.
* 5초에서 네트워크 장애가 발생했다. 1번 음식을 섭취해야 할 때 중단되었으므로, 장애 복구 후에 1번 음식부터 다시 먹기 시작하면 된다.

# 해결

우선 효율성을 위해 모든 연산은 한꺼번에 하는 것을 목표로 하고, 입출력 예의 설명에 나와 있는 것 처럼 리스트에 값을 하나씩 갱신하는 것도 지양하도록 한다.

우선 주어진 food_times와 k가 [4, 3, 6, 1], 11와 같다고 가정했을 때, 이를 다음 그림과 같이 나타내고자 한다.

![image](https://user-images.githubusercontent.com/121740394/217268373-e84829ae-e35d-4e51-88a2-36e22feb3129.png)

그럼 문제대로라면 아래와 같이 왼쪽부터 오른쪽으로 차례대로 1초씩 먹게 될 것이다.

![image](https://user-images.githubusercontent.com/121740394/217269156-767dcf2e-d0a3-4028-8aa1-a9e21aa13637.png)

당연하게도 이렇게 k-1의 연산을 하나하나 반복하게 될 경우 불필요한 시간 반복이 너무 많게 된다.

따라서 먼저 사라지는, 첫 번째로 작은 시간초의 음식들부터 나열하여 `첫 번째로 작은 시간초 * n` 을 한 번에 `K`에서 빼기로 하고, 그 다음엔 `(두 번째 작은 시간초 - 첫 번째 작은 시간초) * (n - 1)`를 빼는 것을 반복하는 것이다. 하지만 이를 마냥 계속 뺄 수는 없다. 계산된 저 값이 k보다 작을 때, 뺄셈을 해도 k가 남을 때 에만 가능하다. 만약 정렬을 하면 음식을 먹는 순서가 뒤죽박죽이 될까봐 걱정할 수도 있다. 하지만 이렇게 모든 음식에 대하여 동일한 시간초를 빼는 경우는 모든 음식을 순회하며 도는 것이기 때문에 지금 당장 순서를 고려할 필요는 없다. 이를 그림으로 나타내면 다음과 같다.

![image](https://user-images.githubusercontent.com/121740394/217271760-b575d1cd-1724-4c4a-8c28-3ef0a837a5b9.png)

이후에 k의 값이 충분히 작아져 위와 같은 한꺼번에 연산이 되지 않을 때에는 남아있는 음식들을 다시 오름차순으로 정렬한 뒤(원래 먹던 방향) k를 현재 남아있는 음식의 수로 나누면 해당하는 음식의 번호를 알아낼 수 있다.

또한 음식의 시간초와 음식의 번호를 둘 다 알아두어야 하기 때문에 이런 경우는 튜플로 값을 보존하는 것이 유리하다.

파이썬으로 작성한 소스코드는 다음과 같다.

```py
from operator import itemgetter

def solution(food_times, k):
    foods = []
    n = len(food_times)
    for i in range(n):
        foods.append((food_times[i], i + 1)) # (음식 시간, 음식 번호)
    
    foods.sort() # 음식 시간별로 정렬
    
    pretime = 0
    for i, food in enumerate(foods): 
        diff = food[0] - pretime
        if diff != 0:
            spend = diff * n
            if spend <= k:
                k -= spend
                pretime = food[0]
            else:
                k %= n
                sublist = sorted(foods[i:], key = itemgetter(1))
                return sublist[k][1]
        n -= 1 # 가장 작은 음식을 지울때마다 음식의 수 n - 1
        
    return -1
```

operator.itemgetter는 주로 sorted와 같은 함수의 key 매개변수에 적용하여 다양한 기준으로 정렬할 수 있도록 하는 모듈이다.

다음의 두가지 예시를 보고 간단히 이해하고 넘어가자.

```py
from operator import itemgetter

students = [
    ("jane", 22, 'A'),
    ("dave", 32, 'B'),
    ("sally", 17, 'B'),
]

result = sorted(students, key=itemgetter(1))
print(result)

# [('sally', 17, 'B'), ('jane', 22, 'A'), ('dave', 32, 'B')]
```
```py
from operator import itemgetter

students = [
    {"name": "jane", "age": 22, "grade": 'A'},
    {"name": "dave", "age": 32, "grade": 'B'},
    {"name": "sally", "age": 17, "grade": 'B'},
]

result = sorted(students, key=itemgetter('age'))
print(result)

# [{'name': 'sally', 'age': 17, 'grade': 'B'}, 
#  {'name': 'jane', 'age': 22, 'grade': 'A'}, 
#  {'name': 'dave', 'age': 32, 'grade': 'B'}]
```