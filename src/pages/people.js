import React from "react";
import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import { PeopleSection } from "../gatsby-theme-portfolio-minimal/sections/People";

export default function PeoplePage() {
  return (
    <>
      <Seo title="구성원" description="서울대학교 베이즈통계 연구실의 구성원들을 소개합니다." useTitleTemplate={true} noIndex={true} />
      <Page>
        <PeopleSection sectionId="people" heading="구성원" />
      </Page>
    </>
  );
}
