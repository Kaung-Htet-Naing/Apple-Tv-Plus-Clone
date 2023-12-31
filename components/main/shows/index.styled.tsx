'use client'
import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`

export const Button = styled.a`
  border: solid 1px var(--white);
  color: var(--white);
  font-size: 14px;
  font-weight: 700;
  padding: 12px 22px;
  border-radius: 5rem;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
  }
`
