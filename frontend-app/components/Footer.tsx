export default function Footer() {
  return (
    <nav className="p-3 h-16 italic underline absolute bottom-0 w-full bg-blue-700 text-gray-50">
      <div className="md:w-5/6 flex flex-row justify-end mx-auto">
        <a
          href="https://github.com/christopherklint97/Penny"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-300"
        >
          Made with love on Github
        </a>
      </div>
    </nav>
  )
}
