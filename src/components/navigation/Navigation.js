import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Logo } from '../Images'
import './Navigation.css'

const Navigation = () => (
  <Navbar fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          <Logo />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>

    <Navbar.Collapse>
      <Nav pullRight>
        {/* About */}
        <NavDropdown eventKey={3} id="formId" title="About">
          <LinkContainer to="/about/faculty">
            <MenuItem eventKey={3.1}>Faculty</MenuItem>
          </LinkContainer>

          <LinkContainer to="/about/what-we-do">
            <MenuItem eventKey={3.2}>What We Do</MenuItem>
          </LinkContainer>
        </NavDropdown>

        {/* Classes */}
        <NavDropdown eventKey={3} id="formId" title="Classes">
          <LinkContainer to="/classes/schedule">
            <MenuItem eventKey={3.1}>Schedule</MenuItem>
          </LinkContainer>

          <LinkContainer to="/classes/description">
            <MenuItem eventKey={3.2}>Description</MenuItem>
          </LinkContainer>

          <LinkContainer to="/classes/movement-therapy">
            <MenuItem eventKey={3.3}>Movement Therapy</MenuItem>
          </LinkContainer>
          <LinkContainer to="/classes/summer-program">
            <MenuItem eventKey={3.4}>Summer Program</MenuItem>
          </LinkContainer>
        </NavDropdown>

        {/* Registration */}
        <NavDropdown eventKey={3} id="formId" title="Registration">
          <LinkContainer to="/registration/financial-aid">
            <MenuItem eventKey={3.1}>Financial Aid</MenuItem>
          </LinkContainer>
        </NavDropdown>

        {/* Performances */}
        <LinkContainer to="/performances">
          <NavItem className="nav-menu">Performances</NavItem>
        </LinkContainer>

        <LinkContainer to="/photos">
          <NavItem className="nav-menu">Photos</NavItem>
        </LinkContainer>

        <LinkContainer to="/contact">
          <NavItem className="nav-menu">Contact</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation
