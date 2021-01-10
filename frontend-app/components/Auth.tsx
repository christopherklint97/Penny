import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/index'

export default function Auth() {
  // Fetch current state
  const loggedIn = useSelector((state: RootState) => state.login.loggedIn)
  const token = useSelector((state: RootState) => state.login.token)
  const router = useRouter()

  useEffect(() => {
    if (!(loggedIn && token)) {
      router.push('/')
    }
  }, [loggedIn, token])

  return <div id="auth-layer"></div>
}
