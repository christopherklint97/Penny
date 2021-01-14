import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'
import Image from 'next/image'

export default function Header() {
  const { isAuthenticated } = useAuth0()

  return (
    <nav className="p-3 bg-blue-700 text-gray-50">
      <div className="flex flex-row justify-between md:w-5/6 mx-auto">
        <a href="/" className="my-auto">
          <Image
            className="rounded-md"
            src="/../public/logo.png"
            alt=""
            width="30"
            height="30"
          />
        </a>
        {!isAuthenticated ? (
          <LoginButton />
        ) : (
          <span>
            <LogoutButton />
          </span>
        )}
      </div>
    </nav>
  )
}
