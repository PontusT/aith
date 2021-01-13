import styled from '@emotion/styled'
import {
  useViewportScroll,
  motion,
  useTransform,
} from 'framer-motion';
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const Index = ({data}) => {

  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 100, 900, 1000], [0, -30, -970, -1000]);
  const y2 = useTransform(scrollY, [100, 1000], [0, -1500]);
  const y3 = useTransform(scrollY, [200, 1000], [0, -2000]);
  const headerOpacity = useTransform(scrollY, [100, 900], [1, 0]);
  const headerScroll = useTransform(scrollY, [0, 350], [0, 100]);
  const contactOpacity = useTransform(scrollY, ["20vh", "100vh"], [0, 1]);

  const StyledContainer = styled.div`
    width: 100vw;
    height: 200vh;
    background-color: #040D21;
    font-family: 'Noto Sans JP';
    position: relative;
  `

  const AbsoluteContainer = styled.div`
    width: 100vw;
    height: 100%;
    position: absolute;
  `
  
  const BlueRadial = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: -10vh;
    left: -30vh;
    background: radial-gradient(68.26% 68.26% at 16.83% 20.04%, #08306B 0%, rgba(4, 13, 33, 0) 100%);
  `
  
  const PinkRadial = styled.div`
    width: 100%;
    height: 100%;
    background: radial-gradient(66.12% 70.43% at 99.16% 90.23%, #482148 0%, rgba(4, 13, 33, 0) 100%);
    position: absolute;
    bottom: 0;
    right: 0;
  `  
  const Hero = styled.div`
    z-index: 100;
    width: 100%;
    height: 100vh;
    /* position: absolute; */
    /* top: 0; */
    position: relative;
    display: flex;
  `  
  
  const ContactSection = styled.div`
    z-index: 100;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  const HeroText = styled.p`
    margin-top: 20px;
    max-width: 600px;
    font-size: 1rem;
    color: #8193B2;
  `  
  
  return (
    <>
      <StyledContainer>
        <BlueRadial />
        <PinkRadial />
        <AbsoluteContainer>
          <motion.div
            style={{ y: y2 }}

            css={css`
              width: 100vw;
              height: 200vh;
              background-image: url(/icons/rain2.svg);
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center top;
            `}
          >
          </motion.div>
        </AbsoluteContainer>
        <AbsoluteContainer>
          <motion.div
            style={{ y: y1 }}
            css={css`
              width: 100vw;
              height: 200vh;
              background-image: url(/icons/rain1.svg);
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center top;
            `}
          >
          </motion.div>
        </AbsoluteContainer>
        <AbsoluteContainer>
          <motion.div
            style={{ y: y3 }}
            css={css`
              width: 100vw;
              height: 200vh;
              background-image: url(/icons/rain3.svg);
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center top;
            `}
          >
          </motion.div>
        </AbsoluteContainer>
        <Hero>
          <motion.div
            style={{y: headerScroll, opacity: headerOpacity}}
            css={css`
              margin-top: 20vh;
              margin-left: 20vh;
              color: white;
            `}
          >
            <h1
              css={css`
                margin-top: 20px;
                font-size: 4rem;
                letter-spacing: 1px;
                font-family: 'Noto Sans JP', sans-serif;
                font-weight: 900;
                text-transform: uppercase;
            `}
            >
              Vi gillar både
            </h1>
            <h1
              css={css`
                margin-top: 15px;
                font-size: 4rem;
                letter-spacing: 1px;
                font-family: 'Noto Sans JP', sans-serif;
                font-weight: 900;
                text-transform: uppercase;
            `}
            >
              <motion.span
                initial={{ backgroundImage: 'linear-gradient(90deg, #482148, #08306B)'}}
                animate={{ backgroundImage: 'linear-gradient(10deg, #fff, #08306B)'}}
                transition={{
                  repeat: Infinity, duration: 2, repeatType: "reverse"
                }}
                css={css`
                  /* background-image: linear-gradient(45deg, #f3ec78, #af4261); */
                  font-family: 'Titillium Web', sans-serif;
                  background-clip: text;
                  color: transparent;
            `} 
              >
                {`nollor `}
              </motion.span>
               och 
               <motion.span
                initial={{ backgroundImage: 'linear-gradient(90deg, #f3ec78, #af4261)' }}
                animate={{ backgroundImage: 'linear-gradient(10deg, #f3ec78, #af4261)' }}
                transition={{
                  repeat: Infinity, duration: 2, repeatType: "reverse"
                }}
                css={css`
                  /* background-image: linear-gradient(45deg, #f3ec78, #af4261); */
                  font-family: 'Titillium Web', sans-serif;
                  background-clip: text;
                  color: transparent;
            `}
              >
                {` ettor`}
              </motion.span>
            </h1>
          <HeroText>
              Where the world builds software
              Millions of developers and companies build,
              ship, and maintain their software on GitHub—the largest and most advanced development platform in the world.
          </HeroText>
          </motion.div>
        </Hero>
        <ContactSection>  
          <motion.div
            style={{ opacity: contactOpacity }}
            css={css`
              background-color: white;
              padding: 200px;
            `}
          >
            kontakt
          </motion.div>
        </ContactSection>
      </StyledContainer>
    </>
  );
}


export const query = graphql`
  query {
    image: file(relativePath: {eq: "one_zero_rain.svg"}) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1000) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Index;