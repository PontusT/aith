const path = require('path')
const {cvData} = require('./src/cv/data/cvData')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const cvTemplate = path.resolve(__dirname, 'src/page-templates/CurriculumVitae.js');
  cvData.cvList.forEach((node) => {
    const path = `/cv/${node.uid}`;
    console.info(`Creating CV: ${path}`)
    createPage({
      path: path,
      component: cvTemplate,
      context: {
        data: node,
        imageName: node.image
      },
    })
  })

}