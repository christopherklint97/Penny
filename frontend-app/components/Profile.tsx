import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Image from 'next/image'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    isAuthenticated && (
      <span className="inline-flex space-x-3">
        <Image
          className="flex-1"
          src={user.picture}
          alt={user.name}
          width="25"
          height="25"
        />
        <h2 className="flex-1">{user.name}</h2>
      </span>
    )
  )
}

export default Profile
