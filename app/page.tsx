'use client'
import { Container } from '@/components/header/index.styled'
import Main from '@/components/main'
import Shows from '@/components/main/shows'
import type { NextPage } from 'next'
import Header from '@/components/header'

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <main>
        <Main />
        <Shows />
      </main>
    </Container>
  )
}

export default Home
