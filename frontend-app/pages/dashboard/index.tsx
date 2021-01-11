import { useEffect } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeroNoButton } from '../../components/HeroNoButton'
import Profile from '../../components/Profile'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import axios from 'axios'
import { BACKEND_API } from '../../config'

const Dashboard = () => {
  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    ;(async () => {
      try {
        const accessToken = await getAccessTokenSilently()
        const res = await axios.get(BACKEND_API, {
          headers: {
            // Add the Authorization header to the existing headers
            Authorization: `Bearer ${accessToken}`,
          },
        })
        setState({
          ...state,
          data: await res.json(),
          error: null,
          loading: false,
        })
      } catch (error) {
        setState({
          ...state,
          error,
          loading: false,
        })
      }
    })()
  })

  return (
    <Container>
      <HeroNoButton
        title="Welcome to your dashboard"
        text="Here can you see your trips and groups all neatly organized."
      />
      <Row>
        <Profile />
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

export default withAuthenticationRequired(Dashboard)
