# 알고리즘 테스트
## 시작하기
이 프로젝트를 로컬 환경에 설정하고 실행하는 방법을 안내합니다.

## 설치

1. **저장소를 원하는 폴더에 복제(clone)합니다.**
    ```bash
    git clone https://github.com/HAN-SEOHYUN/algorithm-test.git
    ```

2. **프로젝트 폴더로 이동합니다.**
    ```bash
    cd algorithm-test
    ```

3. **필요한 의존성 패키지를 설치합니다.**
   > `node_modules` 폴더는 `.gitignore`에 포함되어 있으므로, 아래 명령어로 설치해주세요.
    ```bash
    npm install
    ```
4. **테스트 실행**
`package.json`에 설정된 **Jest** 테스트 스크립트를 사용하여 모든 테스트를 실행할 수 있습니다.

```bash
npm test
```

## 파일 구성
- solution.js: 알고리즘 문제의 핵심 로직이 구현된 파일
- test.js: solution.js의 코드를 검증하는 테스트 파일
- package.json: 프로젝트 정보와 의존성 목록을 관리
- package-lock.json: 패키지 설치 시점의 정확한 버전 정보를 기록
- .gitignore: Git으로 관리하지 않을 파일 목록 (node_modules 등)
