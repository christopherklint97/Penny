import React from 'react'
import NewTripForm from '../../../components/NewTripForm'

export default function NewTrip() {
  return (
    <div className="w-3/4 mx-auto">
      <h1 className="text-2xl text-left py-3 mt-5 font-bold">Add a new trip</h1>
      <NewTripForm />
    </div>
  )
}
