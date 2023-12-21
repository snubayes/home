import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useSiteMetadata } from 'gatsby-theme-portfolio-minimal/src/hooks/useSiteMetadata';
import { IGatsbyImageData } from 'gatsby-plugin-image';
// import { useSiteMetadata } from '../../hooks/useSiteMetadata';

interface SeoProps {
  title: string;
  useTitleTemplate?: boolean;
  noIndex?: boolean;
  description?: string;
  thumbnailBanner?: { childImageSharp: { gatsbyImageData: IGatsbyImageData } } | null | undefined;
}

export function Seo(props: SeoProps): React.ReactElement {
  const location = useLocation();
  const siteMetadata = { ...useSiteMetadata(), ...props };

  var thumbnailUrl = "";
  if (siteMetadata.thumbnailBanner) {
    thumbnailUrl = (
      siteMetadata.siteUrl +
      siteMetadata.thumbnailBanner.childImageSharp.gatsbyImageData.images.fallback.src
    ).replace(/([^:]\/)\/+/g, '$1');
  } else if (siteMetadata.thumbnail) {
    thumbnailUrl = (
      siteMetadata.siteUrl +
      siteMetadata.thumbnail.childImageSharp.original.src
    ).replace(/([^:]\/)\/+/g, '$1');
  }

  return (
      <Helmet
        title={siteMetadata.title}
        titleTemplate={
          props.useTitleTemplate ? siteMetadata.titleTemplate : undefined
        }
        htmlAttributes={{ lang: siteMetadata.language }}
      >
      {props.noIndex && <meta name="robots" content="noindex" />}
      <meta name="description" content={siteMetadata.description} />
      <meta property="og:title" content={siteMetadata.title} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta
        property="og:url"
        content={siteMetadata.siteUrl + location.pathname}
      />
      {thumbnailUrl && <meta property="og:image" content={thumbnailUrl} />}
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteMetadata.author} />
      <meta name="twitter:title" content={siteMetadata.title} />
      <meta name="twitter:description" content={siteMetadata.description} />
      {thumbnailUrl && <meta name="twitter:image" content={thumbnailUrl} />}
    </Helmet>
  );
}
