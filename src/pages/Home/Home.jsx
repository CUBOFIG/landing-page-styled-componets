import React from 'react'
import { InfoSection, Pricing, Contact } from 'components'
import { homeObjOne, homeObjTwo } from './Data'

const Home = () => {
  return (
    <>
      <InfoSection  {...homeObjOne} />
      <InfoSection  {...homeObjTwo} />
      <Pricing />
      <Contact />
    </>
  )
}

export default Home
