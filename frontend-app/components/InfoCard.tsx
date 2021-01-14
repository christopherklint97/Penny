import Image from 'next/image'

interface InfoCardProps {
  img: string
  title: string
  body: string
}

export default function InfoCard({ img, title, body }: InfoCardProps) {
  return (
    <div className="grid sm:grid-cols-2 shadow-md p-2 my-10 max-w-4xl mx-auto rounded-xl text-center justify-center align-middle">
      <Image
        className="p-1 mr-auto rounded-lg"
        src={img}
        alt=""
        width="500"
        height="300"
      />
      <div className="p-3 my-auto">
        <h2 className="text-lg mx-auto font-semibold mb-3">{title}</h2>
        <p className="mx-auto">{body}</p>
      </div>
    </div>
  )
}
