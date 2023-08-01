import useWindowDimensions from '@/hooks/useWindowDimensions'
import {
  VideoContainer,
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
import Image from 'next/image'
import AppleLogo from '/public/image_2023_07_31T12_23_53_729Z.png'
import { motion } from 'framer-motion'
const Main = () => {
  const { height }: any = useWindowDimensions()
  return (
    <>
      <VideoContainer>
        <video autoPlay loop muted>
          <source
            src="https://www.apple.com/105/media/us/apple-tv-plus/2022/4114721e-12d2-4260-87c4-678589d5f804/anim/supercut/large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </VideoContainer>
      {height && (
        <InfoContainer height={height}>
          <div>
            <Title
              as={motion.p}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
              }}
            >
              All Apple Originals.
              <br />
              Only On Apple TV+.
            </Title>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1,
              }}
            >
              <StreamNow href="https://tv.apple.com/channel/tvs.sbd.4000?itscg=10000&itsct=atv-tv_op-nav_wch-ctr-210111">
                Stream Now
              </StreamNow>
              <WatchOn>
                <p>Watch on the </p>
                <Image
                  src={AppleLogo}
                  alt="apple-tv-icon"
                  width={40}
                  height={40}
                  style={{ padding: '2px' }}
                />
                <p>app</p>
              </WatchOn>
            </motion.div>
          </div>
        </InfoContainer>
      )}
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
