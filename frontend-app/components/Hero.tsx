interface HeroProps {
  title: string
  text: string
  children?: any
}

export default function Hero({ title, text, children }: HeroProps) {
  return (
    <div>
      <h1 className="py-3 mt-5 text-2xl font-bold text-center">{title}</h1>
      <p className="pb-3 text-center">{text}</p>
      <div className="text-center">{children}</div>
    </div>
  )
}
