# [OP.GG Clone](https://opgg-clone-one.vercel.app) &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

[OP.GG Clone 바로가기](https://opgg-clone-one.vercel.app)

OP.GG Clone은 리그 오브 레전드의 게임 전적을 검색하고 조회할 수 있는 사이트입니다. '노논맨'을 검색하여 사이트 제작자의 전적을 확인할 수 있습니다. 

- **소환사 전적 검색:** 소환사명으로 검색하여 해당 소환사의 티어, 승률, 게임 내 통계, 사용 챔피언 등 전적과 관련된 정보를 조회할 수 있습니다. 소환사 전적은 라이엇이 제공하는 Riot API를 통해 조회되고, 전적 갱신 버튼을 눌러서 수동으로 갱신할 수 있습니다.

- **챔피언 분석:** 버전 별 챔피언의 스킬 정보를 확인할 수 있으며, 챔피언 운영 팁 공유 공간에서 익명으로 챔피언에 대한 정보를 공유할 수 있습니다.

## 사용 기술

- **Next.js**
- **Redux Toolkit**
- **React Query**
- **Emotion**
- **TypeScript**

## 프로젝트 구조
**웹 클라이언트(Vercel 배포)** - **express API 서버(fly 배포)** - **mongoDB**

## 구현 기능

- **데이터 조회:** 데이터 조회를 위해 express로 구현된 백엔드 API 서버와 통신합니다. API 서버는 사용자가 갱신 버튼을 누르면 라이엇 API 서버에 최신 데이터를 요청해 DB를 가장 최근 데이터로 갱신합니다.

- **검색 기능:** 자동완성이 기능이 있는 인풋을 통해 사용자 입력을 받아 소환사 전적을 검색할 수 있습니다. 모든 사용자 입력마다 API 요청을 하는 것을 방지하기 위해 API 요청은 정해진 시간동안 지연되어 보내집니다. 인풋이 포커싱되어있는 상태에서 값이 비어있을 경우에는 검색 기록과 즐겨찾는 소환사를 볼 수 있는 탭이 표시되고, 사용자가 입력을 시작하면 자동완성 드랍다운으로 전환됩니다.

- **정렬 기능:** 토글 버튼 UI를 사용하여 챔피언 팁을 최신순, 등록순으로 정렬할 수 있습니다. 사이트에 다시 접속 했을 때 사용자가 마지막으로 활성화했던 버튼이 기본값으로 활성화됩니다.

- **필터 기능:** 드랍다운 UI를 사용하여 소환사 전적 중 특정 챔피언으로 플레이한 전적만 조회할 수 있습니다.

- **검색 히스토리 기능:** 한 번 검색한 소환사를 다시 입력할 필요 없이 간편하게 조회할 수 있도록 검색 기록을 제공합니다. 또한 자주 검색하는 소환사는 즐겨찾기에 등록해놓을 수 있습니다. local storage를 활용하여 소환사 전적 검색 결과와 즐겨찾는 소환사를 브라우저에 저장하는 기능을 구현했습니다. 

- **반응형 레이아웃:** 모바일로 접속하는 유저를 고려해 반응형 레이아웃을 적용하였습니다. 1024px 이하의 스크린을 사용하는 유저에게는 모바일에 최적화된 레이아웃이 보여지게 됩니다.

- **SSR과 SSG를 활용한 페이지 렌더링:** 챔피언 분석 페이지는 SSG를 사용하고 소환사 전적 검색 페이지는 SSR를 사용하여 렌더링됩니다.

## 추가 정보
[OP.GG](https://op.gg): OP.GG Clone의 참고 사이트
