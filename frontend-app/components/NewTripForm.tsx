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
        className="px-2 py-1 mb-2 mr-3 rounded-md shadow-md focus:ring-2 focus:outline-none w-60"
        name="city"
        ref={register({ required: true })}
        placeholder="London, Paris, Barcelona..."
      />
      {/* errors will return when field validation fails  */}
      {errors.city && (
        <p className="text-sm text-red-900">This field is required</p>
      )}

      <input
        className="px-2 py-1 mb-4 bg-green-100 rounded-md shadow-md cursor-pointer hover:bg-green-200"
        type="submit"
        value="Search"
      />
    </form>
  )
}
