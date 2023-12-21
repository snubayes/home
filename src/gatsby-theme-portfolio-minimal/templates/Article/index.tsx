import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Page } from 'gatsby-theme-portfolio-minimal/src/components/Page';
import { Seo } from '../../components/Seo';
import { AuthorSnippet } from '../../components/AuthorSnippet';
import { ArticleTemplateData } from './data';
import * as classes from './style.module.css';
import { useLocalDataSource } from '../../sections/People/data';
// import { pluralize } from 'gatsby-theme-portfolio-minimal/src/utils/pluralize';

// Reference to the local prismjs theme (Modified)
require('gatsby-theme-portfolio-minimal/src/globalStyles/prism.css');

interface ArticleTemplateProps {
    pageContext: {
        article: ArticleTemplateData;
        listingPagePath: string;
        entityName?: string;
    };
}

export default function ArticleTemplate(props: ArticleTemplateProps): React.ReactElement {
    const response = useLocalDataSource();
    const peopleData = response.allPeopleJson.sections[0].people;
    const article = props.pageContext.article;
    const bannerUrl = article.banner ? article.banner.src : undefined;
    const peopleList = peopleData.map((people) => people.name);
    const authorIndex = article.categories ? peopleList.findIndex(
        (people) => article.categories.includes(people)
    ) : -1;
    const authorData = authorIndex !== -1 ? peopleData[authorIndex] : undefined;
    const affiliation = authorData ? authorData.affiliation : undefined;
    const author = authorData ? authorData.name : undefined;
    const avatar = authorData ? authorData.image.src : undefined;
    const bio = authorData ? authorData.description : undefined;
    const authorlink = authorData ? "/people/#" + affiliation + author : undefined;
    return (
        <>
            <Seo title={article.title} description={article.description || undefined} useTitleTemplate={true} thumbnailBanner={bannerUrl} />
            <Page>
                <article className={classes.Article}>
                    <div className={classes.Breadcrumb}>
                        <Link
                            to={props.pageContext.listingPagePath}
                            // title={`Back To All ${pluralize(props.pageContext.entityName) ?? 'Articles'}`}
                            title={`전체 ${props.pageContext.entityName}로 돌아가기`}
                        >
                            <span className={classes.BackArrow}>&#10094;</span>
                            {/* All {pluralize(props.pageContext.entityName) ?? 'Articles'} */}
                            전체 {props.pageContext.entityName}
                        </Link>
                    </div>
                    <section className={classes.Header}>
                        <span className={classes.Category}>{article.categories.join(' / ')}</span>
                        <h1>{article.title}</h1>
                        <div className={classes.Details}>
                            {article.date}
                            <span className={classes.ReadingTime}>{article.readingTime.text}</span>
                        </div>
                    </section>
                    {article.banner && article.banner.src && (
                        <section className={classes.Banner}>
                            <GatsbyImage
                                image={article.banner.src.childImageSharp.gatsbyImageData}
                                alt={article.banner.alt || `Image for ${article.title}`}
                                imgClassName={classes.BannerImage}
                            />
                            {article.banner.caption && (
                                <span
                                    className={classes.BannerCaption}
                                    dangerouslySetInnerHTML={{ __html: article.banner.caption }}
                                />
                            )}
                        </section>
                    )}
                    <section className={classes.Body}>
                        <div className={classes.Content} dangerouslySetInnerHTML={{ __html: article.body }} />
                        {article.keywords &&
                            article.keywords.map((keyword, key) => {
                                return (
                                    <span key={key} className={classes.Keyword}>
                                        {keyword}
                                    </span>
                                );
                            })}
                    </section>
                    <section className={classes.Footer}>
                        <AuthorSnippet author={ author } authorlink={ authorlink } bio={ bio } avatar={ avatar } />
                    </section>
                </article>
            </Page>
        </>
    );
}
