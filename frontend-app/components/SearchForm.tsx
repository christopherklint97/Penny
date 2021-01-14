import React from 'react'
import { useForm } from 'react-hook-form'

export default function SearchForm() {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = (data: any) => console.log(data)

  console.log(watch('search')) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        className="px-2 py-1 shadow-md focus:ring-2 focus:outline-none rounded-md mr-3 mb-10"
        name="search"
        ref={register({ required: true })}
        placeholder="What would you like to visit?"
      />
      {/* errors will return when field validation fails  */}
      {errors.search && <p>This field is required</p>}

      <button
        className="px-2 py-1 bg-blue-200 rounded-md shadow-md hover:bg-blue-300"
        type="submit"
      >
        Search
      </button>
    </form>
  )
}
