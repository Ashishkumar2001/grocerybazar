import React from 'react';
import LogIn from './LogIn';
import { Github, HeartFill, Instagram, Linkedin } from 'react-bootstrap-icons';

export default class Footer extends React.Component{
    render(){
        const mystyle = {
            width:"100%",
            backgroundColor:"midnightblue   ",
            position:"absolute"
        }
        return (
           <>
           
              <footer className=" text-center text-white pt-5 pb-5" style={mystyle} >
              <LogIn />
              <br />
              <br />
                 <div className="container" >
                  Find me on different platforms 
                  <br />
                  <br />
                  <a href="https://www.instagram.com/trustmeiamyourcrush/"><Instagram color="white" size={20}  /></a> <a href="https://github.com/Ashishkumar2001"><Github color="white" size={20}  /></a> <a href="https://www.linkedin.com/in/ashish-kumar-47b7721b6/"><Linkedin color="white" size={20}  /></a> 
                  <br />
                  <br />
                  Made with <HeartFill color="red" size={20} /> by Ashish
                  </div>  
             
              </footer>
            </>
        );
    }  
}