import { Row, Col } from 'reactstrap'

interface HeroNoButtonProps {
  title: string
  text: string
}

export function HeroNoButton({ title, text }: HeroNoButtonProps) {
  return (
    <Row className="my-5">
      <Col className="text-center">
        <h1 className="yellowtail">{title}</h1>
        <p>{text}</p>
      </Col>
    </Row>
  )
}
