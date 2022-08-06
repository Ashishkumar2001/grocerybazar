import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row,Col } from 'react-bootstrap';
import Cart from './Cart';
import LogIn from './LogIn';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default class Header extends React.Component{
    render(){
        const bgcolor={
            backgroundColor:"midnightblue",
        }
        const textColor={
            color:"white",
            textDecoration:"none"
        }
        const textColorHead={
          color:"white",
          textDecoration:"none",
          fontSize:"30px"
      }
        
        return (
   
     <>
    <Navbar style={bgcolor} expand="lg" >
      <Container fluid >

        <Link to="/" style={textColorHead}>Grocery Bazar</Link> {' '} <Link to="#cart"><Cart /></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            

          </Nav>
          <LogIn />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>       
     </> 
        );
    }  
}


