import { Row, Col } from 'reactstrap'

interface HeroWithButtonProps {
  title: string
  text: string
  btn: string
  link: string
}

export function HeroWithButton({
  title,
  text,
  btn,
  link,
}: HeroWithButtonProps) {
  return (
    <Row className="my-5">
      <Col className="text-center">
        <h1 className="yellowtail">{title}</h1>
        <p>{text}</p>
        <a className="btn btn-info" href={link}>
          {btn}
        </a>
      </Col>
    </Row>
  )
}
