import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container} from 'react-bootstrap';
import {
   
  Link
} from "react-router-dom";


function FormTextExample() {
  const textDec={
    textDecoration:'none',
    color:'white'
  }
  return (
    <>
    <Container>
      <Form.Control
        type="number"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="Enter your phone number"
      />
      <br />
        
        <Link to='/submit' style={textDec}>
        <div className="d-grid gap-2">
        <Button variant="success" size="sm">
           Submit
        </Button>
        </div>
        </Link> 
        
        
        
           <center> <Link to=''>Will to it later</Link></center>
        
      </Container>  
    </>
  );
}

export default FormTextExample;