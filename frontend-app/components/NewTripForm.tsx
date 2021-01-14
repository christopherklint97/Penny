import React from 'react'
import { useForm } from 'react-hook-form'

export default function NewTripForm() {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = (data: any) => console.log(data)

  console.log(watch('search')) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="text-left" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label htmlFor="cityName">Name of city</label>
      <input
        className="px-2 py-1 shadow-md focus:ring-2 focus:outline-none rounded-md mr-3 mb-2"
        name="cityName"
        ref={register({ required: true })}
        placeholder="London, Paris, Barcelona..."
      />
      {/* errors will return when field validation fails  */}
      {errors.search && (
        <p className="text-red-900 text-sm">This field is required</p>
      )}

      <input
        className="px-2 py-1 bg-green-200 rounded-md shadow-md hover:bg-green-300"
        type="submit"
        value="Add"
      />
    </form>
  )
}
