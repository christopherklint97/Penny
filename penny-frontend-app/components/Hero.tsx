import { Row, Col, Button } from 'reactstrap'

interface HeroProps {
  title: string
  text: string
  btn: string
}

export function Hero({ title, text, btn }: HeroProps) {
  return (
    <Row className="my-5">
      <Col className="text-center">
        <h1 className="yellowtail">{title}</h1>
        <p>{text}</p>
        <Button color="info">{btn}</Button>
      </Col>
    </Row>
  )
}
