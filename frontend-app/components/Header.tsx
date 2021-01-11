import styles from './Header.module.css'
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'

export function Header() {
  const { isAuthenticated } = useAuth0()

  return (
    <Navbar expand="md" className={`${styles.blueBg} + sticky-top`}>
      <NavbarBrand href="/" className={`${styles.whiteText} yellowtail`}>
        Penny
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          {!isAuthenticated ? (
            <LoginButton size="sm" />
          ) : (
            <LogoutButton size="sm" />
          )}
        </NavItem>
      </Nav>
    </Navbar>
  )
}
