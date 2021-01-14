exports.cvData = {
  cvList: [
    {
      uid: 'pontus',
      design: 'half_colored',
      color: '#574b90',
      accentColor: '#9e579d',
      lightFontColor: '#FFF',
      darkFontColor: '#303a52',
      name: "Pontus Thulin",
      workTitle: "Software Engineer & Fullstack Developer",
      presentation:
        "Pontus has a master's degree in Computer Science and Engineering (Civilingenjör i Datateknik) from Linköping University and over 5 years in the business. He's a full on fullstack developer whom you will often find coding even in his free time.",
      image: "IMG_7162.jpg",
      seo: {
        metaTitle: 'Aith Labs | Pontus Thulin | Fullstack Developer & Software Engineer',
        metaDescription: 'Aith | Labs Pontus Thulin | Fullstack Developer & Software Engineer | ReactJS, NodeJS, GatsbyJS, Java, Kotlin and much more',
      },
      contact: {
        website: "https://aith.se",
        email: "pontus.thulin@aith.se",
        tel: {
          display: "070 494 54 89",
          number: '+46704945489'
        },
        linkedin: "https://www.linkedin.com/in/pontus-thulin-080a5056/"
      },
      frameworks: [
        {
          skill: "ReactJS",
          level: 90
        },
        {
          skill: "GatsbyJS",
          level: 90
        },
        {
          skill: "NodeJS",
          level: 75
        },
        {
          skill: "Spring Boot",
          level: 75
        },
        {
          skill: "AWS",
          level: 65
        },
        {
          skill: "Google Cloud",
          level: 40
        },
      ],
      skills: [
        {
          skill: "JavaScript",
          level: 90
        },
        {
          skill: "HTML / CSS",
          level: 90
        },
        {
          skill: "Kotlin",
          level: 90
        },
        {
          skill: "Java",
          level: 90
        },
        {
          skill: "Python",
          level: 65
        },
        {
          skill: "C#",
          level: 60
        },
        {
          skill: "Erlang",
          level: 40
        },
        {
          skill: "C",
          level: 20
        }
      ],
      knowledgeList: [
        "JAMStack",
        "GatsbyJS",
        "ReactJS",
        "Framer Motion",
        "AWS Route 56",
        "AWS Cognito",
        "AWS Amplify",
        "AWS Appsync",
        "PWA",
        "Micro Services",
        "Spring Framework",
        "Spring Boot",
        "NextJS",
        "Prismic CMS",
        "GraphQL",
        "Apollo",
        "NodeJS",
        "NestJS",
        "npm",
        "Express",
        "Security",
        "Passport",
        "Oauth 2.0",
        "OpenID Connect",
        "JWT",
        "Webflow",
        "Material-Ui",
        "Bootstrap 4",
        "Machine Learning",
        "Tensorflow",
        "Docker",
        "RxJava",
        "RabbitMQ",
        "Hystrix",
        "Zuul",
        "Eureka",
        "Firebase Cloud Messaging (FCM)",
        "TDD",
        "CI",
        "CD",
        "JSON",
        "XML",
        "Jenkins",
        "Maven",
        "Git",
        "Subversion",
        "MongoDB",
        "Mongoose",
        "MySQL",
        "Oracle",
        "Intellij",
        "MacOS",
        "Linux",
        "Agile",
        "Scrum",
        "Kanban",
        "HTTP",
        "RESTful",
        "SOAP",
        "Maven",
        "Tomcat",
        "Netty",
        "Play Framework",
        "Heroku",
        "Azure",
        "Jira",
        "Atlassian Suite",
        "Github",
        "BitBucket",
        "Github"
      ],
      projects: {
        title: "projects",
        icon: "project",
        list: [
          {
            location: "Aith Labs",
            dates: '2020/2021',
            title: "aith website",
            text:
              "https://aith.se is a responsive JAMStack website built in GatsbyJS (with Framer Motion for animations) and deployed with AWS Amplify. The site was created with a mobile-first approach. One of the features is the CV creator that takes a descriptive json file and constructs a personal CV which scales well on different devices. Like this one. Each CV is statically created at build time due to the JAMStack approach to maximize performance and SEO. The site is under continuous development, next up is to store all CV data in AWS Appsync and secure it with AWS Cognito.",
            link: {
              text: "Source Code (soon)",
              url: "https://www.youtube.com/watch?v=oHg5SJYRHA0"
            }
          },
          {
            location: "Dagsverket",
            dates: '2020',
            title: "dagsverket website",
            text:
              "The dagsverket.io website is a responsive JAMStack site built in GatsbyJS (with Framer Motion for animations) and deployed with AWS Amplify. It is build with performance and SEO in mind and gets full scores in Lighthouse. Thanks to GatsbyJS the site is a Progressive Web App (PWA) and works offline. It uses Prismic as a CMS to fetch data at build time.",
            link: {
              text: "Go to Dagsverket",
              url: "https://dagsverket.io"
            },
          },
          {
            location: "Aith Labs",
            dates: '2020',
            title: "Blaio",
            text:
              "Blaio is a hobby project developed within Aith Labs. The goal is to create an artificially intelligent blogger which will learn from professional swedish bloggers and become one of them. It uses a Recurrent Neural Network architecture built in Keras (with Tensorflow backend) which is trained and deployed at Google Cloud using Cloud Functions and AI Platform. It's available for testing at www.aith.se and the code will be open sourced in the future.",
          }
        ]
      },
      work_experience: {
        title: "work experience",
        icon: "work",
        list: [
          {
            location: "Dagsverket Webbyrå",
            dates: "2020/2021",
            title: "frontend developer",
            link: {
              text: "Go to Dagsverket",
              url:
                "https://dagsverket.io"
            },
            text:
              "Dagsverket is a web agency founded in 2020 by Pontus and his colleague Jennifer. Dagsverket builds websites with a focus on performance, usability and SEO. Most sites are build with JAMStack using GatsbyJS."
          },
          {
            location: "Nordnet",
            startDate: "2016/11",
            endDate: "2019/06",
            dates: "2017/2019",
            title: "backend developer",
            text:
              "During the assignment Pontus worked within two different teams. The first team was focused on rewriting old Perl code that handled authentication and user management to a modern solution with micro-services and continuous delivery. The new services were written in both Java for stability but also some parts in Erlang for performance and concurrency. Since October 2017 Pontus joined a newly created team at Nordnet. The team had the purpose of building an infrastructure to enable implementation and deployment of machine learning algorithms within the organization. The team also designed and built a backend infrastructure to enable sending push notifications to mobile devices. The solution was highly event-driven for the purpose of performance and scalability. The last team built backend infrastructure supporting market data pages for the launch of Nordnet’s new website. The services had to update and support price data for stocks and funds in realtime to different clients"
          },
          {
            location: "Hi3G",
            startDate: "2016/06",
            endDate: "2016/11",
            dates: "2016",
            title: "fullstack developer",
            text:
              "Pontus worked as a fullstack developer for Hi3G’s next-generation sales system. The product was developed in close cooperation with the business side using Domain Driven Design. The system had high demands on SLA and was therefore well-tested using TDD and Concordion. The system used Hystrix for circuit breaking, caching and asynchronous calls."
          },
          {
            location: "Nordnet",
            startDate: "2015/12",
            endDate: "2016/06",
            dates: "2015/2016",
            title: "backend developer",
            text:
              "The team developed a two-factor authentication solution based on time-based one-time passwords (TOTP, RFC6238) generated by iOS and Android applications. The project had high demands on security with multiple layers of encryption, several risk analysis being performed and by running penetration tests against the system."
          },
          {
            location: "Ericsson",
            dates: "2014/2015",
            title: "fullstack developer",
            text:
              "Ericsson Managed Player is a multitenancy streaming platform. The assignment was first focused on a system that assembled multiple admin interfaces into one by acting as a reverse proxy. The system was responsible for authentication and authorization of all requests and required a high grade of security. The assignment then shifted to focus the systems handling metadata for videos using a micro-service architecture and with high demands on performance and throughput."
          },
          {
            location: "SVTi",
            dates: "2014",
            title: "backend developer",
            text:
              "During the Omegapoint trainee program a solution was build together with the former channel SVT Flow to collect anonymous data about user’s behavior in order to provide them with personalized recommendations. The trainee program also included education and reading within subjects such as: TDD, DDD, CI/CD, Agile Methodologies and Security."
          }
        ]
      },
      education: {
        title: "education",
        icon: "education",
        list: [
          {
            location: "Linköping University",
            startDate: "2009",
            endDate: "2014",
            dates: "2009/2014",
            title: "MSc Computer Science",
            text:
              "Pontus has a master’s degree in Computer Science and Engineering (Civilingenjör i Datateknik) from Linköpings Univesity. The specialization was within Secure and Stable systems with a master thesis about automated security testing."
          },
          {
            location: "Linköping University",
            startDate: "2009",
            endDate: "2014",
            dates: "2014",
            title: "Master's thesis",
            link: {
              url: 'http://liu.diva-portal.org/smash/get/diva2:784545/FULLTEXT01.pdf', 
              text: 'Show Thesis',
            },
            text:
              "Evaluation of the applicability of security testing techniques in continuous integration environments."
          },
          {
            title: "Machine Learning",
            location: "Stanford, Coursera",
            dates: "2017",
            text: "The course provides a broad introduction to machine learning, datamining, and statistical pattern recognition. It includes Supervised learning, Unsupervised learning and best practices in machine learning.",
            link: {
              text: "Show Certificate",
              url:
                "https://www.coursera.org/account/accomplishments/verify/8U6U9SC4V8VU"
            }
          },
          {
            title: "NodeJS Express MongoDB",
            location: "Hong Kong University, Coursera",
            text: "An introduction course to the Node, Express and Mongo stack.",
            dates: "2019",
            link: {
              text: "Show Certificate",
              url:
                "https://www.coursera.org/account/accomplishments/records/8C6T7DZMGHKR"
            }
          },
          {
            title: "Frontend React",
            location: "Hong Kong University, Coursera",
            text: "An introduction course to React development.",
            dates: "2019",
            link: {
              text: "Show Certificate",
              url:
                "https://www.coursera.org/account/accomplishments/records/XN5FTMPPJ3RR"
            }
          },
          {
            title: "Frontend Bootstrap",
            location: "Hong Kong University, Coursera",
            text: "An introduction course to bootstrap 4.",
            dates: "2019",
            link: {
              text: "Show Certificate",
              url:
                "https://www.coursera.org/account/accomplishments/records/NLFTFXQASMNG"
            }
          }
        ]
      },
    }
  ]
};
