import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container} from 'react-bootstrap';
import {CurrencyDollar} from 'react-bootstrap-icons';
import CartCounter from './CartCounter';

const CartTable=()=> {
    
  return (
    <Container>
    <Table Responsive >
      <thead >
        <tr>
          <th>Items</th>
          <th>Quantity</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mom's style Ajwani parantha</td>
          <td><CartCounter /></td>
          <td><CurrencyDollar size={15} color="black" /> 27</td>
        </tr>  
        <tr>
          <td colSpan={2}>Total</td>
          <td><CurrencyDollar size={15} color="black" /> 27</td>
        </tr>
        
      </tbody>
    </Table>
    </Container>  
  );
}

export default CartTable;