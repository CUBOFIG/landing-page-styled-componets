import React from 'react'
import { Container, Button } from 'Styles/globalStyles'
import { Link } from 'react-scroll'
import { DiReact, DiCss3, DiBootstrap, DiJavascript1, DiHtml5 } from 'react-icons/di'
import { BsThreeDots } from 'react-icons/bs'
import Wave from 'react-wavify'
import { animateScroll as scroll } from 'react-scroll';

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Img,
  ImgWrapper,
  FragContainer,
  WaveContainer,
  SocialIcons,
  SocialIconLink
} from './InfoSection.elements'

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  headline,
  description,
  buttonLabel,
  lightTextDesc,
  lightText,
  lightTopLine,
  primary,
  start,
  img,
  alt,
  text,
  name,
  button,
  color,
  icons
}) => {

  const scrollToTop = () => {
    scroll.scrollToTop()
  }


  return (
    <FragContainer changeColor={color}>
      <InfoSec lightBg={lightBg} id={name}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>
                  {topLine}
                </TopLine>
                <Heading lightText={lightText}>
                  {headline}
                </Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  {description}
                </Subtitle>
                {icons
                  ?
                  <SocialIcons>
                    <SocialIconLink>
                      <DiJavascript1 />
                    </SocialIconLink>
                    <SocialIconLink>
                      <DiReact />
                    </SocialIconLink>
                    <SocialIconLink>
                      <DiCss3 />
                    </SocialIconLink>
                    <SocialIconLink>
                      <DiHtml5 />
                    </SocialIconLink>
                    <SocialIconLink>
                      <DiBootstrap />
                    </SocialIconLink>
                    <SocialIconLink>
                      <BsThreeDots />
                    </SocialIconLink>
                  </SocialIcons>
                  : null}
                {button ? null : <Link to="/" onClick={scrollToTop}>
                  <Button big fontBig primary={primary} text={text}>
                    {buttonLabel}
                  </Button>
                </Link>}

              </TextWrapper>
            </InfoColumn>

            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>

      </InfoSec>
      <WaveContainer>
        <Wave fill={color ? '#101522' : '#EDEDED'} paused={false}
          options={{
            height: 10,
            amplitude: 30,
            speed: 0.15,
            points: 3
          }}>
        </Wave>
      </WaveContainer>
    </FragContainer >
  )
}

export default InfoSection
