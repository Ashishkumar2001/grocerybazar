import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ArrowLeft } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { Container} from 'react-bootstrap';
import CartCounter from './CartCounter';
import {CurrencyDollar} from 'react-bootstrap-icons';

  

function SmallExample() {
    const history=useNavigate();
    
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  return (

<>
    
    <Container>
    <br />
    <br />
    <Button variant="outline-success" onClick={()=>history(-1)}><ArrowLeft color="red" size={20} /></Button>
    <br />
     <h4> Checkout</h4>
    <br />
    <br />
    

    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th colSpan={4}>PICK UP</th>   
        </tr>
      </thead>

      <tbody>

        <tr>
          <td colSpan={4}>Test 
              <br />
              Abc road, xyz city, India
              <br />
              Order expires within 30 mins
              <br />
              <br />
              CART DETAILS
          </td>

        </tr>
        <tr>
          <td colSpan={2}>
              <br />
              Items
              <br />
              Mom's Style Ajawaini Parantha
          </td>
          <td>
              Qty
              <br />
              <CartCounter />
          </td>
          <td>Amount
              <br />
              <CurrencyDollar size={15} color="black" /> 27
          </td>
        </tr>

        <tr>
          <td colSpan={3}>Total</td>
          <td>27</td>
        </tr>
      </tbody>
    </Table>
     
     <br />
     <br />

     
        <div className="d-grid gap-2">
        <Button onClick={handleShow} variant="success" size="sm">
           Select Payment
        </Button>
        </div>


    </Container>



    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Make Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter your UPI ID</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ex: MobileNumber@ybl"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Place Order
          </Button>
        </Modal.Footer>
      </Modal>

    </>  
  );
}

export default SmallExample;