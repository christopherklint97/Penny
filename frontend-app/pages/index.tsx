import Head from 'next/head'
import Hero from '../components/Hero'
import InfoCard from '../components/InfoCard'
import LoginButton from '../components/LoginButton'
import { useAuth0 } from '@auth0/auth0-react'
import { useRouter } from 'next/router'

const Home = (): JSX.Element => {
  const { isAuthenticated } = useAuth0()
  const router = useRouter()

  if (isAuthenticated) router.push('/dashboard')

  return (
    <div className="pb-28 w-3/4 mx-auto">
      <Head>
        <title>Penny</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <Hero title="Say hello to Penny" text="Your very own travel planner.">
          <LoginButton />
        </Hero>
        <InfoCard
          img="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80"
          title="For the bucket-listers"
          body="Keep all of your cities gathered in one place."
        />
        <InfoCard
          img="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80"
          title="For the organizers"
          body="Take care of the hard part of sightseeing: planning."
        />
        <InfoCard
          img="https://images.unsplash.com/photo-1536010305525-f7aa0834e2c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          title="For the travelers"
          body="Get directions fast for the ultimate next stop."
        />
        <Hero title="Get started" text="Login to create your first trip!">
          <LoginButton />
        </Hero>
      </div>
    </div>
  )
}

export default Home
