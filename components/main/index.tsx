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
import { OfferWrapper } from './offer/index.styled'
import Offer from './offer'
import { offers, infos } from 'data/data'

const Main = () => {
  const { height }: any = useWindowDimensions()
  return (
    <>
      <ImageContainer />
      <InfoContainer height={height}>
        <div>
          <Title>
            All Apple Originals.
            <br />
            Only On Apple TV+.
          </Title>
          <StreamNow href="https://tv.apple.com/channel/tvs.sbd.4000?itscg=10000&itsct=atv-tv_op-nav_wch-ctr-210111">
            Stream Now
          </StreamNow>
          <WatchOn>Watch on the Apple TV app</WatchOn>
        </div>
      </InfoContainer>
      <InfoWrapper>
        {infos.map(({ name }, index) => {
          return (
            <AnimationOnScroll
              animateIn={styles.animate_slide_top}
              animateOut={styles.animate_slide_top_reverse}
              offset={0}
              key={index}
            >
              <Info>{name}</Info>
            </AnimationOnScroll>
          )
        })}
        <OfferWrapper>
          {offers.map((value, index) => {
            return (
              <Offer
                key={index}
                eyebrow={value.eyebrow}
                headline={value.heading}
                body={value.body}
                learnMore={value.learnMore}
                buttonName={value.button.name}
                buttonLink={value.button.link}
              />
            )
          })}
        </OfferWrapper>
      </InfoWrapper>
    </>
  )
}

export default Main
