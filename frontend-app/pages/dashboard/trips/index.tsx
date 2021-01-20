import { useRouter } from 'next/router'
import { useEffect } from 'react'

/**
 * Redirects to the dashboard since there is no
 * "/dashboard/trips" route
 */
export default function Redirect() {
  const router = useRouter()
  useEffect(() => {
    router.push('/dashboard')
  }, [])

  return <div className="my-10 text-center">Loading...</div>
}
