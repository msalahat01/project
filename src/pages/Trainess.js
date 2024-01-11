import React from 'react'
import { useEffect, useState } from "react";
import { Card, Col, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import { CaretLeftOutlined , CaretRightOutlined } from '@ant-design/icons';
import Cards from '../components/Cards';
import { db, auth } from "../firebase";
import {
  updateDoc,
  doc,
  arrayUnion,
  getDoc,
  arrayRemove,setDoc
} from "firebase/firestore";


const Traniess = () => {

  const CardStyle = {
    width:300,
    borderRadius:"40px",
    height: "200px" ,
    fontFamily: "Arial, sans-serif",
    fontWeight:"bold",
  };

  const [list1, setList1] = useState([]);
  const [numberOfActive, setActive] = useState(0);
  const [ID,setID]=useState("");
  const [trainess, setTrainess] = useState("");
  const [uid, setUID] = useState("");
  const [Cost, setCost] = useState("");
  const [Maxnumber, setMaxnumber] = useState("");


  


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUID(user.uid);

        if(ID == 1)
        
        getDoc(doc(db, "Gymuser", user.uid)).then((docSnap) => {

          if (docSnap.exists()) {

            if (docSnap.data().trainess != null) {
              setActive(docSnap.data().trainess.length);
              setTrainess(docSnap.data().trainess);
              setList1(docSnap.data().trainess);
              setMaxnumber(docSnap.data().Cost);
            }

          } else {
            console.log("No such document!");
          }
        })
      
        else
        
        getDoc(doc(db, "Coachuser", user.uid)).then((docSnap) => {

          if (docSnap.exists()) {
            if (docSnap.data().trainess != null) {
              setActive(docSnap.data().trainess.length);
              setTrainess(docSnap.data().trainess);
              setList1(docSnap.data().trainess);
              setMaxnumber(docSnap.data().Cost);

            }

          } else {
            setID(1);
            console.log("No such document!");
          }
        });
        
      } else {
        console.log("no user");
      }
    });
  });



  return (
    <div style={{position:"absolute", width:"1200px" , height:"720px"}}>

       <Card  style={{...CardStyle,background:"#D9D9D9", border: "2px solid #D9D9D9" ,position:"absolute",left:"40%",top:"5%"}}>
         <p style={{fontSize:"40px" , color:"#2C3E50"}}>{numberOfActive} </p>
         
         <p style={{fontSize:"16px" , color:"#2C3E50"}}> <br/>Trainess</p>
       </Card>

       <Card style={{...CardStyle, background:"#2C3E50" ,border: "2px solid #2C3E50" ,position:"absolute", left:"71%",top:"5%"}}>
       <p style={{fontSize:"40px" , color:"white"}}> {Maxnumber} </p>
   <br/>
       <p style={{fontSize:"16px" , color:"white"}}> Limit Trainess</p>
       </Card>



  <div style={{position:"absolute", top:"280px" , left:"40%"  }}>
      <Cards/>
  </div>
  
 </div>   
 
 )}

export default Traniess
