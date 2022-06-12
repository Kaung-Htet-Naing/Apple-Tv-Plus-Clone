import { Button, ButtonWrapper, CardImg, ImageCard, Wrapper } from './Card.styled'
import styles from '@/styles/Home.module.scss'
import Image from 'next/image'

type CardType = {
  name: string
  image: string
  showTime?: string
  logo: string
  genere: string
  description: string
  button: string
  streamLink: string
}

const Card = ({name, image, button, streamLink }: CardType) => {
  return (
    <Wrapper>
      <ImageCard
        animateIn={styles.animate_slide_top}
        animateOut={styles.animate_slide_top_reverse}
        offset={0}
      >
        <CardImg src={image} alt={name} />
        <ButtonWrapper>
          <Button href={streamLink}>{button}</Button>
        </ButtonWrapper>
      </ImageCard>
    </Wrapper>
  )
}

export default Card
