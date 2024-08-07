# SNUBAYES

이곳은 [서울대학교 베이즈통계 연구실 홈페이지](https://snubayes.org)의 소스코드를 관리하는 저장소입니다.

## 참고사항

서울대학교 베이즈통계 연구실 홈페이지는 [react](https://reactjs.org/), [gatsby](https://www.gatsbyjs.com/), [gatsby-theme-portfolio-minimal 테마](https://www.gatsbyjs.com/plugins/gatsby-theme-portfolio-minimal/)를 기반으로 작성되었습니다.

홈페이지는 [Cloudflare Pages](https://pages.cloudflare.com)로 배포되고 있으며, 도메인 관리도 Cloudflare에서 이루어지고 있습니다.

배포 자동화는 [Cloudflare Pages GitHub Action](https://github.com/cloudflare/pages-action)을 바탕으로 작성하였으며 `main` branch에 push하면 [홈페이지](https://snubayes.org)가 자동으로 업데이트됩니다. 이를 위해 적당한 환경변수들을 설정해주어야 합니다.

## 수정 방법

1. 이 저장소를 clone합니다.
2. 적당한 branch를 만들어 checkout합니다.
3. `npm install`을 실행하여 필요한 패키지를 설치합니다.
4. 내용을 수정합니다.
    * 게시물을 추가, 혹은 수정하고 싶다면 [`content`](https://github.com/snubayes/home/blob/main/content) 폴더의 게시물들을 추가, 혹은 수정합니다. 게시물 작성은 [gatsby-theme-portfolio-minimal 테마](https://www.gatsbyjs.com/plugins/gatsby-theme-portfolio-minimal/)의 문서를 참고하세요. 게시물은 기본적으로 마크다운 형식으로 작성합니다.
    * 사이트의 설정을 수정하고 싶다면 [`gatsby-config.js`](https://github.com/snubayes/home/blob/main/gatsby-config.js) 파일을 수정합니다. 설정 작성은 [gatsby 공식 홈페이지](https://www.gatsbyjs.com/docs/)의 문서를 참고하세요.
    * 사이트의 구성 요소들을 수정하고 싶다면 [`src`](https://github.com/snubayes/home/blob/main/src) 폴더의 파일들을 수정합니다. 구성 요소 작성은 [gatsby 공식 홈페이지](https://www.gatsbyjs.com/docs/)와 [gatsby-theme-portfolio-minimal 테마](https://www.gatsbyjs.com/plugins/gatsby-theme-portfolio-minimal/)의 문서를 참고하세요. 구성 요소는 기본적으로 [react](https://reactjs.org/)로 작성합니다.
5. `npm run develop`을 실행하고 `http://localhost:8000`으로 접속하여 수정사항을 확인합니다.
6. 수정사항을 commit하고 push합니다.
7. pull request를 보냅니다.
   1. `main` branch는 [홈페이지](https://snubayes.org)의 배포용 branch입니다.
   2. `prerelease` branch는 [테스트용 홈페이지](https://prerelease.snubayes.pages.dev)의 배포용 branch입니다.

## 참여하기

서울대학교 베이즈통계 연구실에 함께하고 싶다면 [snubayes@gmail.com](mailto:snubayes@gmail.com)으로 문의주세요!


## To Do List

* [ ] About (연구실 소개) 업데이트
* [ ] Posts 업데이트
  * [ ] 연구실 세미나 자료 업데이트
    * [ ] 자료 및 간단한 설명 위키에 작성
    * [ ] 홈페이지 링크 업데이트
  * [ ] News (수상 등) 업데이트
  * [ ] Workshop 자료 업데이트
    * [ ] 자료 및 간단한 설명 위키에 작성
    * [ ] 홈페이지 링크 업데이트
* [ ] People (구성원) 인적사항 업데이트
* [ ] Publications (출판물) 업데이트
  * [ ] 링크 업데이트
  * [ ] 누락 출판물 추가
* [ ] 홈페이지 공개
  * [ ] 구글 검색엔진 등록 
  * [ ] 기존 홈페이지 구글 색인 제거
  * [ ] 로고 교체