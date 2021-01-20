import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <button
      className="px-3 py-1 text-gray-900 bg-white rounded-md hover:bg-gray-300"
      onClick={() => loginWithRedirect()}
    >
      Login
    </button>
  )
}

export default LoginButton
