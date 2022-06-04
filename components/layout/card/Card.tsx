import { Button, ButtonWrapper, ImageCard, Wrapper } from './Card.styled'
import styles from '@/styles/Home.module.scss'

type CardType = {
  image: string
  showTime?: string
  logo: string
  genere: string
  description: string
  button: string
  streamLink: string
}

const Card = ({ image, button, streamLink }: CardType) => {
  return (
    <Wrapper>
      <ImageCard
        animateIn={styles.animate_slide_top}
        animateOut={styles.animate_slide_top_reverse}
        offset={0}
        image={image}
      >
        <ButtonWrapper>
          <Button href={streamLink}>{button}</Button>
        </ButtonWrapper>
      </ImageCard>
    </Wrapper>
  )
}

export default Card
