import {
  Col,
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap'

interface InfoCardProps {
  img: string
  title: string
  body: string
}

export function InfoCard({ img, title, body }: InfoCardProps) {
  return (
    <Row className="my-5">
      <Col className="text-center">
        <Card className="shadow p-3 mb-5 bg-white rounded">
          <Row>
            <Col md="6">
              <CardImg left width="100%" src={img} alt="" />
            </Col>
            <Col className="d-flex align-items-center">
              <CardBody>
                <CardTitle tag="h4" className="yellowtail">
                  {title}
                </CardTitle>
                <CardText>{body}</CardText>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}
