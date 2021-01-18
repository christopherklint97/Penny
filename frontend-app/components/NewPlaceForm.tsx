import React from 'react'
import { useForm } from 'react-hook-form'

interface NewPlaceFormProps {
  onSubmit: (data: any) => void
}

export default function NewPlaceForm({ onSubmit }: NewPlaceFormProps) {
  const { register, handleSubmit, errors } = useForm()

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="px-2 py-1 shadow-md focus:ring-2 focus:outline-none rounded-md mr-3 mb-2 w-3/4"
        name="place"
        ref={register({ required: true })}
        placeholder="Start typing for place suggestions..."
      />
      {/* errors will return when field validation fails  */}
      {errors.city && (
        <p className="text-red-900 text-sm">This field is required</p>
      )}

      <input
        className="px-2 py-1 bg-green-200 rounded-md shadow-md hover:bg-green-300 mb-4 cursor-pointer"
        type="submit"
        value="Add"
      />
    </form>
  )
}
