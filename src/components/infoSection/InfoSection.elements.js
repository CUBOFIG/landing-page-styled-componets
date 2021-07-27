import styled from 'styled-components'
import Wave from 'react-wavify'

export const InfoSec = styled.div`
  color: #fff;
  padding: 12rem 0;
  background: ${({ lightBg }) => (lightBg ? '#EDEDED' : '#101522')};

  @media screen and (max-width: 768px){
    /* padding: 160px 0; */
    padding-bottom: 3.06rem;
    padding-top: 3.06rem;
  }
`
export const FragContainer = styled.div`
  background: ${({ changeColor }) => (changeColor ? '#EDEDED' : '#101522')};
`
export const WaveContainer = styled.div`
  height: 9.3rem;
  position: relative;
  width: 100%;
  bottom: -3.188rem;

  @media screen and (max-width: 960px){
    bottom: -6.188rem;
  }

  @media screen and (max-width: 768px){
    bottom: -5.188rem;
  }
`
export const WaveSection = styled(Wave)`
`
export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px --15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`
export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px){
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top:0;
  padding-bottom: 60px;
  
  @media screen and (max-width: 768px){
    padding-bottom: 65px;
  }
`
export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#1F89E2')};
  font-size: 18px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`
export const Subtitle = styled.p`
 margin-bottom: 35px;
 font-size: 18px;
 line-height: 24px;
 max-width: 440px;
 color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`
export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
 
  transition: all 300ms;
  animation: move_vector 6s ease-in-out infinite;

  @keyframes move_vector{
    0%{
        transform: translateY(10px);
    }
    50%{
        transform: translateY(-10px);
    }
    100%{
        transform: translateY(10px);
    }
}
`
export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`
export const SocialIconLink = styled.a`
color: #101522;
font-size: 30px;
`

