import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useSiteMetadata } from 'gatsby-theme-portfolio-minimal/src/hooks/useSiteMetadata';
import * as classes from './style.module.css';
import { Link } from 'gatsby';

interface AuthorProps {
    author?: string | null | undefined;
    avatar?: {
        childImageSharp: {
            gatsbyImageData: any;
        };
    } | null | undefined;
    bio?: string | null | undefined;
    authorlink?: string | null | undefined;
  }

export function AuthorSnippet(props: AuthorProps): React.ReactElement {
    const siteMetadata = useSiteMetadata();
    const author = props.author ? props.author : siteMetadata.author;
    const avatar = props.avatar ? props.avatar : siteMetadata.avatar;
    const bio = props.bio ? props.bio : siteMetadata.bio;
    const authorlink = props.authorlink ? siteMetadata.siteUrl + props.authorlink : undefined;
    return (
        <div className={classes.AuthorSnippet}>
            {avatar?.childImageSharp?.gatsbyImageData ? (
                <GatsbyImage image={avatar.childImageSharp.gatsbyImageData} alt={author} className={classes.Avatar} />
            ) : null}
            <div className={classes.Description}>
                <span className={classes.WrittenBy}>
                    작성자: <u>{authorlink ? (
                        <Link to={authorlink}
                        // title={`Back To All ${pluralize(props.pageContext.entityName) ?? 'Articles'}`}
                        title={author}>{author}</Link>) :
                        author}</u>
                </span>
                <p className={classes.Bio}>{bio}</p>
            </div>
        </div>
    );
}
