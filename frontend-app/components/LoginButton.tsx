import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from 'reactstrap'

const LoginButton = ({ size = '' }) => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Button color="info" size={size} onClick={() => loginWithRedirect()}>
      Login
    </Button>
  )
}

export default LoginButton
