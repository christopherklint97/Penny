/* eslint-disable no-extra-semi */
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import { BACKEND_API } from '../config'
import { useRouter } from 'next/router'

interface SaveTripButtonProps {
  city: any
}

export default function SaveTripButton({ city }: SaveTripButtonProps) {
  const { user, getAccessTokenSilently } = useAuth0()
  const router = useRouter()

  const saveCity = async (city: any) => {
    const token = await getAccessTokenSilently({
      audience: 'https://penny.api.christopherklint.com/',
      scope: 'read:current_user update:current_user_metadata',
    })
    const res = await axios.post(
      `${BACKEND_API}/trips`,
      {
        city: {
          cityName: city.name,
          cityId: city.place_id,
          photo: city.photos[0].photo_reference,
          lat: city.geometry.location.lat,
          lng: city.geometry.location.lng,
        },
        user: user,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    console.log(res.data)
    router.push('/dashboard')
  }

  return (
    <button
      className="px-2 py-1 mt-2 mb-4 bg-blue-200 rounded-md shadow-md cursor-pointer hover:bg-blue-300"
      onClick={() => saveCity(city)}
    >
      Save trip
    </button>
  )
}
