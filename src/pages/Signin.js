import React, { useState } from 'react';
import {  FaFacebook ,FaTwitter , FaWhatsapp } from "react-icons/fa";
import { CContainer } from '@coreui/react'
import { CRow } from '@coreui/react'
import NavBar from '../components/NavBar';
import { auth } from '../firebase';
import { Firestore } from 'firebase/firestore';
import { doc,addDoc, collection,setDoc,updateDoc,getDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { message } from "antd";



export const Signin = () => {

  const year = new Date().getFullYear();

  const page={
    backgroundColor: "#FFFCF2",
     height: "1200px",
      width: "1920px",
} 

const foot={
  background: "#252422" ,
   width: "100%",
    height: "220px" ,
     bottom: '0%' ,
     left : '0%'
} 

const box={
  background: "#696969",
   width: "32%",
    height: "50%" ,
     right : "34%" , 
     top : "19%" 
} 


  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
     
  const onLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/Overlayout")
          
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          message.error("Invalid email or password. Please try again.");
        });
     
  }




  return (
    
    <CContainer fluid style = {{...page , position: 'relative'}} >

              <CRow>
                <NavBar style={{position: 'absolute' , top: "0%" }}></NavBar>
              </CRow>


          <div style={{background: "#252422" , position: 'absolute' , borderRadius: "50%", 
          width: "40%",height: "60%" , right: "0%" , top:"9.5%"}}></div>
          <div style={{background: "#EB5E28" , position: 'absolute' , borderRadius: "50%", 
          width: "40%", height: "60%" , left: "0%" , top:"20%"}}></div>

           <div style={{...box ,boxShadow: "2px 2px 5px black" ,  position: 'absolute' , borderRadius: "50px" }}></div>
           <h1 style={{color: "#FFFFFF" , position: 'absolute' , width: "25%" , left: '37.5%' , top: '240px'}}>Login</h1>


           <form style={{color: "#FFFFFF",position: 'absolute' , top:"270px" , left: "38%" , width:"25%" , height: "25%"}}>
              <div className="mb-3">
                
                <label style={{position: 'absolute' , left: "0px" , top: "38%" }}  >Email address</label>
                <input style={{position: 'absolute' , left: "0px" , top: "50%" , height:"18%", fontSize: "80%" }}
                  type="email"
                  name="email"
                  onChange={(e)=>setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

             
              <div className="mb-3">
                <label  style={{position: 'absolute' , left: "0px" , top: "76%" }} >Password</label>
                <input style={{position: 'absolute' , left: "0px" , top: "88%" , height:"18%", fontSize: "80%" }}
                  value={password}
                  type="password"
                  name="password"
                  onChange={(e)=>setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

          <br></br>
          <br></br>
              <div className="d-grid">
                <button  style={{background: "#EB5E28" , borderRadius: "20px" , position: 'absolute' , left: "25%" , top: "160%" , width: "50%",  height: "18%"  }} 
                 type="submit" className="btn btn-primary" onClick={onLogin} >
                  Login
                </button>
              </div>
              <p  style={{position: 'absolute' , left: "53%" , top: "109%" , width: "60%" , fontSize:"80%" }} className="forgot-password text-right">
                <a  style={{color :"#00002F"}} href="/ForgotPassword">Forget password?</a>
              </p>
            </form>
            


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

export default Signin;
