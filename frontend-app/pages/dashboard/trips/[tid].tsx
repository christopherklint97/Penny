/* eslint-disable no-extra-semi */
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import NewPlaceForm from '../../../components/NewPlaceForm'
import { BACKEND_API, GOOGLE_MAPS_API_KEY } from '../../../config'
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api'
import { Libraries } from '@react-google-maps/api/dist/utils/make-load-script-url'

const libraries = ['places']

function Trip() {
  const router = useRouter()
  const { tid } = router.query
  const { getAccessTokenSilently, user } = useAuth0()
  const [trip, setTrip] = useState<any>({})
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: libraries as Libraries,
  })
  const [fetchTrip, setFetchTrip] = useState(false)

  useEffect(() => {
    ;(async () => {
      const token = await getAccessTokenSilently({
        audience: 'https://penny.api.christopherklint.com/',
        scope: 'read:current_user update:current_user_metadata',
      })
      const res = await axios.get(`${BACKEND_API}/trips/${tid}`, {
        params: { userId: user.sub.split('|')[1] },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(res.data)
      setTrip(res.data)
    })()
  }, [tid, fetchTrip])

  const addPlace = async (data: any) => {
    const token = await getAccessTokenSilently({
      audience: 'https://penny.api.christopherklint.com/',
      scope: 'read:current_user update:current_user_metadata',
    })
    await axios.post(
      `${BACKEND_API}/places`,
      {
        name: data.place,
        tripId: trip.id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    setFetchTrip(!fetchTrip)
  }

  if (loadError)
    return (
      <div className="text-center my-10">
        There was an unexpected error. Please try again later.
      </div>
    )

  if (isLoaded) {
    return (
      <div className="w-3/4 mx-auto md:pl-10">
        <h1 className="text-2xl text-center py-3 mt-5 font-bold">
          {trip.cityName}
        </h1>
        <Autocomplete>
          <NewPlaceForm onSubmit={addPlace} />
        </Autocomplete>
      </div>
    )
  }

  return <div className="text-center my-10">Loading...</div>
}

export default withAuthenticationRequired(Trip)
