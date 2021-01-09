import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title, description, socialTitle, socialImage}) {
  
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const lang = 'sv';
  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = title || site.siteMetadata.title;
  const metaSocialTitle = socialTitle || metaTitle;

  let metaTags = [
    {
      name: `viewport`,
      content: 'width=device-width, initial-scale=1'
    },  
    {
      name: `author`,
      content: site.siteMetadata.author
    },
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: metaSocialTitle,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];

  if(socialImage !== null) {
    metaTags = metaTags
    .concat({
      name: `og:image`,
      content: socialImage
    })
      .concat({
        name: `image`,
        property: `og:image`,
        content: socialImage
      })
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={metaTitle}
      meta={metaTags}
    />
  )
}

export default SEO
