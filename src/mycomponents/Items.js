import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Counter from './Counter';
import Navbar from 'react-bootstrap/Navbar';
import { Container,Row,Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Items extends React.Component{

  constructor(props){
    super(props)
    this.state={cout:0}
    this.handleClick=this.handleClick.bind(this)
    this.handleClickMinus=this.handleClickMinus.bind(this)
}
handleClick(){
    this.setState({cout: this.state.cout+1})
}
handleClickMinus(){
  if(this.state.cout>0){
  this.setState({cout: this.state.cout-1})
  }
  else{
      alert("you have not selected any number of this item")
  }
}

      render(){
   
        function alertbox(){
            alert("This item has been added to cart. Please open cart to buy this item");
        }
        const card2={
            height:170
        }
        const card3={
            height:145
        }
        const card4={
            height:117
        }
        return (
           <>
             <Container>

  {/*row 1 of product list*/}               
              <Row>
                 {/*row 1 col 1 of product list*/}   
                  <Col>
                        <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.1ctEKmadNzk4P_cS1FJ06AHaE8?pid=ImgDet&rs=1" />
                        <Card.Body>
                        <Card.Title>Mom's style Ajwani parantha</Card.Title>
                        <Card.Text>
                        Ajwani has such a Tantalising and flavour thast it can pep up a dish as a standalone spice.
                        <br />
                        
                        </Card.Text>
                        <Row>
                          <Col><Button variant="outline-success" onClick={this.handleClick} >Add</Button></Col>
                          <Col><Counter price={27}/></Col>
                        </Row>  
                        </Card.Body>
                        </Card>
                  </Col>

                  <Col>
                  {/*row 1 col 2 of product list*/}   
                        <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" style={card2} src="https://saudiagroup.com/pub/media/catalog/product/cache/2a0b860d8a20befcb7fa9964e6991af0/1/5/1579.jpg" />
                        <Card.Body>
                        <Card.Title>Red Label</Card.Title>
                        <Card.Text>
                        Choose from Assam Tea, Darjeeling Tea, Green Tea, White Tea, Moonlight Tea & Organic Tea.
                        <br />
                        
                        </Card.Text>
                        <Row>
                          <Col><Button variant="outline-success" onClick={this.handleClick}>Add</Button></Col>
                          <Col><Counter price={63}/></Col>
                        </Row>  
                        </Card.Body>
                        </Card>
                  </Col>

                  <Col>
                  {/*row 1 col 3 of product list*/}   
                        <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" style={card3} src="https://4.imimg.com/data4/WA/JI/MY-11564853/roasted-bajra-500x500.jpg" />
                        <Card.Body>
                        <Card.Title>Roasted cereal-Wheat jowar bajra</Card.Title>
                        <Card.Text>
                        Mix is made from roasting the Bajra grain in a roasting machine at a set temperature.
                        <br />
                        
                        </Card.Text>
                        <Row>
                          <Col><Button variant="outline-success" onClick={this.handleClick}>Add</Button></Col>
                          <Col><Counter price={41}/></Col>
                        </Row>  
                        </Card.Body>
                        </Card>
                  </Col>

                  <Col>
                  {/*row 1 col 4 of product list*/}   
                        <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" style={card4} src="https://rozaana.s3.ap-south-1.amazonaws.com/uploads/products/photos/tOi10oDTYFww4qY8sn9z6yChS6BHE7iMi7dgXQu4.jpg" />
                        <Card.Body>
                        <Card.Title>Sunflower Oil Pouch Fortune</Card.Title>
                        <Card.Text>
                        Fortune sunlite sunflower oil Samose, puri, crispy fried bhajjis, all your favourite delights will now be very, very light.
                        <br />
                        
                        </Card.Text>
                        <Row>
                          <Col><Button variant="outline-success" onClick={this.handleClick}>Add</Button></Col>
                          <Col><Counter price={10}/></Col>
                        </Row>  
                        </Card.Body>
                        </Card>
                  </Col>
               </Row>

               <br />
               <br />
{/*row 2 of product list*/}
               <Row>
                  <Col>
                  {/*row 2 col 1 of product list*/}   
                        <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.1ctEKmadNzk4P_cS1FJ06AHaE8?pid=ImgDet&rs=1" />
                        <Card.Body>
                        <Card.Title>Mom's style Ajwani parantha</Card.Title>
                        <Card.Text>
                        Ajwani has such a Tantalising and flavour thast it can pep up a dish as a standalone spice.
                        <br />
                        
                        </Card.Text>
                        <Row>
                          <Col><Button variant="outline-success" onClick={this.handleClick}>Add</Button></Col>
                          <Col><Counter price={60}/></Col>
                        </Row>  
                        </Card.Body>
                        </Card>
                  </Col>

                  <Col>
                  {/*row 2 col 2 of product list*/}  
                        <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" style={card2} src="https://saudiagroup.com/pub/media/catalog/product/cache/2a0b860d8a20befcb7fa9964e6991af0/1/5/1579.jpg" />
                        <Card.Body>
                        <Card.Title>Red Label</Card.Title>
                        <Card.Text>
                        Choose from Assam Tea, Darjeeling Tea, Green Tea, White Tea, Moonlight Tea & Organic Tea.
                        <br />
                        
                        </Card.Text>
                        <Row>
                          <Col><Button variant="outline-success" onClick={this.handleClick}>Add</Button></Col>
                          <Col><Counter price={33}/></Col>
                        </Row>  
                        </Card.Body>
                        </Card>
                  </Col>

                  <Col>
                  {/*row 2 col 3 of product list*/}  
                        <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" style={card3} src="https://4.imimg.com/data4/WA/JI/MY-11564853/roasted-bajra-500x500.jpg" />
                        <Card.Body>
                        <Card.Title>Roasted cereal-Wheat jowar bajra</Card.Title>
                        <Card.Text>
                        Mix is made from roasting the Bajra grain in a roasting machine at a set temperature.
                        <br />
                        
                        </Card.Text>
                        <Row>
                          <Col><Button variant="outline-success" onClick={this.handleClick}>Add</Button></Col>
                          <Col><Counter price={49}/></Col>
                        </Row>  
                        </Card.Body>
                        </Card>
                  </Col>

                  <Col>
                  {/*row 2 col 4 of product list*/}  
                        <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" style={card4} src="https://rozaana.s3.ap-south-1.amazonaws.com/uploads/products/photos/tOi10oDTYFww4qY8sn9z6yChS6BHE7iMi7dgXQu4.jpg" />
                        <Card.Body>
                        <Card.Title>Sunflower Oil Pouch Fortune</Card.Title>
                        <Card.Text>
                        Fortune sunlite sunflower oil Samose, puri, crispy fried bhajjis, all your favourite delights will now be very, very light.
                        <br />
                       
                        </Card.Text>
                        <Row>
                          <Col><Button variant="outline-success" onClick={this.handleClick}>Add</Button></Col>
                          <Col><Counter price={21}/></Col>
                        </Row>  
                        </Card.Body>
                        </Card>
                  </Col>
               </Row>
 
               <br />
               <br />
              
              <Row>
                  <Navbar expand="lg" fixed="bottom">
                  
                  <Button variant="secondary" size="sm" active fixed="top">
                    {this.state.cout} {' '} Item(s)   <Button size="sm" variant="primary" onClick={this.handleClickMinus}>Revome</Button>        
                  </Button>
                                  
                          
           
                  </Navbar>
              </Row>
            
               

               
              </Container> 

           </>
        );
        }
    }  
  
