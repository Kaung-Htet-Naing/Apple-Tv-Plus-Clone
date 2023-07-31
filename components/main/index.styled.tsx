'use client'
import { device } from 'consts/ScreenSize'
import styled from 'styled-components'

type ContainerProps = {
  height: number
}

export const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -10;
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 100vh;
`

export const InfoContainer = styled.div`
  height: ${({ height }: ContainerProps) => height * 0.9}px;
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

export const WatchOn = styled.div`
  font-size: 19px;
  font-weight: 600;
  margin: 90px 0;
  display: flex;
  justify-items: center;
  justify-contents: center;
  gap: 10px;
  color: var(--white);
  p {
    margin: auto 0;
  }
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
    padding: 0px 200px;
  }

  @media ${device.laptop} {
    font-size: 48px;
    padding: 10px 50px;
  }

  @media ${device.tablet} {
    font-size: 48px;
    padding: 10px 0;
  }
  @media ${device.phone} {
    font-size: 28px;
    padding: 10px 0;
  }
`
