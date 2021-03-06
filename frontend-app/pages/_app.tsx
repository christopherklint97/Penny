import '../styles/index.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Router from 'next/router'
import { Auth0Provider } from '@auth0/auth0-react'
import { REDIRECT_URI } from '../config'
import React from 'react'

const Layout = ({ children }) => (
  <div className="relative min-h-screen bg-gray-100 layout">{children}</div>
)

const onRedirectCallback = (appState: any) => {
  // Use Next.js's Router.replace method to replace the url
  Router.replace(appState?.returnTo || '/')
}

/**
 * Custom App component for Nextjs
 * @param Component child components
 * @param pageProps props for the child components
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    // auth0 provider for user authentication
    <Auth0Provider
      domain="dev-5p5e86yy.eu.auth0.com"
      clientId="3ENhHtttH2DcR01fUy4nItREwIjVfPP4"
      redirectUri={REDIRECT_URI}
      onRedirectCallback={onRedirectCallback}
      audience="https://penny.api.christopherklint.com/"
      scope="read:current_user update:current_user_metadata"
    >
      <Layout>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </Auth0Provider>
  )
}
