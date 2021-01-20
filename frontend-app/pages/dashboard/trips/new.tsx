/* eslint-disable no-extra-semi */
import React, { useEffect, useState } from 'react'
import NewTripForm from '../../../components/NewTripForm'
import Map from '../../../components/Map'
import { BACKEND_API, GOOGLE_MAPS_API_KEY } from '../../../config'
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import axios from 'axios'
import DisplayResults from '../../../components/DisplayResults'
import { CityProps } from '../../../components/DisplayResults'
import SaveTripButton from '../../../components/SaveTripButton'
import { Libraries } from '@react-google-maps/api/dist/utils/make-load-script-url'

const libraries = ['places']

/**
 * Page for adding a new trip to the user, displaying
 * a Google Map and search results
 */
function NewTrip() {
  const [cities, setCities] = useState<CityProps[]>([])
  const [lat, setLat] = useState(51.509865)
  const [lng, setLng] = useState(-0.118092)
  const [chosenCity, setChosenCity] = useState<any>({
    geometry: { location: { lat, lng } },
  })
  const [isSelected, setIsSelected] = useState(false)
  const { getAccessTokenSilently } = useAuth0()
  // loader for the google maps api
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: libraries as Libraries,
  })

  // search cities based on user input
  const searchCities = async (data: any) => {
    const token = await getAccessTokenSilently({
      audience: 'https://penny.api.christopherklint.com/',
      scope: 'read:current_user update:current_user_metadata',
    })
    const res = await axios.get(`${BACKEND_API}/cities`, {
      params: { search: data.city },
      headers: { Authorization: `Bearer ${token}` },
    })
    setCities(res.data)
    setIsSelected(false)
  }

  // select city when clicked
  const selectCity = async (event: any) => {
    const id = event.target.id
    const token = await getAccessTokenSilently({
      audience: 'https://penny.api.christopherklint.com/',
      scope: 'read:current_user update:current_user_metadata',
    })
    const res = await axios.get(`${BACKEND_API}/places/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    setChosenCity(res.data.result)
    setIsSelected(true)
  }

  // changed the location of the map based on the selected city
  useEffect(() => {
    setLat(chosenCity.geometry.location.lat)
    setLng(chosenCity.geometry.location.lng)
  }, [chosenCity])

  // if google maps does not load
  if (loadError)
    return (
      <p className="py-10 text-center">
        Something went wrong, please try again later.
      </p>
    )

  // if google maps does load
  if (isLoaded) {
    return (
      <div className="grid h-full grid-flow-row grid-cols-1 pb-20 md:grid-cols-2 place-content-start">
        <div className="w-3/4 mx-auto md:pl-10">
          <h1 className="py-3 mt-5 text-2xl font-bold text-left">
            Add a new trip
          </h1>
          <Autocomplete types={['(cities)']}>
            <NewTripForm onSubmit={searchCities} />
          </Autocomplete>
          {cities.length === 0 ? (
            <p className="text-xs italic text-gray-600">
              Search for a city to see suggestions from Google
            </p>
          ) : (
            <DisplayResults
              cities={cities}
              handleClick={selectCity}
              select={chosenCity}
            />
          )}
          {isSelected ? <SaveTripButton city={chosenCity} /> : null}
        </div>
        <div className="w-3/4 pt-10 mx-auto">
          <Map lat={lat} lng={lng} />
        </div>
      </div>
    )
  }

  // while google maps is loading
  return <p className="py-10 text-center">Loading...</p>
}

export default withAuthenticationRequired(NewTrip)
