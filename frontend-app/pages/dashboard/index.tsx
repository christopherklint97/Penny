/* eslint-disable no-extra-semi */
import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import axios from 'axios'
import { BACKEND_API, GOOGLE_MAPS_API_KEY } from '../../config'
import TripCard from '../../components/TripCard'
import AddNewButton from '../../components/AddNewButton'

const Dashboard = () => {
  const [trips, setTrips] = useState([])
  const { getAccessTokenSilently, user } = useAuth0()

  useEffect(() => {
    ;(async () => {
      const token = await getAccessTokenSilently({
        audience: 'https://penny.api.christopherklint.com/',
        scope: 'read:current_user update:current_user_metadata',
      })
      await axios.post(
        `${BACKEND_API}/users`,
        {
          user,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    })()
  }, [user])

  useEffect(() => {
    ;(async () => {
      const token = await getAccessTokenSilently({
        audience: 'https://penny.api.christopherklint.com/',
        scope: 'read:current_user update:current_user_metadata',
      })
      const res = await axios.get(`${BACKEND_API}/trips`, {
        params: { userId: user.sub.split('|')[1] },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(res.data)
      setTrips(res.data)
    })()
  }, [])

  const tripItems = trips.map((trip) => {
    return (
      <TripCard
        img={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=${trip.photo}&key=${GOOGLE_MAPS_API_KEY}`}
        title={trip.cityName}
        key={trip.id}
        id={trip.id}
      />
    )
  })

  return (
    <div className="w-3/4 mx-auto h-full pb-36">
      <Hero
        title={`Hi ${user.name.split(' ')[0]},`}
        text="Welcome to your dashboard!"
      />
      <AddNewButton link="/dashboard/trips/new" text="Add trip" />
      {trips.length === 0 ? null : (
        <div className="py-4 grid gap-4 grid-cols-1 md:grid-cols-2">
          {tripItems}
        </div>
      )}
    </div>
  )
}

export default React.memo(withAuthenticationRequired(Dashboard))
