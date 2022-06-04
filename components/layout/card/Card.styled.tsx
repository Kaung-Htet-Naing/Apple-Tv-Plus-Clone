import { device } from 'consts/ScreenSize'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 0.5rem;
  height: 250px;
`
type CardProps = {
  image: string
}
export const ImageCard = styled(AnimationOnScroll)`
  border-radius: 1rem;
  /* position: relative; */
  margin-top: 7rem;
  width: 400px;
  height: 200px;
  background-image: url(${({ image }: CardProps) => image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

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
`

export const ButtonWrapper = styled.div`
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
