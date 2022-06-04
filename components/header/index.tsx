import {
  Heading,
  HeadingWrapper,
  StreamButton,
  Title,
} from '@/components/header/index.styled'
import Head from 'next/head'

const Header = () => {
  return (
    <>
      <Head>
        <title>Apple TV+ - Apple</title>
        <meta
          name="description"
          content="Apple TV+ features critically acclaimed Apple Original shows and movies. Watch on the Apple TV app across devices."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeadingWrapper>
        <Heading>
          <Title>Apple TV+</Title>
          <StreamButton href="/tv">Stream now</StreamButton>
        </Heading>
      </HeadingWrapper>
    </>
  )
}

export default Header
