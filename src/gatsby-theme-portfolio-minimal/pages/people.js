import React from "react";
import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import { PeopleSection } from "../gatsby-theme-portfolio-minimal/sections/People";

export default function PeoplePage() {
  return (
    <>
      <Seo title="people" useTitleTemplate={true} noIndex={true} />
      <Page>
        <PeopleSection sectionId="people" heading="구성원" />
      </Page>
    </>
  );
}
