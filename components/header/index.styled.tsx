import { device } from 'consts/ScreenSize'
import styled from 'styled-components'

export const HeadingWrapper = styled.div`
  background-color: var(--black);
  padding: 0 208px;

  @media ${device.laptop} {
    padding: 0;
  }
`
export const Heading = styled.div`
  background-color: var(--black);
  color: var(--white);
  padding: 14px 22px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h1`
  color: var(--white);
  font-size: 21px;
  font-weight: 600;
`

export const StreamButton = styled.a`
  font-size: 12px;
  font-weight: 400;
  padding: 4px 11px;
  background-color: var(--white);
  color: var(--darkblack);
  border-radius: 5rem;
  text-decoration: none;
`
