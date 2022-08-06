import React from 'react';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Row,Col } from 'react-bootstrap';
import {CurrencyDollar} from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class CartCounter extends React.Component{
    constructor(props){
        super(props)
        this.state={count:1}
        this.handleClick=this.handleClick.bind(this)
        this.handleClickMinus=this.handleClickMinus.bind(this)
    }
    handleClick(){
        this.setState({count: this.state.count+1})
    }
    handleClickMinus(){
        if(this.state.count>0){
        this.setState({count: this.state.count-1})
        }
        else{
            alert("you have not selected any number of this item")
        }
    }
    render(){
        return(
           <Row>
              <Col>
                <ButtonGroup aria-label="Basic example">
                <Button variant="outline-danger" onClick={this.handleClickMinus}>-</Button>
                <Button variant="outline-primary">{this.state.count}</Button>
                <Button variant="outline-success" onClick={this.handleClick}>+</Button>
                </ButtonGroup>
              </Col>
            </Row>
        );
    }
}
