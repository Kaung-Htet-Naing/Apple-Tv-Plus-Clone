import { device } from 'consts/ScreenSize'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import styled from 'styled-components'

// const { innerWidth: width, innerHeight: height } = window

type ContainerProps = {
  height: number
}

export const ImageContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: -10;
  width: 100%;
  height: ${({ height }: ContainerProps) => height}px;
  background-image: url(/assets/backgrounds/ted_lasso_bg.jpeg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

export const InfoContainer = styled.div`
  height: ${({ height }: ContainerProps) => height * 0.8}px;
  display: flex;
  flex-direction: column;

  @media ${device.desktop} {
    justify-content: end;
    padding: 0 184px;
  }

  @media ${device.laptop} {
    justify-content: center;
    padding: 0 84px;
  }

  @media ${device.tablet} {
    justify-content: center;
    padding: 0 64px;
  }
  @media ${device.phone} {
    justify-content: center;
    padding: 0 14px;
  }
`

export const Title = styled.h2`
  font-weight: 700;
  color: var(--white);

  @media ${device.desktop} {
    font-size: 80px;
    line-height: 84px;
  }

  @media ${device.laptop} {
    font-size: 80px;
    line-height: 84px;
  }

  @media ${device.tablet} {
    font-size: 70px;
    line-height: 72px;
  }
  @media ${device.phone} {
    font-size: 40px;
    line-height: 42px;
  }
`

export const StreamNow = styled.a`
  font-size: 17px;
  font-weight: 600;
  padding: 18px 31px;
  background-color: var(--white);
  color: var(--darkblack);
  border-radius: 5rem;
  text-decoration: none;

  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.5;
    transform: scale(1.05);
  }
`

export const WatchOn = styled.p`
  font-size: 19px;
  font-weight: 600;
  margin: 90px 0;
  color: var(--white);
`

export const InfoWrapper = styled.div`
  padding: 2rem;
  padding-top: 10rem;
  background-color: var(--darkblack);
`

export const Info = styled.p`
  font-weight: 700;
  color: var(--white);

  @media ${device.desktop} {
    font-size: 48px;
    padding: 20px 200px;
  }

  @media ${device.laptop} {
    font-size: 48px;
    padding: 20px 50px;
  }

  @media ${device.tablet} {
    font-size: 48px;
    padding: 20px 0;
  }
  @media ${device.phone} {
    font-size: 28px;
    padding: 20px 0;
  }
`
