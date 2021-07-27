import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px){
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#1F89E2' : 'transparent')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: ${({ text }) => (text ? '#fff' : '#696A6B')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: ${({ primary }) => (primary ? 'none' : '2px solid #C7C6C6')};
  cursor: pointer;

  &:hover{
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? '#0467FB' : 'rgba(112, 111, 111 , 0.2)')};
    border: ${({ primary }) => (primary ? 'none' : '2px solid #1F89E2')};
  }

  @media screen and (max-width: 960px){
    width: 100%;
  }
`

export default GlobalStyle;
