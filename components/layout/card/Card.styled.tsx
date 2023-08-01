'use client'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import styled from 'styled-components'
import { device } from 'consts/ScreenSize'

export const Wrapper = styled.div`
  padding: 0 0.5rem;
`

export const ImageCard = styled(AnimationOnScroll)`
  border-radius: 1rem;
  margin-top: 7rem;
  width: 400px;
  height: 200px;
  overflow: hidden;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    background-color: black;
    opacity: 0.5;
    > * {
      visibility: visible;
    }
  }
  @media ${device.phone} {
    width: 200px;
    height: 100px;
  }
  @media ${device.tablet} {
    width: 300px;
    height: 150px;
  }
`

export const CardImg = styled.img`
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
  position: absolute;
`

export const ButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 40px;
  visibility: hidden;
  transition: all 0.2s ease-in-out;
`

export const Button = styled.a`
  background-color: var(--white);

  color: var(--darkblack);
  font-size: 14px;
  font-weight: 700;
  padding: 12px 22px;
  border-radius: 5rem;
  text-decoration: none;
`
