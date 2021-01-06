import styles from './Header.module.css'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

export function Header() {
  return (
    <Navbar expand="md" className={`${styles.blueBg} + sticky-top`}>
      <NavbarBrand href="/" className={`${styles.whiteText} yellowtail`}>
        Penny
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/" className={styles.whiteText}>
            Login
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}
