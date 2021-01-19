# Aith Labs - CV Generator

This is the source code for the deployed site: http://aith.se/

It is an ongoing project with the purpose of building reponsive CVs that are easily maintained and optimized for SEO and performance.

The project is built as JAMStack using GatsbyJS. This will generate static files for every CV in the project at build time, making the SEO and perfomance optimizations possible. 

Currently the CVs are stored as JSON in cvData.js. This is a temporary solution and will be replaced by a CMS or Backend service in the future. Most likely AWS AppSync. 


## Install locally

```bash
npm install
```

## Run locally

Run gatsby develop mode:

```bash
npm run start
```

Run as a deployed site: 

```bash
npm run clean && npm run build && npm run serve
```

## How to use
This code base is kind adapted for the http://aith.se/ site. However it is possible to clone this project and host your own optimized CVs using this code with some small changes. 

* Change all information in `gatsby-config` to your own.

* Update the Seo.js component with your own Open Graph Image. 

* Add your own CV information to cvData.js and add your images to /src/images

* Remake index.js to whatever landing page you want. 

## Hosting your own CV

Hosting JAMStack sites requires some configurations as the sites has to be rebuilt when changes occure. You can read about different hosting possibilities here: https://bejamas.io/blog/jamstack-hosting-deployment/

### AWS

aith.se is hosted on AWS Amplify with the following configurations: 

customHeaders: 

```yaml
customHeaders:
  - pattern: '**/*.html'
    headers:
      - key: cache-control
        value: 'public, max-age=0, must-revalidate'
  - pattern: '**/*.json'
    headers:
      - key: cache-control
        value: 'public, max-age=0, must-revalidate'
  - pattern: /static/**/*
    headers:
      - key: cache-control
        value: 'public, max-age=31536000, immutable'
  - pattern: '**/*.js'
    headers:
      - key: cache-control
        value: 'public, max-age=31536000, immutable'
  - pattern: /sw.js
    headers:
      - key: cache-control
        value: 'public, max-age=0, must-revalidate'
  - pattern: '**/*.css'
    headers:
      - key: cache-control
        value: 'public, max-age=31536000, immutable'
  - pattern: '**/*'
    headers:
      - key: Strict-Transport-Security
        value: max-age=31536000; includeSubDomains
      - key: X-Frame-Options
        value: SAMEORIGIN
      - key: X-XSS-Protection
        value: 1; mode=block
      - key: X-Content-Type-Options
        value: nosniff
```

Rewrites and redirects:
```json
[
    {
        "source": "https://www.aith.se",
        "target": "https://aith.se",
        "status": "302",
        "condition": null
    },
    {
        "source": "/<*>",
        "target": "/404.html",
        "status": "404-200",
        "condition": null
    }
]
```

## Creating a new CV design

* Add a new folder under /src/cv/designs with a component that takes two arguments: `{data, image}`

* Add a case to the switch statement in `CurriculumVitae.js` to enable loading your CV.

* Add your case to your cv data under `design`


## Generating PDF's
The PDF files are generated on the fly using `react-pdf`. This is because this lib does not work with server site rendering.

## Backlog (TODO)

* The CV data in `cvData.js` should be extracted from the source code, making it easier to re-use this code. 

* Implement Dark Mode. The code has some preparations for this.

* Fix laggy animations. This might be due to the react-pdf lib generating the PDF on page load. 

* Create more CV designs

* Extract the CV specific code to a react lib or gatsby plugin. 