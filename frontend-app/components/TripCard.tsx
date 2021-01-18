import Image from 'next/image'
import { useRouter } from 'next/router'

interface TripCardProps {
  img: string
  title: string
  id: string
}

export default function TripCard({ img, title, id }: TripCardProps) {
  const router = useRouter()
  const openTrip = () => router.push(`dashboard/trips/${id}`)

  return (
    <div
      id={id}
      onClick={openTrip}
      className="max-w-xs mx-auto transition duration-200 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:scale-110 shadow-md p-2 rounded-xl text-center justify-center align-middle"
    >
      <Image
        className="p-1 mr-auto rounded-lg object-cover"
        src={img}
        alt=""
        width="500"
        height="300"
        onClick={openTrip}
      />
      <h2 className="text-lg mx-auto font-semibold p-2" onClick={openTrip}>
        {title}
      </h2>
    </div>
  )
}
