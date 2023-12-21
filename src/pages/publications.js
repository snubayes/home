import React from "react";
import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import { PublicationsSection } from "../gatsby-theme-portfolio-minimal/sections/Publications";

export default function PlanPage() {
  return (
    <>
      <Seo title="Publications" description="서울대학교 베이즈통계 연구실의 출판물입니다." useTitleTemplate={true} noIndex={true} />
      <Page>
        <PublicationsSection sectionId="publications" heading="Publications" />
      </Page>
    </>
  );
}
