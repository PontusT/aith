const path = require('path');
const { cvData } = require('./src/cv/data/cvData');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const cvTemplate = path.resolve(__dirname, 'src/page-templates/CurriculumVitae.js');
  cvData.cvList.forEach((node) => {
    const pagePath = `/cv/${node.uid}`;
    createPage({
      path: pagePath,
      component: cvTemplate,
      context: {
        data: node,
        imageName: node.image,
      },
    });
  });
};
