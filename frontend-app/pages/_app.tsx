import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import { Provider } from 'react-redux'
import store from '../redux/store'

const Layout = ({ children }) => <div className="layout">{children}</div>

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </Provider>
  )
}
