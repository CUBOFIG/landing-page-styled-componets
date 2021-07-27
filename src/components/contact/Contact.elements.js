import styled from 'styled-components';

export const ContactSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EDEDED;
  padding: 19.4rem 0;

  @media screen and (max-width: 768px){
    /* padding: 160px 0; */
    padding: 8.825rem 0;
  }
`
export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`
export const ContactHeading = styled.h1`
  color: #101522;
  font-size: 7rem;
  margin-bottom: 1.5rem;
  font-weight: 700;

  @media screen and (max-width: 960px){
    font-size: 3.5rem;
  }
`
export const ContactTop = styled.h1`
  color: #AEAEAE;
  font-size: 4rem;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 960px){
    font-size: 1.5rem;
  }
`
