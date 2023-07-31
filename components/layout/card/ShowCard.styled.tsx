'use client'
import { device } from 'consts/ScreenSize'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 0.5rem;
`
type CardProps = {
  image: string
}
export const Card = styled(AnimationOnScroll)`
  border-radius: 1rem;
  /* position: relative; */
  margin-top: 7rem;
  width: 100%;
  height: 500px;
  background-image: url(${({ image }: CardProps) => image});
  background-repeat: no-repeat;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > #info > * {
    align-items: center;
  }

  @media ${device.desktop} {
    > * {
      display: flex;
      justify-content: start;
      padding-left: 10px;
    }

    > #info > * {
      display: flex;
      margin: 0 5px;
    }

    > #info > * > * {
      display: flex;
      margin: 0 5px;
    }
  }

  @media ${device.laptop} {
    /* grid-template-columns: 1fr; */
    > * {
      display: flex;
      justify-content: start;
      padding-left: 10px;
    }

    > #info > * {
      display: flex;
      margin: 0 5px;
    }

    > #info > * > * {
      display: flex;
      margin: 0 5px;
    }
  }

  @media ${device.tablet} {
    /* grid-template-columns: 0; */
    > * {
      display: flex;
      justify-content: center;
    }

    > #info > * {
      display: flex;
      margin: 0 5px;
    }

    > #info > * > * {
      display: flex;
      margin: 0 5px;
    }
  }
  @media ${device.phone} {
    /* grid-template-columns: 0; */
    > * {
      display: flex;
      justify-content: center;
      padding-left: 10px;
    }

    > #info > * {
      display: block;
    }

    > #info > * > * {
      display: block;
      margin: 0 5px;
    }
  }
`

export const TitleWrapper = styled.div`
  width: 100%;
`
export const Logo = styled.img`
  color: var(--white);
`

export const ShowTime = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: var(--white);
`

export const InfoBottomWrapper = styled.div`
  width: 100%;
`

export const InfoBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Genere = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: var(--white);
  text-align: center;
  padding: 5px;
`

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: var(--white);
  padding: 5px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 40px;
`

export const Button = styled.a`
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
