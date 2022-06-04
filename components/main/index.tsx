import useWindowDimensions from '@/hooks/useWindowDimensions'
import {
  ImageContainer,
  Info,
  InfoContainer,
  InfoWrapper,
  StreamNow,
  Title,
  WatchOn,
} from './index.styled'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import styles from '@/styles/Home.module.scss'

const Main = () => {
  const { height, width }: any = useWindowDimensions()
  return (
    <>
      <ImageContainer height={height} />
      <InfoContainer height={height}>
        <div>
          <Title>
            All Apple Originals.
            <br />
            Only On Apple TV+
          </Title>
          <StreamNow>Stream Now</StreamNow>
          <WatchOn>Watch on the Apple TV app</WatchOn>
        </div>
      </InfoContainer>
      <InfoWrapper>
        <AnimationOnScroll
          animateIn={styles.animate_slide_top}
          animateOut={styles.animate_slide_top_reverse}
          offset={0}
        >
          <Info>New Apple Originals every month.</Info>
        </AnimationOnScroll>

        <AnimationOnScroll
          animateIn={styles.animate_slide_top}
          animateOut={styles.animate_slide_top_reverse}
          offset={0}
        >
          <Info>
            Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
            sticks.
          </Info>
        </AnimationOnScroll>

        <AnimationOnScroll
          animateIn={styles.animate_slide_top}
          animateOut={styles.animate_slide_top_reverse}
          offset={0}
        >
          <Info> Share Apple TV+ with your family.</Info>
        </AnimationOnScroll>
      </InfoWrapper>
    </>
  )
}

export default Main
