import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <button
      className="bg-green-400 hover:bg-green-300 text-gray-900 px-3 py-1 rounded-md"
      onClick={() => loginWithRedirect()}
    >
      Login
    </button>
  )
}

export default LoginButton
