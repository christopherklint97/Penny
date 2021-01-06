import Head from 'next/head'
import { Container } from 'reactstrap'
import { Hero } from '../components/Hero'
import { InfoCard } from '../components/InfoCard'

const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Penny</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container className="py-5">
      <Hero
        title="Say hello to Penny"
        text="Your very own travel assistant."
        btn="Login"
      />
      <InfoCard
        img="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80"
        title="Up, up, and away!"
        body="Keep all of your flights gathered in one place."
      />
      <InfoCard
        img="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80"
        title="For vacations and staycations"
        body="All of your reservations under the same roof."
      />
      <InfoCard
        img="https://images.unsplash.com/photo-1536010305525-f7aa0834e2c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        title="All together now"
        body="Add your fellow travel companions so everyone knows about the next stop."
      />
      <Hero
        title="Get started"
        text="Login to create your first trip!"
        btn="Login"
      />
    </Container>
  </div>
)

export default Home
