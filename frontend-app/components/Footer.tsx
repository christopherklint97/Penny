export default function Footer() {
  return (
    <nav className="absolute inset-x-0 bottom-0 w-full p-3 italic text-gray-800 underline bg-blue-300 h-14">
      <div className="flex flex-row justify-end mx-auto md:w-5/6">
        <a
          href="https://github.com/christopherklint97/Penny"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-600"
        >
          Made with love on Github
        </a>
      </div>
    </nav>
  )
}
