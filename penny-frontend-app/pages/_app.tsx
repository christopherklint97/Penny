import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const Layout = ({ children }) => <div className="layout">{children}</div>

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  )
}
