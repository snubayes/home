import React from "react";
import {
  AboutSection,
  ArticlesSection,
  HeroSection,
  Page,
  ProjectsSection,
} from "gatsby-theme-portfolio-minimal";
import { Seo } from "../gatsby-theme-portfolio-minimal/components/Seo";
import { SubjectsSection } from "../gatsby-theme-portfolio-minimal/sections/Subjects";
import { ContactSection } from "../gatsby-theme-portfolio-minimal/sections/Contact";

export default function IndexPage() {
  return (
    <>
      <Seo title="서울대학교 베이즈통계 연구실" />
      <Page>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="최근 게시물" sources={['Blog']} />
        <AboutSection sectionId="about" heading="Who is Thomas Bayes?" />
        <SubjectsSection sectionId="subjects" heading="연구 주제" />
        <ProjectsSection sectionId="projects" heading="프로그램" />
        <ContactSection sectionId="contact" heading="연락하기" />
      </Page>
    </>
  );
}
