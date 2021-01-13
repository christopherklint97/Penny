/* eslint-disable no-extra-semi */
import { useEffect } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeroNoButton } from '../../components/HeroNoButton'
import Profile from '../../components/Profile'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import axios from 'axios'
import { BACKEND_API } from '../../config'

const Dashboard = () => {
  const { getAccessTokenSilently, user } = useAuth0()

  useEffect(() => {
    ;(async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: 'https://penny.api.christopherklint.com/',
          scope: 'read:current_user update:current_user_metadata',
        })
        const res = await axios.post(
          `${BACKEND_API}/users/add`,
          { user },
          {
            headers: {
              // Add the Authorization header to the existing headers
              Authorization: `Bearer ${token}`,
            },
          }
        )
        localStorage.setItem('token', res.data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [getAccessTokenSilently])

  return (
    <Container>
      <HeroNoButton
        title={`Hi ${user.name.split(' ')[0]},`}
        text="Welcome to your dashboard!"
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
