// import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

export default function NavBar() {
  return (
    <>
        <Navbar className='NavBar bg-info' bg="info" data-bs-theme="info">
        <Container>
          {/* <Navbar.Brand><Link to='/'>Home</Link></Navbar.Brand> */}
          <Nav className="me-auto">
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/movies'>Movies</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/favorites'>Favorite</NavLink>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
