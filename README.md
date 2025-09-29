가온누리 홈페이지

```
HOMEPROJECT
│
├── public                # 정적 자원 (빌드 시 그대로 복사, favicon, svg 등)
│
└── src                   # 리액트 앱 소스코드
    │
    ├── app               # 앱 전역 관리 (라우팅, 전역 Provider 등)
    │
    ├── layout            # 공통 레이아웃 컴포넌트 
    │
    ├── assets            # 이미지·아이콘 등 정적 리소스
    │   ├── icons         # 아이콘
    │   └── images        # 이미지
    │
    ├── components        # 재사용 가능한 UI 컴포넌트 (Button, Card 등)
    │
    ├── hooks             # 커스텀 훅 (useToggle, useFetch 등)
    │
    ├── styles            # 전역 스타일 (Tailwind, 글로벌 CSS)
    │
    └── types             # 전역 타입 정의
```