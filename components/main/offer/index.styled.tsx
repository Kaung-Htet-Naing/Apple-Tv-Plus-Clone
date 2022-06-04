import { device } from 'consts/ScreenSize'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import styled from 'styled-components'

// const { innerWidth: width, innerHeight: height } = window

export const OfferWrapper = styled.div`
  display: grid;
  gap: 2rem;
  padding: 0 200px;

  /* @media ${device.phone} {
    grid-template-columns: 1fr;
  } */

  @media ${device.desktop} {
    padding: 20px 200px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.laptop} {
    padding: 20px 50px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.tablet} {
    padding: 20px 0;
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.phone} {
    padding: 20px 0;
    grid-template-columns: 1fr;
  }
`

export const OfferItem = styled(AnimationOnScroll)``
export const Eyebrow = styled.h2`
  color: var(--white);
  font-weight: 600;

  @media ${device.desktop} {
    font-size: 21px;
  }
  @media ${device.laptop} {
    font-size: 21px;
  }

  @media ${device.tablet} {
    font-size: 19px;
  }
  @media ${device.phone} {
    font-size: 17px;
  }
`
export const Headline = styled.h3`
  color: var(--white);
  font-weight: 600;

  @media ${device.desktop} {
    font-size: 40px;
  }

  @media ${device.laptop} {
    font-size: 40px;
  }

  @media ${device.tablet} {
    font-size: 28px;
  }
  @media ${device.phone} {
    font-size: 28px;
  }
`

export const Body = styled.p`
  color: var(--smoke);
  font-size: 17px;
  font-weight: 400;
`

export const OfferButton = styled.a`
  background-color: var(--white);
  color: var(--darkblack);
  font-size: 14px;
  font-weight: 700;
  padding: 12px 22px;
  border-radius: 5rem;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
  }
`
