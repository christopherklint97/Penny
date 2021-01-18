/* eslint-disable no-extra-semi */
import React, { useEffect, useState } from 'react'
import NewTripForm from '../../../components/NewTripForm'
import Map from '../../../components/Map'
import { BACKEND_API, GOOGLE_MAPS_API_KEY } from '../../../config'
import { Autocomplete, LoadScript } from '@react-google-maps/api'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import { Libraries } from '@react-google-maps/api/dist/utils/make-load-script-url'
import axios from 'axios'
import DisplayResults from '../../../components/DisplayResults'
import { CityProps } from '../../../components/DisplayResults'
import SaveTripButton from '../../../components/SaveTripButton'

const libraries = ['places']

function NewTrip() {
  const [cities, setCities] = useState<CityProps[]>([])
  const [lat, setLat] = useState(51.509865)
  const [lng, setLng] = useState(-0.118092)
  const [chosenCity, setChosenCity] = useState<any>({
    geometry: { location: { lat, lng } },
  })
  const [isSelected, setIsSelected] = useState(false)
  const { getAccessTokenSilently } = useAuth0()

  const searchCities = async (data: any) => {
    const token = await getAccessTokenSilently({
      audience: 'https://penny.api.christopherklint.com/',
      scope: 'read:current_user update:current_user_metadata',
    })
    const res = await axios.get(`${BACKEND_API}/cities`, {
      params: { search: data.city },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setCities(res.data)
    setIsSelected(false)
  }

  const selectCity = async (event: any) => {
    const id = event.target.id
    const token = await getAccessTokenSilently({
      audience: 'https://penny.api.christopherklint.com/',
      scope: 'read:current_user update:current_user_metadata',
    })
    const res = await axios.get(`${BACKEND_API}/places/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setChosenCity(res.data.result)
    setIsSelected(true)
  }

  useEffect(() => {
    setLat(chosenCity.geometry.location.lat)
    setLng(chosenCity.geometry.location.lng)
  }, [chosenCity])

  return (
    <LoadScript
      googleMapsApiKey={GOOGLE_MAPS_API_KEY}
      libraries={libraries as Libraries}
    >
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 place-content-start h-full pb-20">
        <div className="w-3/4 mx-auto md:pl-10">
          <h1 className="text-2xl text-left py-3 mt-5 font-bold">
            Add a new trip
          </h1>
          <Autocomplete types={['(cities)']}>
            <NewTripForm onSubmit={searchCities} />
          </Autocomplete>
          {cities.length === 0 ? (
            <p className="text-xs text-gray-600 italic">
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
    </LoadScript>
  )
}

export default withAuthenticationRequired(NewTrip)
