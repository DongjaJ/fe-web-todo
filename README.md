# TodoList 구현 [프론트엔드]

## 레이아웃
- 헤더의 좌측에 서비스명과 우측에 메뉴 버튼이 있다.
- 기본 3가지 칼럼이 존재한다
- 각 칼럼의 타이틀 옆에는 카드의 갯수를 카운팅하여 표시한다.
- 각 칼럼 별로 위에서붙터 최신순으로 정렬되도록 한다.

## 기본 목표기능

### 1. 메뉴 (활동기록)
- [X] 메뉴버튼을 누르면 오른쪽에 숨겨져 있던 레이어가 왼쪽으로 노출된다.
- [X] x버튼을 클릭하면 애니메이션 효과와 함께 다시 오른쪽 방향으로 레이어가 숨겨진다.
- [X] 사용자 액션이 위에서부터 모두 최신순으로 표시된다.
- [X] 기록이 많아지면 레이어 오른쪽에 스크롤이 생긴다.
- [ ] 액션 종류는 등록(add), 삭제(remove), 변경(update), 이동(move) 4개이다
### 2. 새로운 카드 등록 (add)
- [X] 칼럼 타이틀 옆의 +버튼에 마우스를 올리면 색상이 바뀌고, 클릭하면 새로운 카드를 등록할 수 있는 박스가 나온다.
- [X] + 버튼을 다시 한번 더 누르거나 취소 버튼을 누르면, 박스가 사라진다.
- [X] 플레이스 홀더에는 제목을 입력하세요, 내용을 입력하세요를 사용한다.
- [X] 내용을 입력하면 등록 버튼이 활성화된다.
- [X] 내용 입력 후 등록을 누르면 새로운 카드가 등록되고, 카드를 등록할 수 있는 박스는 사라진다.
- [X] 글자 수 제한은 500자 이내이며, 글의 길이에 맞춰 박스가 아래로 늘어나야 한다.
- [ ] 카드 맨 아래 author by web을 나타나게 한다(선택)
### 3. 카드 이동 (move)
- [X] 카드는 위아래로 같은 칼럼 내에서 뿐만 아니라, 다른 칼럼으로도 드래그앤드랍으로 이동할 수 있다.
- [X] 드래그앤드랍 시 원래 카드가 있던 자리에 잔상이 생긴다.
- [X] 이동경로의 절반 정도가 되면, 카드의 예상 목적지로 카드의 잔상이 먼저 이동한다.
- [X] 이동 후, 드래그를 중단하면 카드는 잔상이 있던 위치로 이동하며 잔상은 사라진다.
- [X] 드래그앤드랍으로 이동되는 카드는 살짝 반투명해진다.
### 4. 카드 삭제 (delete)
- [X] 칼럼 타이틀의 X버튼은 마우스를 올렸을 때, 빨간색으로 변경되지만 클릭했을 때는 아무런 반응이 없도록 한다.
- [X] 카드의 X버큰에 마우스를 올리면 이미지와 같이 카드가 빨갛게 변한다.
- [x] 칼럼 타이틀의 X버튼은 나중에 선택 가능 확장을 위한 UI로 HTML로 구성만해둔다.
- [x] 카드의 x버튼을 누르면 다음과 같은 알림창이 뜬다.
- [x] 취소 버튼을 누르면 알림창이 닫히고 삭제 버튼을 누르면 알림창이 닫히면서 해당 카드가 삭제된다. 
### 5. 카드 수정 (update)
- [x] 모든 카드는 더블클릭 시, 등록 박스와 동일한 스타일로 전환되며 수정이 가능해진다.
- [x] 취소버튼을 누르면 변경사항이 반영되지않고 수정이 취소된다.
- [x] 내용을 모두 삭제하면 수정 버튼이 비활성화 되며, 내용을 모두 삭제하면 수정 버튼이 비활성화 되며, 내용을 수정한 후 수정버튼을 누르면 변경사항이 반영된 카드로 바뀐다.

## 추가 선택 기능
### 1. 칼럼의 타이틀 수정
- [X] 칼럼의 타이틀을 더블 클릭하면 수정이 가능하도록 한다.
- [X] 글자 수 제한은 50자까지
- [X] 텍스트필드 외의 다른 곳을 클릭하면 수정사항이 반영된다.

### 2. 우측 하단에 FAB 버튼을 눌러 칼럼이 추가될 수 있도록 한다.
- [ ] 자세한 기획은 스스로 정하기


## 해야할 것
- 드래그 했을 때 데이터 및 리스트 개수 변경
- 성능 최적화 (부분 렌더링)
- 객체 지향 프로그래밍
- mock서버 만들어서 데이터 통신 (fetch 이용, 비동기 프로그래밍)