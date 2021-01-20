import Image from 'next/image'
import { useRouter } from 'next/router'
import DeleteIcon from './DeleteIcon'

interface PlaceCardProps {
  img: string
  title: string
  id: string
  next?: string
  handleDelete?: (event: any) => void
}

export default function PlaceCard({
  img,
  title,
  id,
  next = 'place',
  handleDelete,
}: PlaceCardProps) {
  const router = useRouter()
  const handleClick = () => {
    next === 'trip' ? router.push(`dashboard/trips/${id}`) : null
  }

  let cursor = ''
  next === 'trip' ? (cursor = 'cursor-pointer') : (cursor = '')

  return (
    <div
      id={id}
      onClick={handleClick}
      className={`max-w-xs mx-auto transition duration-200 ease-in-out ${cursor} transform hover:-translate-y-1 hover:scale-110 hover: shadow-md p-2 rounded-xl bg-white text-center justify-center align-middle`}
    >
      <Image
        className="object-cover p-1 mr-auto rounded-lg"
        src={img}
        alt=""
        width="500"
        height="300"
        onClick={handleClick}
      />
      <h2
        className="inline-block p-2 mx-auto text-lg font-semibold"
        onClick={handleClick}
      >
        {title}
      </h2>
      {next === 'trip' ? null : <DeleteIcon handleDelete={handleDelete} />}
    </div>
  )
}
