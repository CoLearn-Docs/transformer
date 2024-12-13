# Simple Sentiment Analysis with Transformers.js

이 프로젝트는 Hugging Face의 Transformers.js 라이브러리를 사용하여 간단한 감정 분석(Sentiment Analysis)을 수행하는 웹 애플리케이션입니다. CDN을 통해 Transformers.js를 불러오므로 별도의 설치 없이 브라우저에서 바로 실행할 수 있습니다.

## 주요 기능

- 모델 로딩
- 텍스트 입력
- 감정 분석 실행 (POSITIVE/NEGATIVE)

## 실행 방법

1. VS Code 설치

   - [VS Code 다운로드 페이지](https://code.visualstudio.com/download)에서 운영체제에 맞는 버전을 설치합니다.

2. Live Server 확장 프로그램 설치

   - VS Code의 확장(Extensions) 탭에서 'Live Server'를 검색합니다.
   - Ritwick Dey가 제작한 Live Server를 설치합니다.

3. 프로젝트 실행
   - VS Code에서 프로젝트 폴더를 엽니다.
   - 하단 상태 바의 'Go Live' 버튼을 클릭하거나,
   - HTML 파일을 우클릭하여 'Open with Live Server'를 선택합니다.
   - 브라우저에서 자동으로 페이지가 열립니다(기본 포트: 5500).

## 사용 방법

1. 'Load Model' 버튼을 클릭하여 감정 분석 모델을 로드합니다.
2. 입력창에 분석하고 싶은 영문 텍스트를 입력합니다.
3. 'Run Model' 버튼을 클릭하여 분석을 실행합니다.
4. 결과가 출력창에 표시됩니다 (POSITIVE 또는 NEGATIVE).

## 주의사항

- 반드시 웹 서버를 통해 실행해야 합니다 (CORS 정책으로 인해 파일을 직접 열면 작동하지 않습니다).
- 초기 모델 로딩에는 시간이 소요될 수 있습니다.
- 영문 텍스트만 분석 가능합니다.

## 기술 스택

- HTML
- CSS
- JavaScript
- Transformers.js (Hugging Face)
