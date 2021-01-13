import React from 'react';
import { Image, Font, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import robotoRegular from './fonts/roboto/Roboto-Regular.ttf'
import robotoThin from './fonts/roboto/Roboto-Thin.ttf'
import robotoBold from './fonts/roboto/Roboto-Bold.ttf'

const PdfCv = ({data, image}) => {

  Font.register({
    family: 'Roboto', fonts: [
      { src: robotoRegular }, 
      { src: robotoThin, fontWeight: 300 },
      { src: robotoBold, fontWeight: 700 },
    ]
  });

  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
      color: data.darkFontColor,
      paddingTop: 40,
      paddingBottom: 30,
      flexDirection: 'column',
      paddingLeft: 40,
      paddingRight: 40,
    },
    p: {
      fontFamily: 'Roboto',
      fontSize: 10,
      fontWeight: 300,
    },
    h1: {
      fontFamily: 'Roboto',
      fontSize: 40,
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: 'Roboto',
      fontSize: 22,
      textTransform: 'uppercase',
      fontWeight: 700
    },
    h3: {
      fontFamily: 'Roboto',
      fontSize: 14,
      textTransform: 'uppercase',
      fontWeight: 700
    },
    h4: {
      fontFamily: 'Roboto',
      fontSize: 14,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: 'Roboto',
      fontSize: 14,
      fontWeight: 300
    },
    h6: {
      fontFamily: 'Roboto',
      fontSize: 10,
      fontWeight: 300
    },
    topSection: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
      marginBottom: 40,
    },
    nameSection: {
      nameSection: 'column',
      marginLeft: 20,
    },
    presentationWrapper: {
      maxWidth: 300,
      marginTop: 3,
    },
    outerContactSection: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 40,
      marginBottom: 40,
    },
    contactSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '70%',
    },
    image: {
      width: 100,
      height: 100,
      objectFit: 'cover',
      borderRadius: 100,
    },
    langageSection: {
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 30,
    },
    innerLangageSection: {
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    outerSkill: {
      height: 10,
      backgroundColor: '#C2C3D2',
      marginTop: 4,
    },
    headingRow: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    line: {
      marginLeft: 10,
      flexGrow: 1,
      height: 1,
      backgroundColor: data.darkFontColor,
    },
    listSection: {
      flexDirection: 'column',
      marginBottom: 20,
    },
    listItem: {
      flexDirection: 'row',
    },
    titleAndDateWrapper: {
      width: '20%',
      textAlign: 'right',
      textTransform: 'uppercase',
      whiteSpace: 'wrap',
    },
    textWrapper: {
      width: '75%',
      paddingLeft: 20,
    }

  });


  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.p} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} fixed />
        <View style={styles.topSection}>
          <Image style={styles.image} src={image.fluid.src} />
          <View style={styles.nameSection}>
            <Text style={styles.h1}>{data.name}</Text>
            <Text style={styles.h4}>{data.workTitle}</Text>
            <View style={styles.presentationWrapper}>
              <Text style={styles.p}>{data.presentation}</Text>
            </View>
          </View>
        </View>

        <View style={styles.outerContactSection}>
          <View style={styles.contactSection}>
            <Text style={styles.h5}>
              {data.contact.email}
            </Text>
            <Text style={styles.h5}>
              {data.contact.tel.display}
            </Text>
            <Text style={styles.h5}>
              {data.contact.website}
            </Text>

          </View>
        </View>

        <View style={styles.headingRow}>
          <Text style={styles.h2}>
            Top Languages
              </Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.langageSection}>
          <View style={styles.innerLangageSection}>
            {data.skills.map((skill, index) => {
              return (
                <View style={{
                  width: '50%',
                  paddingBottom: 6,
                  paddingLeft: index % 2 === 0 ? 0 : 10,
                  paddingRight: index % 2 !== 0 ? 0 : 10
                }}
                >
                  <Text style={styles.h6}>
                    {skill.skill}
                  </Text>
                  <View style={styles.outerSkill}>
                    <View style={{ height: '100%', width: `${skill.level}%`, backgroundColor: data.accentColor }}>
                    </View>
                  </View>
                </View>
              )
            }
            )}
          </View>
        </View>

        <View style={styles.headingRow}>
          <Text style={styles.h2}>
            Top Frameworks
            </Text>
          <View style={styles.line} />
        </View>
        <View style={styles.langageSection}>
          <View style={styles.innerLangageSection}>
            {data.frameworks.map((skill, index) => {
              return (
                <View style={{
                  width: '50%',
                  paddingBottom: 6,
                  paddingLeft: index % 2 === 0 ? 0 : 10,
                  paddingRight: index % 2 !== 0 ? 0 : 10
                }}
                >
                  <Text style={styles.h6}>
                    {skill.skill}
                  </Text>
                  <View style={styles.outerSkill}>
                    <View style={{ height: '100%', width: `${skill.level}%`, backgroundColor: data.accentColor }}>
                    </View>
                  </View>
                </View>
              )
            }
            )}
          </View>
        </View>

        <View style={styles.headingRow}>
          <Text style={styles.h2}>
            Tech list
              </Text>
          <View style={styles.line} />
        </View>
        <Text style={styles.p}>
          {data.knowledgeList.join(", ")}
        </Text>

        <View break style={styles.headingRow}>
          <Text style={styles.h2}>
            Work Experience
            </Text>
          <View style={styles.line}></View>
        </View>
        {data.work_experience.list.map(experience => {
          return (
            <View style={styles.listSection}>
              <View style={styles.listItem}>
                <View style={styles.titleAndDateWrapper}>
                  <Text style={styles.h3}>
                    {experience.title.split(' ').join('\n')}
                  </Text>
                  <Text style={styles.h5}>
                    {experience.dates}
                  </Text>
                </View>
                <View style={styles.textWrapper}>
                  <Text style={styles.h4}>
                    {experience.location}
                  </Text>
                  <View style={{ marginBottom: 3 }} />
                  <Text style={styles.p}>
                    {experience.text}
                  </Text>
                </View>
              </View>
            </View>
          )
        })}

        <View break style={styles.headingRow}>
          <Text style={styles.h2}>
            Projects
            </Text>
          <View style={styles.line}></View>
        </View>
        {data.projects.list.map(experience => {
          return (
            <View style={styles.listSection}>
              <View style={styles.listItem}>
                <View style={styles.titleAndDateWrapper}>
                  <Text style={styles.h3}>
                    {experience.title.split(' ').join('\n')}
                  </Text>
                  <Text style={styles.h5}>
                    {experience.dates}
                  </Text>
                </View>
                <View style={styles.textWrapper}>
                  <Text style={styles.h4}>
                    {experience.location}
                  </Text>
                  <View style={{ marginBottom: 3 }} />
                  <Text style={styles.p}>
                    {experience.text}
                  </Text>
                </View>
              </View>
            </View>
          )
        })}

        <View break style={styles.headingRow}>
          <Text style={styles.h2}>
            Education(s)
            </Text>
          <View style={styles.line}></View>
        </View>
        {data.education.list.map(experience => {
          return (
            <View style={styles.listSection}>
              <View style={styles.listItem}>
                <View style={styles.titleAndDateWrapper}>
                  <Text style={styles.h3}>
                    {experience.title.split(' ').join('\n')}
                  </Text>
                  <Text style={styles.h5}>
                    {experience.dates}
                  </Text>
                </View>
                <View style={styles.textWrapper}>
                  <Text style={styles.h4}>
                    {experience.location}
                  </Text>
                  <View style={{ marginBottom: 3 }} />
                  <Text style={styles.p}>
                    {experience.text}
                  </Text>
                </View>
              </View>
            </View>
          )
        })}

        <Text style={styles.p}>
          Note: This PDF was generated on the fly using the React-pdf lib.
          </Text>
        <Text style={styles.p}>
          Please notify me if you find any bugs.
        </Text>

      </Page>
    </Document>
  );
}

export default PdfCv;