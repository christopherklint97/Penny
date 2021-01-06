import { Navbar, Nav, NavItem, NavLink } from 'reactstrap'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <Navbar expand="md" className={styles.blueBg}>
      <Nav
        className={`${styles.whiteText} ml-auto d-flex justify-content-center`}
        navbar
      >
        <NavItem>
          <NavLink
            href="https://github.com/christopherklint97/Penny"
            className={`${styles.whiteText} yellowtail`}
          >
            Made with love on Github
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}
