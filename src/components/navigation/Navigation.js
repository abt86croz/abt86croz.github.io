import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Logo } from '../Images'
import HandbookDoc from '../../pdf/2018-2019-handbook-policies.pdf'
import './Navigation.css'

const handlePoliciesClick = () => {
  window.open(HandbookDoc, '_blank')
}

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
            <MenuItem eventKey={3.1}>Our Instructors</MenuItem>
          </LinkContainer>

          <LinkContainer to="/about/our-philosophy">
            <MenuItem eventKey={3.2}>Our Philosophy</MenuItem>
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
          <LinkContainer to="/classes/class-attire">
            <MenuItem eventKey={3.4}>Class Attire</MenuItem>
          </LinkContainer>
          <LinkContainer to="/classes/summer-program">
            <MenuItem eventKey={3.5}>Summer Program</MenuItem>
          </LinkContainer>
        </NavDropdown>

        {/* Registration */}
        <NavDropdown eventKey={3} id="formId" title="Registration">
          <LinkContainer to="/registration/financial-aid">
            <MenuItem eventKey={3.1}>Financial Aid</MenuItem>
          </LinkContainer>
          <LinkContainer to="/registration/tuition">
            <MenuItem eventKey={3.2}>Tuition</MenuItem>
          </LinkContainer>
          <MenuItem onClick={handlePoliciesClick} eventKey={3.3}>
            Policies
          </MenuItem>
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
