import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { FRONTEND_URL } from '../config'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <button
      className="px-3 py-1 text-gray-900 bg-gray-100 rounded-md hover:bg-gray-300"
      onClick={() => logout({ returnTo: FRONTEND_URL })}
    >
      Logout
    </button>
  )
}

export default LogoutButton
