import React, { Component , useState } from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Partners from '../components/Partners';
import Contactus from '../components/Contactus';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { hover } from "@testing-library/user-event/dist/hover";
import { FaBorderNone, FaFacebook ,FaTwitter , FaWhatsapp } from "react-icons/fa";
import NavBar from '../components/NavBar';



export const Home = () => {

  const year = new Date().getFullYear();
  const handleMouseEvent = (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "#FFFFFF";

  }
  const handleMouseEvent1 = (e) => {
    e.target.style.backgroundColor = "#EB5E28";
    e.target.style.color = "#252422";

  }

  return (

  <div>
    <NavBar style={{position: 'absolute' , top: "0%"}}></NavBar>


<div className="all">

    <Row>

        <Col>
            <img src={require("/home/al-salahat/Downloads/project/src/image/gym.jpg")}
            width={740} height={740} alt="gym" className="imggym"/> 
        </Col>

        <Col>
    <h1  className="text1">IMPOSSIBLE <hr className="line"></hr> </h1>
    <h2 className="text2">IS JUST A <br></br> WORD</h2>

    <Button className="bu1" size="lg" href="/Joinus"
    onMouseEnter={handleMouseEvent}
    onMouseLeave={handleMouseEvent1} 
    style={{color:"#252422", borderRadius:"22px" ,backgroundColor: "#EB5E28" ,boxShadow: "3px 3px 2px rgba(46, 46, 46, 0.62)"}}
    >Join us</Button> 
    
    <Button className="bus" size="lg" href="/Signin" 
    onMouseEnter={handleMouseEvent}
    onMouseLeave={handleMouseEvent1} 
    style={{ color:"#252422", borderRadius:"22px" ,backgroundColor: "#EB5E28" ,boxShadow: "3px 3px 2px rgba(46, 46, 46, 0.62)"}}
    >Sign in</Button> 

    <Col>
    <Button className="bu2" size="lg" variant="dark" href="#ab"
    style={{borderRadius:"22px" ,boxShadow: "3px 3px 2px rgba(46, 46, 46, 0.62)"}}
    >Learn More</Button> 
    </Col>

      </Col>
      </Row>

      <Row id="li1">
      <hr className="line1"></hr>
      <h1 className="text3">Services</h1>

      <Col>
      <h3 className="text4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies tellus et congue lobortis. Curabitur eleifend bibendum vulputate. Integer pellentesque sem at turpis rutrum, sed mattis ante finibus. Donec eu neque elit. In elementum enim ac velit euismod porta. Proin a arcu pretium, sagittis metus at, convallis ipsum. Sed facilisis pretium tellus. Morbi varius velit at imperdiet sagittis. Integer volutpat metus vel porta consectetur. Mauris consectetur blandit rhoncus. Sed accumsan ultricies facilisis. Nullam eget nisi efficitur, vulputate eros id, posuere lacus. Praesent orci sem, tempus ac tortor ut, dignissim malesuada turpis. Aliquam non purus nisl. Nam posuere vehicula pretium. Morbi tincidunt, dolor at feugiat fringilla, purus sapien venenatis turpis, eu sodales urna massa vitae nisi.</h3>

        </Col>


      <Col>
            <img src={require("/home/al-salahat/Downloads/project/src/image/smatgym.jpg")}
            width={700} height={600} alt="gym1" className="smartgym"/> 
        </Col>

      </Row>

      <Row id="li2">
      <hr className="lin11"></hr>
      <h1  className="tex1">Partners</h1>

      <div className="Carousel">
      <Partners></Partners>
      </div>
     
      </Row>

      <Row id="ab">
      <h1 className="tex3">About</h1>
      <hr className="lin1"></hr>

      <Col>
            <img src={require("/home/al-salahat/Downloads/project/src/image/software-developer.jpg")}
            width={700} height={600} alt="gym2" className="smartdev"/> 
        </Col>

      <Col>
      <h3 className="text5"> At IntelliGym Solutions, we are passionate about revolutionizing the fitness industry through our innovative mobile and web applications.
        We provide a comprehensive gym management system that caters to the needs of gyms, coaches, nutritionists, and trainees, making the entire fitness experience more flexible and easier for everyone involved.
        Our mission is to empower fitness professionals and enthusiasts by streamlining their daily operations and enhancing their training journey. 
        We understand the challenges faced by gyms and trainers in managing their schedules, client information, and nutrition plans efficiently.
        That's why we have developed a cutting-edge technology platform that simplifies and automates these processes, enabling them to focus more on what they do best – transforming lives through fitness.</h3>
        </Col>

      </Row>

    
        <div id= "re1" className='reblack'>
          <div className='textf'>Contact us </div>

          <div className='form'>
          <Contactus></Contactus>
          </div>

          <div className="footer">
          <footer  style={{textAlign:"center" , color:"#FFFFFF"}}>
              <span> 
              <a href="https://www.twitter.com">
                <FaTwitter className="icon" size={32} color= '#00acee' />
              </a>
              <a href="https://www.facebook.com">
                <FaFacebook className="icon" size={32} color='#3b5998' />
              </a>
              <a href="https://www.whatsapp.com">
                <FaWhatsapp className="icon" size={32} color='#25D366' />
              </a>

              </span>
              <h6>+962 777777777</h6>
              <h6>intelliGym@info.com</h6>
              <p>
                &copy; <span>{year}</span> Copyright All Rights Reserves
              </p>
          
              </footer>
            </div>    

        </div>   

        </div>
  </div>

  );
};

export default Home;
