/* eslint-disable no-extra-semi */
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import NewPlaceForm from '../../../components/NewPlaceForm'
import {
  BACKEND_API,
  GOOGLE_MAPS_API_KEY,
  OPEN_WEATHER_API_KEY,
} from '../../../config'
import PlaceCard from '../../../components/PlaceCard'
import DeleteIcon from '../../../components/DeleteIcon'
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api'
import { Libraries } from '@react-google-maps/api/dist/utils/make-load-script-url'
import Link from 'next/link'

interface Weather {
  current: { temp: number }
}

const libraries = ['places']

/**
 * Displays the selected trip
 */
function Trip() {
  const router = useRouter()
  const { tid } = router.query
  const { getAccessTokenSilently, user } = useAuth0()
  const [trip, setTrip] = useState<any>({})
  const [places, setPlaces] = useState<any>([])
  const [weather, setWeather] = useState<Weather>({ current: { temp: 20 } })
  const [fetchTrip, setFetchTrip] = useState(false)
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: libraries as Libraries,
  })

  // get trip information including places and current weather
  useEffect(() => {
    ;(async () => {
      const token = await getAccessTokenSilently({
        audience: 'https://penny.api.christopherklint.com/',
        scope: 'read:current_user update:current_user_metadata',
      })
      const res1 = await axios.get(`${BACKEND_API}/trips/${tid}`, {
        params: { userId: user.sub.split('|')[1] },
        headers: { Authorization: `Bearer ${token}` },
      })
      setTrip(res1.data)
      setPlaces(res1.data.places)
      const res2 = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall`,
        {
          params: {
            lat: res1.data.lat,
            lon: res1.data.lng,
            appid: OPEN_WEATHER_API_KEY,
            units: 'metric',
          },
        }
      )
      setWeather(res2.data)
    })()
  }, [tid, fetchTrip])

  // Add a place to the trip
  const addPlace = async (data: any) => {
    const token = await getAccessTokenSilently({
      audience: 'https://penny.api.christopherklint.com/',
      scope: 'read:current_user update:current_user_metadata',
    })
    await axios.post(
      `${BACKEND_API}/places`,
      { name: data.place, tripId: trip.id },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    setFetchTrip(!fetchTrip)
  }

  // delete a place from the trip
  const deletePlace = async (event: any) => {
    const id = event.target.parentElement.id
    const token = await getAccessTokenSilently({
      audience: 'https://penny.api.christopherklint.com/',
      scope: 'read:current_user update:current_user_metadata',
    })
    await axios.delete(`${BACKEND_API}/places/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
      data: { userId: user.sub.split('|')[1] },
    })
    setFetchTrip(!fetchTrip)
  }

  // delete the trip from the user
  const deleteTrip = async (event: any) => {
    const id = event.target.id
    const token = await getAccessTokenSilently({
      audience: 'https://penny.api.christopherklint.com/',
      scope: 'read:current_user update:current_user_metadata',
    })
    await axios.delete(`${BACKEND_API}/trips/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
      data: { userId: user.sub.split('|')[1] },
    })
    router.push('/dashboard')
  }

  // loop through the places and display them in cards
  const placeItems = places.map((place: any) => {
    return (
      <PlaceCard
        img={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=${place.photo}&key=${GOOGLE_MAPS_API_KEY}`}
        title={place.name}
        key={place.id}
        id={place.id}
        handleDelete={deletePlace}
      />
    )
  })

  // if google maps does not load
  if (loadError)
    return (
      <p className="py-10 text-center">
        Something went wrong, please try again later.
      </p>
    )

  // if google maps is loaded
  if (isLoaded) {
    return (
      <div className="w-3/4 h-full mx-auto text-center md:pl-10 pb-36">
        <p className="inline-block mr-2 text-md">({weather.current.temp}°C)</p>
        <h1 className="inline-block py-3 mt-5 mr-1 text-2xl font-bold text-center">
          {trip.cityName}
        </h1>
        <DeleteIcon handleDelete={deleteTrip} id={tid as string} />{' '}
        <Autocomplete>
          <NewPlaceForm onSubmit={addPlace} />
        </Autocomplete>
        {places.length === 0 ? null : (
          <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-3">
            {placeItems}
          </div>
        )}
        <Link href="/dashboard">
          <button className="px-2 py-1 mt-4 mb-4 bg-blue-200 rounded-md shadow-md cursor-pointer hover:bg-blue-300">
            Dashboard
          </button>
        </Link>
      </div>
    )
  }

  // while google maps is loading
  return <p className="py-10 text-center">Loading...</p>
}

export default withAuthenticationRequired(Trip)
