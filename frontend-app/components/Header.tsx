import styles from './Header.module.css'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { BACKEND_API } from '../config'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/index'

export function Header() {
  const isLoggedIn = useSelector((state: RootState) => state.login.loggedIn)

  return (
    <Navbar expand="md" className={`${styles.blueBg} + sticky-top`}>
      <NavbarBrand href="/" className={`${styles.whiteText} yellowtail`}>
        Penny
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          {!isLoggedIn ? (
            <NavLink
              href={`${BACKEND_API}/auth/facebook`}
              className={styles.whiteText}
            >
              Login
            </NavLink>
          ) : (
            <NavLink href={`api/logout`} className={styles.whiteText}>
              Logout
            </NavLink>
          )}
        </NavItem>
      </Nav>
    </Navbar>
  )
}
