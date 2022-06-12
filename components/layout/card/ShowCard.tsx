import {
  Button,
  ButtonWrapper,
  Card,
  Description,
  Genere,
  InfoBottom,
  InfoBottomWrapper,
  Logo,
  ShowTime,
  TitleWrapper,
  Wrapper,
} from './ShowCard.styled'
import styles from '@/styles/Home.module.scss'

type CardType = {
  name:string,
  image: string
  showTime?: string
  logo: string
  genere: string
  description: string
  button: string
  streamLink: string
}

const ShowCard = ({
  name,
  image,
  showTime,
  logo,
  genere,
  description,
  button,
  streamLink,
}: CardType) => {
  return (
    <Wrapper>
      <Card
        animateIn={styles.animate_slide_top}
        animateOut={styles.animate_slide_top_reverse}
        offset={0}
        image={image}
      >
        <TitleWrapper id="title">
          <div>
            <ShowTime>{showTime}</ShowTime>
            <Logo src={logo} alt={name}/>
          </div>
        </TitleWrapper>

        <InfoBottomWrapper id="info">
          <InfoBottom>
            <div>
              <Genere>{genere}</Genere>
              <Description> {description}</Description>
            </div>
            <ButtonWrapper>
              <Button href={streamLink}>{button}</Button>
            </ButtonWrapper>
          </InfoBottom>
        </InfoBottomWrapper>
      </Card>
    </Wrapper>
  )
}

export default ShowCard
