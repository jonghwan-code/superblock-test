<p align="center">
<img src="./src/assets/icon/Superblock.svg" alt="슈퍼블록" width="150px"></p>

# 슈퍼블록 Front-End Engineer 과제테스트

## 개요

React와 타입 안정성을 위한 Typescript를 사용하여 **풍선 터뜨리기 게임**을 구현한 프로젝트입니다. 스타일링에는 Tailwind를 사용했습니다.

## 설치 및 실행

아래와 같이 의존성 설치 후 실행하면 http://localhost:3000 에서 확인할 수 있습니다.

```
npm install
npm run start
```

## 사용 스택

| 기술                | 용도        |
| ------------------- | ----------- |
| React18, Typescript | 사용 언어   |
| Tailwind CSS        | 스타일링    |
| React-Router-Dom    | 페이지 이동 |
| jotai               | 상태 관리   |

## 폴더 구조

📦src
┣ 📂assets
┃ ┗ 📂icon
┃ ┃ ┣ 📜Expand_icon.svg
┃ ┃ ┣ 📜Failuare_icon.svg
┃ ┃ ┣ 📜Success_icon.svg
┃ ┃ ┗ 📜Superblock.svg
┣ 📂components
┃ ┣ 📂Background
┃ ┃ ┗ 📜index.tsx
┃ ┣ 📂Dropdown
┃ ┃ ┣ 📂DropdownButton
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┃ ┣ 📂DropdownList
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┃ ┗ 📜index.tsx
┃ ┣ 📂GameResultModal
┃ ┃ ┗ 📜index.tsx
┃ ┣ 📂GameTable
┃ ┃ ┗ 📜index.tsx
┃ ┗ 📂Title
┃ ┃ ┗ 📜index.tsx
┣ 📂fonts
┃ ┗ 📜Galmuri11-Bold.ttf
┣ 📂hooks
┃ ┗ 📜index.ts
┣ 📂pages
┃ ┣ 📂Game
┃ ┃ ┗ 📜index.tsx
┃ ┗ 📂Home
┃ ┃ ┗ 📜index.tsx
┣ 📂store
┃ ┣ 📜const.ts
┃ ┣ 📜states.ts
┃ ┗ 📜types.ts
┣ 📜App.tsx
┗ 📜index.tsx

## 과제 진행

1. M의 값에 따라 2차원 배열을 생성하고 각 요소는 0 또는 1의 값을 랜덤으로 취득하게 하여 1인 경우 풍선으로 노출되도록 테이블을 구현합니다.
   > M값이 특정되지 않아 난이도에 따라 6, 7, 8개의 2차원 배열이 생성되도록 하였습니다.
2. DFS 알고리즘을 활용하여 연결된 풍선을 확인하고, 연결된 풍선은 그룹화 및 카운트를 계산합니다. 동시에 앞서 생성한 2차원 배열의 요소를 값(0 또는 1)과 확인된 그룹을 가지는 객체로 업데이트 하여 게임 실행 준비를 마칩니다.
3. 사용자가 클릭한 요소의 그룹과 해당 그룹의 count가 과연 가장 큰 수인지 확인 후, 큰 수인 경우 게임을 이어가고 그룹 데이터에서 해당 그룹 요소를 삭제하여 게임을 이어갈 수 있도록 합니다. 그렇지 않은 경우 게임을 종료합니다.
4. 게임을 모두 마치고 남아있는 그룹 데이터가 없는 경우 게임에 성공합니다.
5. 게임 중 새로고침 하는 경우 새로운 게임이 생성됩니다.
