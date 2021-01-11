import { Row, Col } from 'reactstrap'
import LoginButton from './LoginButton'

interface HeroWithButtonProps {
  title: string
  text: string
  btn: string
  link: string
}

export function HeroWithButton({ title, text }: HeroWithButtonProps) {
  return (
    <Row className="my-5">
      <Col className="text-center">
        <h1 className="yellowtail">{title}</h1>
        <p>{text}</p>
        <LoginButton />
      </Col>
    </Row>
  )
}
