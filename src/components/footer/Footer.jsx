import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Button } from 'Styles/globalStyles'
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLinks,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements'
import { animateScroll as scroll } from 'react-scroll';


const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer id="info">
      <FooterSubscription>
        <FooterSubHeading>
          Send us an email requesting a consultation for your future projects.
        </FooterSubHeading>
        <FooterSubText>
          We will get in touch with you as soon as possible.
        </FooterSubText>
        <Form action="https://formspree.io/f/mjvjeqqe" method="POST">
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button type="submit">Subscription</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLinks to="/">
              How it Works
            </FooterLinks>
            <FooterLinks to="/">
              Testimonials
            </FooterLinks>
            <FooterLinks to="/">
              Careers
            </FooterLinks>
            <FooterLinks to="/">
              Investors
            </FooterLinks>
            <FooterLinks to="/">
              Terms of
            </FooterLinks>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLinks href={"https://www.linkedin.com/in/heriberto-figueroa-michel-750517207/"}>
              LinkedIn
            </FooterLinks >
            <FooterLinks href={"https://github.com/CUBOFIG"}>
              GitHub
            </FooterLinks >
            <FooterLinks href={"https://twitter.com/SOYCUB0"}>
              Twitter
            </FooterLinks>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Legal</FooterLinkTitle>
            <FooterLinks to="/">
              Terms & Conditions
            </FooterLinks>
            <FooterLinks to="/">
              Privacy Policy
            </FooterLinks>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLinks to="/">
              figmiche@gmail.com
            </FooterLinks>
            <FooterLinks to="/">
              Colima, Colima Mexico
            </FooterLinks>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/" onClick={scrollToTop}>
            CUBO
          </SocialLogo>
          <WebsiteRights>
            CUBO &#169; 2021-2022 Copyright.mx - All rights reserved
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href={"https://github.com/CUBOFIG"}
              target="_blank"
              aria-label="GitHub"
              rel="noopener noreferrer">
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink
              href={"https://www.linkedin.com/in/heriberto-figueroa-michel-750517207/"}
              target="_blank"
              aria-label="LinkedIn"
              rel="noopener noreferrer">
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink
              href={"https://twitter.com/SOYCUB0"}
              target="_blank"
              aria-label="Twitter"
              rel="noopener noreferrer">
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
