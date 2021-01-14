import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title, description, socialTitle, location}) {
  
  const { site, image } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        image: file(relativePath: {eq: "aith_labs_og.jpg"}) {
          childImageSharp {
            fixed(width: 1855, height: 895) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  
  const lang = 'sv';
  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = title || site.siteMetadata.title;
  const metaSocialTitle = socialTitle || metaTitle;
  const ogImage = `${location.origin}${image.childImageSharp.fixed.src}`
  
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
      property: `og:image`,
      content: ogImage,
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
