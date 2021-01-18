import React from 'react'
import { useForm } from 'react-hook-form'

interface NewTripFormProps {
  onSubmit: (data: any) => void
}

export default function NewTripForm({ onSubmit }: NewTripFormProps) {
  const { register, handleSubmit, errors } = useForm()

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="text-left" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label htmlFor="city" className="block pb-1">
        Name of city
      </label>
      <input
        className="px-2 py-1 shadow-md focus:ring-2 focus:outline-none rounded-md mr-3 mb-2 w-60"
        name="city"
        ref={register({ required: true })}
        placeholder="London, Paris, Barcelona..."
      />
      {/* errors will return when field validation fails  */}
      {errors.city && (
        <p className="text-red-900 text-sm">This field is required</p>
      )}

      <input
        className="px-2 py-1 bg-green-200 rounded-md shadow-md hover:bg-green-300 mb-4 cursor-pointer"
        type="submit"
        value="Search"
      />
    </form>
  )
}
