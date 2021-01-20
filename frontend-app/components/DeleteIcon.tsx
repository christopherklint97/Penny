interface DeleteIconProps {
  handleDelete?: (event: any) => void
  id?: string
}

export default function DeleteIcon({ handleDelete, id }: DeleteIconProps) {
  return (
    <svg
      onClick={handleDelete}
      className="inline-block mb-1 text-right text-red-700 cursor-pointer fill-current text-opacity-70"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="black"
      width="25px"
      height="25px"
      id={id}
    >
      <path className="pointer-events-none" d="M0 0h24v24H0z" fill="none" />
      <path
        className="pointer-events-none"
        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
      />
    </svg>
  )
}
