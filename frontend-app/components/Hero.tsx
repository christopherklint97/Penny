interface HeroProps {
  title: string
  text: string
  children?: any
}

export default function Hero({ title, text, children }: HeroProps) {
  return (
    <div>
      <h1 className="text-2xl text-center py-3 mt-5 font-bold">{title}</h1>
      <p className="text-center pb-3">{text}</p>
      <div className="text-center">{children}</div>
    </div>
  )
}
