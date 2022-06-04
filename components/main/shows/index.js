import ShowCard from '@/components/layout/card/ShowCard'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import times from 'lodash/times'
import { shows } from 'data/data'
import Marquee, { Motion, randomIntFromInterval } from 'react-marquee-slider'
import Card from '@/components/layout/card/Card'
import { useState } from 'react'
import { Button, ButtonWrapper } from './index.styled'

const Shows = () => {
  const [firstMarqueeSpeed, setFirstMarqueeSpeed] = useState(30)
  const [secondMarqueeSpeed, setSecondMarqueeSpeed] = useState(40)

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <div style={{ backgroundColor: 'black', padding: '10px 0' }}>
      <Carousel
        swipeable={true}
        draggable={false}
        responsive={responsive}
        infinite={true}
        centerMode={true}
        autoPlay={false}
        customTransition="transform 1000ms ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        // partialVisible={true}
      >
        {shows.map((value, index) => {
          return (
            <ShowCard
              key={index}
              image={value.image}
              logo={value.logo}
              showTime={value.showTime}
              description={value.description}
              genere={value.genere}
              button={value.button}
              streamLink={value.streamLink}
            />
          )
        })}
      </Carousel>
      <div>
        <Marquee
          velocity={firstMarqueeSpeed}
          minScale={0.7}
          resetAfterTries={200}
        >
          {shows.map((value, index) => {
            return (
              <Card
                key={index}
                image={value.image}
                button={value.button}
                streamLink={value.streamLink}
              />
            )
          })}
        </Marquee>
      </div>
      <div>
        <Marquee
          velocity={secondMarqueeSpeed}
          minScale={0.7}
          resetAfterTries={200}
        >
          {shows.map((value, index) => {
            return (
              <Card
                key={index}
                image={value.image}
                button={value.button}
                streamLink={value.streamLink}
              />
            )
          })}
        </Marquee>
      </div>
      <ButtonWrapper>
        <Button href="https://tv.apple.com/channel/tvs.sbd.4000?itscg=10000&itsct=atv-0-tv_ovp-prc_full-apl-avl-200306">
          See full lineup
        </Button>
      </ButtonWrapper>
    </div>
  )
}

export default Shows
