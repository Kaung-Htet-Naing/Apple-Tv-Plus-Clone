'use client'
import { Container } from '@/components/header/index.styled'
import Main from '@/components/main'
import Shows from '@/components/main/shows'
import Header from '@/components/header'

const Home = () => {
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
