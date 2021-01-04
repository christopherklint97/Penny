import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { useState } from 'react'

import type { AppProps } from 'next/app'

const Layout = ({ children }) => <div className="layout">{children}</div>

export default function App({ Component, pageProps }: AppProps) {
  const [collapsed, setCollapsed] = useState(true)

  const toggle = () => setCollapsed(!collapsed)

  return (
    <Layout>
      <Navbar expand="md" id="header">
        <NavbarBrand href="/" className="yellowtail">
          Penny
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Component {...pageProps} />
    </Layout>
  )
}
