import React, { Component , useState } from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';
import { FaBorderNone, FaFacebook ,FaTwitter , FaWhatsapp } from "react-icons/fa";
import { CContainer } from '@coreui/react'
import { db,auth } from '../firebase';
import { Firestore } from 'firebase/firestore';
import { doc,addDoc, collection,setDoc,updateDoc,getDoc } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import { CRow } from '@coreui/react'
import NavBar from '../components/NavBar';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { message } from "antd";



export const Joinus2 = () => {

  const year = new Date().getFullYear();

  const page={
    backgroundColor: "#FFFCF2",
     height: "1250px",
      width: "1920px",
} 

const foot={
  background: "#252422" ,
   width: "100%",
    height: "240px" ,
     bottom: '0%' ,
     left : '0%'
} 

const box={
  background: "#696969",
   width: "32.5%",
    height: "64.6%" ,
     right : "34%" , 
     top : "10%" 
} 

const navigate = useNavigate();
const [email,setEmail]=useState('');
const [name,setName]=useState('');
const [phone,setPhone]=useState('');
const [password,setPassword]=useState('');  
const [ID]=useState('');  
const [cpassword,setCpassword]=useState('');
const [cheek,setCheek]=useState('');


const onSubmit = async (e) => {
  e.preventDefault();

if(password == cpassword)
{
if(name && email && phone && password && cpassword !== "" && cheek == true)  
{
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setDoc(doc(db,"Coachuser",userCredential.user.uid), {
            Phone:phone,
            Name:name,
            Email:email,
            ID:2 ,
            Location : 'Location',
            Cost:"0",
            Info : "default" ,
            openDefault:"openDefault",
            openFriday:"openFriday",
            Img : "https://firebasestorage.googleapis.com/v0/b/intigym-e8cb4.appspot.com/o/ben-sweet-2LowviVHZ-E-unsplash.jpg?alt=media&token=1cd58ce8-ea46-40f2-b556-49277d7c6f41" ,
            post: [] ,
            trainess: [],
            rating : []
            }).then(() => {
            setEmail("");
            setName("");
            setPassword("");
            setCpassword("");
            setCheek("");
            setPhone("");
             
        
            }).catch(err => {
               console.log(err);
            });
          console.log(user);
          navigate("/Signin")

        message.success("User registered successfully!");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
          message.error("Registration failed:email already in use");
        });
    } else {
      message.error("Please fill all fields");
    }
  } else {
    message.error("Password not match");
  }
};


  return (
    
    <CContainer fluid style = {{...page , position: 'relative'}} >
      

               <CRow>
                <NavBar style={{position: 'absolute' , top: "0%" }}></NavBar>
              </CRow>

          <div style={{background: "#252422" , position: 'absolute' , borderRadius: "50%", width: "50%",
          height: "68%" , right: "0%" , top:"9%"}}></div>
          <div style={{background: "#EB5E28" , position: 'absolute' , borderRadius: "50%", width: "50%",
          height: "68%" , left: "0%" , top:"9%"}}></div>

           <div style={{...box ,boxShadow: "2px 2px 5px black" ,  position: 'absolute' , borderRadius: "50px" }}></div>
           <h1 style={{color: "#FFFFFF" , position: 'absolute' , width: "25%" , left: '37.5%' , top: '140px'}}>Register For <br></br> Coach OR Nutrition</h1>


           <Form id='form1' style={{color:"#FFFFFF" , position: 'absolute' , left:'36.5%', top : '20%' }}>
                
              <Form.Group className="mb-3" controlId="formGridName">
                <Form.Label style={{marginLeft: "-475px"}} >Name</Form.Label>
                <Form.Control style={{ fontSize: "80%",width:"520px"}} value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter name Organization" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formGridEmail">
                <Form.Label style={{marginLeft: "-475px"}} >Email</Form.Label>
                <Form.Control style={{ fontSize: "80%",width:"520px"}}  value={email}  type="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Enter email" />
                    </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formGridPassword">
                    <Form.Label style={{marginRight: "440px"}} >Password</Form.Label>
                    <Form.Control style={{ fontSize: "80%",width:"520px"}}  value={password} type='password'  onChange={(e)=> setPassword(e.target.value)} placeholder="Enter Password" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridCPassword">
                    <Form.Label style={{marginRight: "350px"}} >Confirm Password</Form.Label>
                    <Form.Control style={{ fontSize: "80%",width:"520px"}} value={cpassword}  onChange={(e)=> setCpassword(e.target.value)} type='password' rows={3} placeholder="Repeat Password" />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formGridPhone">
                    <Form.Label style={{marginRight: "475px"}} >Phone</Form.Label>
                    <Form.Control style={{ fontSize: "80%",width:"520px"}}  value={phone}  onChange={(e)=> setPhone(e.target.value)} type='Phone' rows={3} placeholder="Enter Phone Number" />
                  </Form.Group>

                  <Form.Group   style={{ fontSize: "90%",width:"550px"}}className="mb-3" controlId="formBasicCheckbox"  >
                    <Form.Check    type="checkbox" id='cheekbox1' checked={cheek} onChange={(e)=> setCheek(e.target.checked)} label="I agree to the Terms of Service and Privacy Policy." />
                  </Form.Group>

                <Form.Group style={{textAlign:"center"}}>
                  <Button  id='submit1' type="submit" onClick={onSubmit} size='lg' style={{backgroundColor :"#EB5E28", color:"#FFFFFF" , textAlign:"center" ,
                   position: 'absolute' , top: "105%" , left:"40%"}}>
                    Submit
                  </Button>
                  </Form.Group>
                  
             </Form>
             <div>
          <div className="" style={{...foot , position: 'absolute'}}>
              <footer  style={{textAlign:"center" , color:"#FFFFFF" , width: "100%", position: 'absolute', top: '60px'}}>
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

         </CContainer> 
           

  );
};

export default Joinus2;
