import Link from 'next/link'

export default function AddTrip() {
  return (
    <Link href="/dashboard/trips/new">
      <div className="flex flex-row justify-center w-24 mx-auto shadow-lg rounded-md p-1 hover:bg-green-100 cursor-pointer">
        <svg
          className="fill-current text-green-800 my-auto mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          width="18px"
          height="18px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
        <h2 className="my-auto">Add trip</h2>
      </div>
    </Link>
  )
}
