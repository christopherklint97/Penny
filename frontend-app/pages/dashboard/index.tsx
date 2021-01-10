import { Col, Container, Row } from 'reactstrap'
import Auth from '../../components/Auth'
import { HeroNoButton } from '../../components/HeroNoButton'
// import axios from 'axios'

const Dashboard = () => {
  return (
    <Container>
      <Auth />
      <HeroNoButton
        title="Welcome to your dashboard"
        text="Here can you see your trips and groups all neatly organized."
      />
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

// export async function getStaticProps() {
//   const res = await axios(`https://.../data`)
//   const data = await res.json()

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

export default Dashboard
