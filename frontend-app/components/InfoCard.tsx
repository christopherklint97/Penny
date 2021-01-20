import Image from 'next/image'

interface InfoCardProps {
  img: string
  title: string
  body?: string
}

export default function InfoCard({ img, title, body = '' }: InfoCardProps) {
  return (
    <div className="grid justify-center max-w-4xl p-2 mx-auto my-10 text-center align-middle bg-white shadow-md sm:grid-cols-2 rounded-xl">
      <Image
        className="object-cover p-1 mr-auto rounded-lg"
        src={img}
        alt=""
        width="500"
        height="300"
      />
      <div className="p-3 my-auto">
        <h2 className="mx-auto mb-3 text-lg font-semibold">{title}</h2>
        <p className="mx-auto">{body}</p>
      </div>
    </div>
  )
}
