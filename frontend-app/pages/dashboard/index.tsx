/* eslint-disable no-extra-semi */
import { useEffect } from 'react'
import Hero from '../../components/Hero'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import axios from 'axios'
import { BACKEND_API } from '../../config'
import AddTrip from '../../components/AddTrip'

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
          `${BACKEND_API}/users`,
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
    <div className="w-3/4 mx-auto">
      <Hero
        title={`Hi ${user.name.split(' ')[0]},`}
        text="Welcome to your dashboard!"
      />
      <AddTrip />
    </div>
  )
}

export default withAuthenticationRequired(Dashboard)
