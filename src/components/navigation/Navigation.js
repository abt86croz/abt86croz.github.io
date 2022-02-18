/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { SocialIcon } from 'react-social-icons'
import { Logo } from '../Images'
import HandbookDoc from '../../pdf/handbook_policies.pdf'
import CovidProceduresDoc from '../../pdf/health-and-safety-plan.pdf'
import './Navigation.css'

const handlePoliciesClick = () => {
  window.open(HandbookDoc, '_blank')
}

const handleDancerPortalClick = () => {
  window.open('https://app.jackrabbitclass.com/jr3.0/ParentPortal/Login?orgID=534011', '_blank')
}

const handleRegistrationClick = () => {
  window.open('https://app.jackrabbitclass.com/regv2.asp?id=534011', '_blank')
}

const handleCovidProceduresClick = () => {
  window.open(CovidProceduresDoc, '_blank')
}

const Navigation = () => (
  <Navbar fluid collapseOnSelect>
    <Link to="/">
      <Logo />
    </Link>
    <SocialIcon url="https://www.instagram.com/albemarleballet/" />
    <SocialIcon url="https://www.facebook.com/AlbemarleBallet/" />
    <Navbar.Header>
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

          <LinkContainer to="/classes/level-placement">
            <MenuItem eventKey={3.2}>Level Placement</MenuItem>
          </LinkContainer>

          <LinkContainer to="/classes/description">
            <MenuItem eventKey={3.3}>Description</MenuItem>
          </LinkContainer>

          <LinkContainer to="/classes/movement-therapy">
            <MenuItem eventKey={3.4}>Movement Therapy</MenuItem>
          </LinkContainer>
          <LinkContainer to="/classes/class-attire">
            <MenuItem eventKey={3.5}>Class Attire</MenuItem>
          </LinkContainer>
          <LinkContainer to="/classes/summer-program">
            <MenuItem eventKey={3.6}>Summer Program</MenuItem>
          </LinkContainer>
          <MenuItem eventKey={3.7} onClick={handleCovidProceduresClick}>
            Health & Safety Plan
          </MenuItem>
        </NavDropdown>

        {/* Registration */}
        <NavDropdown eventKey={3} id="formId" title="Registration">
          <LinkContainer to="/registration/financial-aid">
            <MenuItem eventKey={3.1}>Financial Aid</MenuItem>
          </LinkContainer>
          <LinkContainer to="/registration/tuition">
            <MenuItem eventKey={3.2}>Tuition</MenuItem>
          </LinkContainer>
          <MenuItem eventKey={3.3} onClick={handlePoliciesClick}>
            Policies
          </MenuItem>
          <MenuItem eventKey={3.4} onClick={handleRegistrationClick}>
            Register
          </MenuItem>
        </NavDropdown>

        {/* Performances */}
        <LinkContainer to="/performances">
          <NavItem className="nav-menu">Performances</NavItem>
        </LinkContainer>

        {/* Photos */}
        <LinkContainer to="/photos">
          <NavItem className="nav-menu">Photos</NavItem>
        </LinkContainer>

        {/* Portal */}
        <NavItem className="nav-menu" onClick={handleDancerPortalClick}>
          Portal
        </NavItem>

        {/* Contact */}
        <LinkContainer to="/contact">
          <NavItem className="nav-menu">Contact</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation
