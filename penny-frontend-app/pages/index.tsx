import Head from 'next/head'
import {
  Button,
  Col,
  Container,
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap'

const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Penny</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container className="py-5">
      <Row className="my-4">
        <Col className="text-center">
          <h1 className="yellowtail">Say hello to Penny</h1>
          <p>Your very own travel assistant.</p>
          <Button color="info">Login</Button>
        </Col>
      </Row>
      <Row className="my-4">
        <Col className="text-center">
          <Card>
            <Row>
              <Col>
                <CardImg
                  left
                  width="20px"
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80"
                  alt=""
                />
              </Col>
              <Col>
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the content.
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Home
