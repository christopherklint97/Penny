import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from 'reactstrap'
import { FRONTEND_URL } from '../config'

const LogoutButton = ({ size = '' }) => {
  const { logout } = useAuth0()

  return (
    <Button
      color="secondary"
      size={size}
      onClick={() => logout({ returnTo: FRONTEND_URL })}
    >
      Logout
    </Button>
  )
}

export default LogoutButton
