var store = [{
        "title": "[Blog] 깃허브 블로그 만들기/포스팅/배포 과정 중 발생한 에러",
        "excerpt":"“명색이 개발자면 블로그는 github.io 써야지” 2023년엔 지금껏 곳곳에 작성했던 여러 TIL들을 싹 없애고, 아예 새로운 블로그를 만들어 배운 걸 착착 기록하고자 한다. 여러 블로그 환경들 중 내가 선택한 것은 가장 개발자스러운 깔끔하고 커스터마이징이 가능한 github.io 였다. 그리고 github.io에서 올리게 될 첫 포스팅은 당연하게도, github.io를 만드는데 겪었던 오류들에 대한 것이다. 본인은...","categories": ["Blog"],
        "tags": ["Blog","Github","Error"],
        "url": "/blog/blog-TIL/",
        "teaser": "/assets/images/github-pages.png"
      },{
        "title": "[BOJ] 백준 18185번 - 라면 사기 (Small)",
        "excerpt":"문제 바로가기 “이게 정답률 29%?” 애초부터 그리디 필수 문제집에서 뽑은 문제고, 문제도 딱 봐도 그리디이다. 되게 쉬운 것 같았는데… 라면을 연속된 공장 3개에서 하나씩 총 3개를 구입하면 7원 라면을 연속된 공장 2개에서 하나씩 총 2개를 구입하면 5원 라면을 연속된 공장 1개에서 하나씩 총 1개를 구입하면 3원 붙어있는 공장들 중 최대한...","categories": ["BOJ"],
        "tags": ["BOJ","Greedy","Python"],
        "url": "/boj/boj-18185/",
        "teaser": "/assets/images/teaser.png"
      },{
        "title": "[BOJ] 백준 2212번 - 센서",
        "excerpt":"문제 바로가기 N개의 센서가 있고, 리스트의 값들은 원점으로부터 각각의 센서가 얼마나 거리에 있는 지 나타낸다. K개의 집중국은 K개의 가장 밀집된 클러스터에 배정되어 수신 가능 영역의 길이의 합이 최소가 되도록 해야한다. 문제 해결 집중국을 어디에 위치하는 것은 중요한 게 아니고, 각각의 집중국의 수신 가능 영역의 길이의 합만 구하면 되기 때문에 사실상...","categories": ["BOJ"],
        "tags": ["BOJ","Greedy","Python"],
        "url": "/boj/boj-2212/",
        "teaser": "/assets/images/teaser.png"
      },{
        "title": "[Python] 파이썬 리스트 덧붙이기",
        "excerpt":"list + list list1 = [1, 2, 3] list1 = list1 + [4, 5] print(lis1) # [1, 2, 3, 4, 5] +를 사용하면 새로운 리스트가 반환되므로 똑같이 list1에 재대입해도 리스트의 id가 변경된다. 아래 코드를 실행하면 list1 = [1,2,3] print('original id:', id(list1)) list1 = list1 + [[4,5]] print('list1:', list1) print('+ id:',...","categories": ["Python"],
        "tags": ["List"],
        "url": "/python/python-TIL/",
        "teaser": "/assets/images/teaser.png"
      },{
        "title": "[Python] 파이썬 리스트 중복 제거하기",
        "excerpt":"set()을 이용한 중복 제거 set()은 중복을 허용하지 않고, 순서가 없다는 특징이 있다. 따라서 list를 set으로 변경하면 중복된 값이 제거되고, 그 뒤에 다시 list로 변경하면 중복된 값이 제거된다. 단 이 방식으로 중복을 제거할 경우, 순서가 뒤죽박죽 된다는 단점이 있다. 만약 순서를 지켜야 할 경우, 반복문을 사용한다. list_1 = [1, 1, 2,...","categories": ["Python"],
        "tags": ["List"],
        "url": "/python/python-TIL/",
        "teaser": "/assets/images/teaser.png"
      },{
        "title": "[Python] 파이썬 리스트 요소 제거",
        "excerpt":"remove() / 값으로 제거하기 remove()는 지우고자 하는 값을 입력한다. 만약 지우고자 하는 값이 리스트 내에 여러 개가 존재한다면, 가장 앞에 있는 값이 지워진다. a = [1, 2, 1, 3, 4, 5, 1] a.remove(1) print(a) print(a[0]) # [2, 1, 3, 4, 5, 1] # 2 del, pop() / 인덱스로 제거하기 del과...","categories": ["Python"],
        "tags": ["List"],
        "url": "/python/python-TIL2/",
        "teaser": "/assets/images/teaser.png"
      },{
        "title": "[BOJ] 백준 8980번 - 택배",
        "excerpt":"문제 문제 해결 마을에서 트럭이 택배를 수집할 때는 무조건 도착 배송지가 가까운 택배들부터 담는 것이 중요하다. 빠르게 순환이 되어야 또 다른 택배를 실을 수 있기 때문이다. 또한 각 point에 도착했을 때 택배를 먼저 unload한 뒤에 load를 해야하는 순서도 꼭 지켜져야 한다. 우선 입력이 [start_point, dest_point, load] 로 된 M개의 박스...","categories": ["BOJ"],
        "tags": ["BOJ","Greedy","Python"],
        "url": "/boj/boj-8980/",
        "teaser": "/assets/images/teaser.png"
      },{
        "title": "[VSCode] Window 10, MAC 간 한글 깨짐 현상 해결방법",
        "excerpt":"최근 집의 Windows 10 Desktop과 밖의 Mac OS Macbook 모두에서 백준과 프론트엔드 공부를 하고 있는데, 매번 블로그 포스팅을 할 때는 귀찮더라도 집에서 맥북을 켜서 포스팅을 했다. 이유는 Windows 10에서 VSCode를 사용할 때 한글을 코드에 입력하고 출력하게 될 경우 터미널 창이나 코드 작성 창에서 한글이 깨져 출력되는 경우가 있고 Windows 10에서...","categories": ["ETC"],
        "tags": ["VSCode","Windows"],
        "url": "/etc/etc-TIL/",
        "teaser": "/assets/images/window-mac.png"
      },{
        "title": "[자료구조] 그래프(Graph)란",
        "excerpt":"그래프 그래프는 node(N) | vertex(V)와 그 노드를 연결하는 간선(E, edge)으로 표현된 자료구조이다. 연결되어 있는 노드들 간의 관계를 표현할 수 있는 자료구조이다. 그래프는 여러 개의 Isolated Subgraphs로 구성될 수도 있다. 그래프의 용어 정점(Vertex, Node): 데이터가 저장되는 위치 간선(Edge): 위치 간의 관계. 즉, 노드를 연결하는 선으로 link, branch라고도 부른다. 인접 정점(adjacent vertex):...","categories": ["DataStructure"],
        "tags": ["CS","자료구조","그래프","Python"],
        "url": "/datastructure/DS-graph/",
        "teaser": "/assets/images/DS-graph.png"
      },{
        "title": "[자료구조] 큐(Queue)란",
        "excerpt":"큐는 대기줄에 비유할 수 있다. 줄을 설 때 먼저 온 사람이 먼저 들어가게 되고, 나중에 온 사람은 그만큼 나중에 들어가게 된다. 이를 선입선출, FIFO 구조라고 한다. 파이썬 파이썬에서 큐를 구현할 때에는 collections 모듈에서 제공하는 deque 자료구조를 활용한다. deque는 스택과 큐의 장점을 모두 채택한 것으로, 데이터를 넣고 빼는 속도가 list 자료형에...","categories": ["DataStructure"],
        "tags": ["자료구조","큐","Python"],
        "url": "/datastructure/DS-queue/",
        "teaser": "/assets/images/teaser.png"
      },{
        "title": "[자료구조] 스택(Stack)과 재귀 함수",
        "excerpt":"스택은 블록 쌓기에 비유할 수 있다. 블록은 아래에서부터 위로 차곡차곡 쌓아가고, 아래에 있는 블록을 치우기 위해선 위에 있는 블록부터 먼저 치워야한다. 즉 선입후출, FILO구조이다. 스택 in 파이썬 파이썬에서 스택을 이용할 때에는 별도의 라이브러리를 사용할 필요 없이 기본 리스트에서 append()와 pop() 메서드를 이용하면 스택 자료구조와 동일하게 동작한다. stack = [] stack.append(5)...","categories": ["DataStructure"],
        "tags": ["자료구조","스택","재귀","Python"],
        "url": "/datastructure/DS-stack/",
        "teaser": "/assets/images/teaser.png"
      },{
        "title": "[알고리즘] 탐색 알고리즘 DFS/BFS",
        "excerpt":"Graph   DFS, BFS를 설명하기 전에 Graph의 기본 구조를 알아야 한다. 그래프는   DFS   DFS는 Depth-First Search, 깊이 우선 탐색이라고도 부르며, 그래프에서 깊은 부분을 우선적으로 탐색하는 알고리즘이다.      ","categories": ["Algorithm"],
        "tags": ["DFS","BFS","재귀","스택","큐","Python"],
        "url": "/algorithm/alg-DFS-BFS/",
        "teaser": "/assets/images/teaser.png"
      },{
        "title": "[BOJ] 백준 1260번 - DFS와 BFS",
        "excerpt":"문제 문제 해결 DFS는 깊이 우선 탐색이므로 함수가 중첩되며 쌓이는 스택,재귀구조를 가지고, BFS는 너비 우선 탐색이므로 현재 노드의 인접 노드들을 모두 큐에 넣고 큐 순서대로 들어오면서 인근 노드들을 큐의 끝에 계속해서 넣어주는 방식으로 작동한다. 이론만 알고 백지 상태에서 DFS, BFS를 구현해보았다. from collections import deque def bfs_search(graph, v, visited): bfs_sequence...","categories": ["BOJ"],
        "tags": ["BOJ","DFS","BFS","Python"],
        "url": "/boj/boj-1260/",
        "teaser": "/assets/images/teaser.png"
      },{
        "title": "[BOJ] 백준 2178번 - 미로 탐색",
        "excerpt":"문제 문제 바로가기 해결 from collections import deque graph = list() n, m = map(int, input().split()) for _ in range(n): graph.append(list(map(int, input()))) # 동, 남, 서, 북 move_m = [1,0,-1,0] move_n = [0,1,0,-1] q = deque() x = y = cnt = 0 q.append((x, y)) while q: x, y =...","categories": ["BOJ"],
        "tags": ["BOJ","BFS","Python"],
        "url": "/boj/boj-2178/",
        "teaser": "/assets/images/teaser.png"
      },{
        "title": "[BOJ] 백준 2606번 - 바이러스",
        "excerpt":"문제 문제 바로가기 해결 from collections import deque n = int(input()) e = int(input()) g = list() q = deque() infected = list() cnt = 0 for _ in range(n+1): line = [] for _ in range(n+1): line.append(0) g.append(line) for _ in range(e): s, d = map(int, input().split()) g[s][d] =...","categories": ["BOJ"],
        "tags": ["BOJ","BFS","Python"],
        "url": "/boj/boj-2606/",
        "teaser": "/assets/images/teaser.png"
      }]
