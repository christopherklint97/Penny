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
        className="w-3/4 px-2 py-1 mb-2 mr-3 rounded-md shadow-md focus:ring-2 focus:outline-none"
        name="place"
        ref={register({ required: true })}
        placeholder="Start typing for place suggestions..."
      />
      {/* errors will return when field validation fails  */}
      {errors.city && (
        <p className="text-sm text-red-900">This field is required</p>
      )}

      <input
        className="px-2 py-1 mb-4 text-gray-900 bg-blue-300 rounded-md shadow-md cursor-pointer hover:bg-blue-400"
        type="submit"
        value="Add"
      />
    </form>
  )
}
