import {
  Container,
  Heading,
  HeadingWrapper,
  Info,
  InfomationWrapper,
  LearnMore,
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
      <InfomationWrapper>
        <Info>
          Friday Night Baseball, now streaming on Apple TV+. &nbsp;
          <LearnMore
            href={`https://tv.apple.com/room/edt.item.62327df1-6874-470e-98b2-a5bbeac509a2?itscg=10000&itsct=atv-tv_op-see_sch-tvhome-220323`}
          >
            Learn More
          </LearnMore>
        </Info>
      </InfomationWrapper>
    </>
  )
}

export default Header
