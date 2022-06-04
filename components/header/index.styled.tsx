import { device } from 'consts/ScreenSize'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const HeadingWrapper = styled.div`
  background-color: var(--black);
  padding: 0 208px;
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  border-bottom: 0.5px solid;
  border-color: rgba(255, 255, 255, 0.24);

  @media ${device.laptop} {
    padding: 0;
  }
  z-index: 9999;
`
export const Heading = styled.div`
  /* background-color: var(--black); */
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
  margin: 0;
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

export const InfomationWrapper = styled.div`
  background-color: var(--black);
  padding: 16px 22px;
  width: 100%;
  text-align: center;
  color: var(--white);
`

export const Info = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`

export const LearnMore = styled.a`
  color: var(--blue);
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`
