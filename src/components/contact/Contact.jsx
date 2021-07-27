import React from 'react'
import { IconContext } from 'react-icons/lib'
import {
  ContactSection,
  ContactWrapper,
  ContactHeading,
  ContactTop,
} from './Contact.elements'

const Contact = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }} >
      <ContactSection id="contact">
        <ContactWrapper>
          <ContactTop>don't be shy and let's chat</ContactTop>
          <ContactHeading>
            CONTACT US
          </ContactHeading>
        </ContactWrapper>
      </ContactSection>
    </IconContext.Provider>
  )
}

export default Contact
