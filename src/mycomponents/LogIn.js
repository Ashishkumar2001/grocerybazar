import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft,ArrowRight } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Container, Row} from 'react-bootstrap';
import LoginForm from './LoginForm';

function OffCanvasExampl({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history=useNavigate();

  return (
    <>
      <Button variant="success" size="sm" onClick={handleShow} className="me-2">
        {name} {' '}<ArrowRight color="black" size={20} />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Container>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><Button variant="outline-success" onClick={()=>history(-1)}><ArrowLeft color="red" size={20} /></Button> Login</Offcanvas.Title>
        </Offcanvas.Header>
        </Container>
        <Container>
        <Offcanvas.Body>
            <LoginForm />
        </Offcanvas.Body>
        </Container>
      </Offcanvas>
    </>
  );
}

function Exampl() {
  return (
    <>
      {['bottom'].map((placement, idx) => (
        <OffCanvasExampl key={idx} placement={placement} name={'Log In'} />
      ))}
    </>
  );
}

export default Exampl