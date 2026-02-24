# Sample Dental Laboratory Website

샘플 치과기공소 웹사이트 - 고객에게 보여주기 위한 샘플 사이트입니다.

## 기술 스택

- **HTML5** - 시맨틱 마크업
- **CSS3** - CSS 변수를 활용한 테마 시스템
- **JavaScript (Vanilla)** - 프레임워크 없이 순수 JavaScript 사용
- **SPA Router** - 해시 기반 라우팅

## 주요 기능

- **다국어 지원** - 한국어/영어 전환
- **다크/라이트 테마** - 테마 토글 기능
- **반응형 디자인** - 모바일, 태블릿, 데스크톱 지원
- **SPA 라우팅** - 페이지 전환 없이 부드러운 네비게이션
- **페이지 애니메이션** - 스크롤 리빌 효과
- **문의 폼** - 연락처 페이지 폼

## 페이지 구성

- **홈** - 히어로 섹션 및 주요 강점 소개
- **회사 소개** - 비전, 미션, 핵심 가치
- **제품** - 치과 보철물 제품 소개
- **갤러리** - 작업 샘플 갤러리
- **FAQ** - 자주 묻는 질문
- **연락처** - 연락 정보 및 문의 폼

## 프로젝트 구조

```
Samplelaboratory/
├── index.html          # 메인 HTML 파일
├── css/
│   └── main.css       # 메인 스타일시트
├── js/
│   ├── app.js         # SPA 라우터 및 앱 로직
│   ├── i18n.js        # 다국어 지원
│   └── theme.js       # 테마 관리
├── pages/
│   ├── home.html      # 홈 페이지
│   ├── about.html     # 회사 소개
│   ├── products.html  # 제품 페이지
│   ├── gallery.html   # 갤러리
│   ├── faq.html       # FAQ
│   └── contact.html   # 연락처
└── images/            # 이미지 자산
```

## 로컬 실행 방법

1. 저장소 클론
```bash
git clone https://github.com/DanielGu0726/Samplelaboratory.git
cd Samplelaboratory
```

2. 로컬 서버 실행 (Python 사용)
```bash
python -m http.server 8000
```

또는 (Node.js 사용)
```bash
npx http-server -p 8000
```

3. 브라우저에서 열기
```
http://localhost:8000
```

## 배포

정적 파일로 구성되어 있어 다음 플랫폼에 쉽게 배포 가능합니다:
- GitHub Pages
- Vercel
- Netlify
- Firebase Hosting

## 라이선스

이 프로젝트는 샘플 및 데모 목적으로 제작되었습니다.
