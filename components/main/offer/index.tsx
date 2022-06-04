import { LearnMore } from '@/components/header/index.styled'
import { Body, Eyebrow, Headline, OfferButton, OfferItem } from './index.styled'
import styles from '@/styles/Home.module.scss'

type OfferProps = {
  eyebrow: string
  headline: string
  body: string
  learnMore?: string
  buttonName: string
  buttonLink: string
}

const Offer = ({
  eyebrow,
  headline,
  body,
  learnMore,
  buttonName,
  buttonLink,
}: OfferProps) => {
  return (
    <OfferItem
      animateIn={styles.animate_slide_top}
      animateOut={styles.animate_slide_top_reverse}
      offset={0}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <Headline>{headline}</Headline>
      <Body>{body}</Body>
      {learnMore && <LearnMore href={learnMore}>Learn more</LearnMore>}
      <br />
      <br />
      <br />
      <OfferButton href={buttonLink}>{buttonName}</OfferButton>
    </OfferItem>
  )
}

export default Offer
