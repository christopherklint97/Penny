import React from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'

export interface MapProps {
  lat: number
  lng: number
}

function Map({ lat, lng }: MapProps) {
  const location = { lat, lng }

  return (
    <GoogleMap mapContainerClassName="mx-auto h-96" center={location} zoom={9}>
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={location} title="Destination" />
    </GoogleMap>
  )
}

export default React.memo(Map)
