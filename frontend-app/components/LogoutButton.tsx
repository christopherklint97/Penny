import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { FRONTEND_URL } from '../config'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <button
      className="bg-gray-100 hover:bg-gray-300 text-gray-900 px-3 py-1 rounded-md"
      onClick={() => logout({ returnTo: FRONTEND_URL })}
    >
      Logout
    </button>
  )
}

export default LogoutButton
