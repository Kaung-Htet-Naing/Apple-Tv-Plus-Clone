import { Container } from '@/components/header/index.styled'
import Main from '@/components/main'
import Shows from '@/components/main/shows'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <main>
        <Main></Main>
        <Shows />
      </main>
    </Container>
  )
}

export default Home
