import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartTable from './CartTable';
import LogIn from './LogIn';
import { Container, Row} from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';


function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history=useNavigate();

  return (
    <>
      <Button variant="outline-success" onClick={handleShow} className="me-2">
        {name}
      </Button>
  
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Container>  
        <Offcanvas.Header closeButton>
          <Offcanvas.Title > <Button variant="outline-success" onClick={()=>history(-1)}><ArrowLeft color="red" size={20} /></Button> Cart Details</Offcanvas.Title>
        </Offcanvas.Header>
        </Container> 
        <Offcanvas.Body>
          <CartTable />
        
            <Container>
             <Row>
            <LogIn />
            </Row> 
            </Container>
        

        </Offcanvas.Body> 
      </Offcanvas>

    </>
  );
}

function Example() {
  return (
    <>
      {['bottom'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={'Cart'} />
      ))}
    </>
  );
}

export default Example