import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

function SEO({ description, lang, image, meta, keywords, pathname }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.datoCmsSite.globalSeo.fallbackSeo.description;
        const metaImage =
          image && image.src
            ? `${data.site.siteMetadata.siteUrl}${image.src}`
            : null;
        const metaUrl = `${data.site.siteMetadata.siteUrl}${pathname}`;
        const title = data.datoCmsSite.globalSeo.fallbackSeo.title;

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            /*             titleTemplate={`%s | ${data.site.siteMetadata.title}`} */
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
            ]
              .concat(
                metaImage
                  ? [
                      {
                        property: `og:image`,
                        content: metaImage,
                      },
                      {
                        property: `og:image:alt`,
                        content: title,
                      },
                      {
                        property: "og:image:width",
                        content: image.width,
                      },
                      {
                        property: "og:image:height",
                        content: image.height,
                      },
                      {
                        name: `twitter:card`,
                        content: `summary_large_image`,
                      },
                    ]
                  : [
                      {
                        name: `twitter:card`,
                        content: `summary`,
                      },
                    ]
              )
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `de`,
  meta: [],
  keywords: [],
  pathname: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  image: PropTypes.object,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  pathname: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    datoCmsSite {
      globalSeo {
        fallbackSeo {
          description
          title
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
        title
      }
    }
  }
`;
