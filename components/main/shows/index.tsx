import ShowCard from '@/components/layout/card/ShowCard'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { shows } from 'data/data'

const Shows = () => {
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
    </div>
  )
}

export default Shows
