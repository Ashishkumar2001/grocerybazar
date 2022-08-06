import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class Header extends React.Component{
    render(){
        return (
           <>
              <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/G/31/img22/Aug/TOPDEAL/100-deals-PC_T14.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/G/31/img22/Aug/BB/Blockbuster_deals_Full_basket__PC.jpg"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/G/31/img22/July/SF/Rakhi/T14_PC_copy.jpg"
          alt="Third slide"
        />
         
      </Carousel.Item>
    </Carousel>
           </>
        );
    }  
}