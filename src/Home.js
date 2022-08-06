import React from 'react';
import Header from './mycomponents/Header';
import Carousel from './mycomponents/Carousel';
import Items from './mycomponents/Items';
import Footer from './mycomponents/Footer';
import Cart from './mycomponents/Cart';
import './App.css';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <>
   
      <Container fluid>
        <Row>
          <Col><Header /></Col>
        </Row>
        
        <Row>
          <Col><Carousel /></Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Container>
              <h4>Yours Kitchen</h4>
              <br />
              <Items />
            </Container>
          </Col>
        </Row>
        <Row>
         <Footer />
        </Row>   

      </Container>
          
    </>
  );
}

export default Home;
