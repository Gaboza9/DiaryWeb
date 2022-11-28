import Container from 'react-bootstrap/Container';
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function title() {
  return (
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/home">Diary#</Navbar.Brand>
          <Nav className="mb-3">
            <Nav.Link href="/monthly">Monthly</Nav.Link>
            <Nav.Link href="/weekly">Weekly</Nav.Link>
            <Nav.Link href="/daily">Daily</Nav.Link>
            <Nav.Link href="/bookReview">BookReview</Nav.Link>
            <Nav.Link href="/movieReview">MovieReview</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default title;