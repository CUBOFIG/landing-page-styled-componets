import React from 'react'
import { GiSamusHelmet, GiSpiderMask, GiSamuraiHelmet } from 'react-icons/gi'
import { IconContext } from 'react-icons/lib'
import Wave from 'react-wavify'
import {
  PricingSection,
  PricingWrapper,
  PriciongHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
  FragContainer,
  WaveContainer,
} from './Pricing.elements'

const Pricing = () => {
  return (
    <FragContainer>
      <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
        <PricingSection id="service">
          <PricingWrapper>
            <PriciongHeading>
              Our Services
            </PriciongHeading>
            <PricingContainer>
              <PricingCard >
                <PricingCardInfo>
                  <PricingCardIcon>
                    <GiSpiderMask />
                  </PricingCardIcon>
                  <PricingCardPlan>Initial project</PricingCardPlan>
                  <PricingCardCost>$49.99</PricingCardCost>
                  <PricingCardLength>per Month</PricingCardLength>
                  <PricingCardFeatures>
                    <PricingCardFeature>Constant delivery</PricingCardFeature>
                    <PricingCardFeature>front-End</PricingCardFeature>
                  </PricingCardFeatures>

                </PricingCardInfo>
              </PricingCard>
              <PricingCard >
                <PricingCardInfo>
                  <PricingCardIcon>
                    <GiSamuraiHelmet />
                  </PricingCardIcon>
                  <PricingCardPlan>Advanced project</PricingCardPlan>
                  <PricingCardCost>$99.99</PricingCardCost>
                  <PricingCardLength>per Month</PricingCardLength>
                  <PricingCardFeatures>
                    <PricingCardFeature>Constant delivery</PricingCardFeature>
                    <PricingCardFeature>front-End</PricingCardFeature>
                    <PricingCardFeature>Back-End</PricingCardFeature>
                  </PricingCardFeatures>

                </PricingCardInfo>
              </PricingCard>
              <PricingCard >
                <PricingCardInfo>
                  <PricingCardIcon>
                    <GiSamusHelmet />
                  </PricingCardIcon>
                  <PricingCardPlan>Custom Project</PricingCardPlan>
                  <PricingCardCost>quote</PricingCardCost>
                  <PricingCardLength>per Month</PricingCardLength>
                  <PricingCardFeatures>
                    <PricingCardFeature>Constant delivery</PricingCardFeature>
                    <PricingCardFeature>front-End</PricingCardFeature>
                    <PricingCardFeature>Back-End</PricingCardFeature>
                    <PricingCardFeature>And more</PricingCardFeature>
                  </PricingCardFeatures>

                </PricingCardInfo>
              </PricingCard>
            </PricingContainer>
          </PricingWrapper>
        </PricingSection>
        <WaveContainer>
          <Wave fill='#EDEDED' paused={false}
            options={{
              height: 10,
              amplitude: 30,
              speed: 0.15,
              points: 3
            }}>
          </Wave>
        </WaveContainer>

      </IconContext.Provider>
    </FragContainer>
  )
}

export default Pricing
