import React from 'react'
import { ScheduleOutlined} from '@ant-design/icons';
import { Space } from 'antd';
import { useState,useEffect } from 'react';
import { doc,getDoc,setDoc,updateDoc } from 'firebase/firestore';
import { db ,auth} from '../firebase';
import { Form, Input, Button, Upload, message, Col , Row  , Card, Avatar} from 'antd';


const CardStyle = {
  width:280,
  textalign:"center",
  borderRadius:"40px",
  position:"absolute",
  height: "130px" ,
  fontFamily: "Arial, sans-serif",
  fontWeight:"bold",
  marginLeft:"80px",
  marginTop: "-60px",
  background:"#2C3E50", 
  border: "2px solid #D9D9D9",
}

const ButtonStyle={
  color:"#2C3E50",
  background:"#FFFCF2",
  border: "2px solid #2C3E50 ", 
  borderRadius:"30px",
  width:"100px",
  height:"40px",
  position: "absolute",
  left: "70px", 
  top:"340px",
  fontWeight:700,
}    
function Upgrade(){

  const [form] = Form.useForm();
  const [plan,setPlan]=useState("");
  const [duration,setDuration]=useState("")
  const [info,setInfo]=useState({Cost:"",ID:""});

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
         
         getDoc(doc(db, "Gymuser", user.uid)).then(docSnap => {
          if (docSnap.exists()) {
            let values={Cost:docSnap.data().Cost,ID:docSnap.data().ID}
            setInfo(values);
            form.setFieldValue("Cost",docSnap.data().Cost)
            form.setFieldValue("ID",docSnap.data().ID)
          } else {
            console.log("No such document!");
          }
        }) 
      } else {
        // User not logged in or has just logged out.
      }
    })

    auth.onAuthStateChanged((user) => {
      if (user) {
         
         getDoc(doc(db, "Coachuser", user.uid)).then(docSnap => {
          if (docSnap.exists()) {
            let values={Cost:docSnap.data().Cost,Location:docSnap.data().Location,ID:docSnap.data().ID}
            setInfo(values)
            form.setFieldValue("Cost",docSnap.data().Cost)
            form.setFieldValue("Id",docSnap.data().ID)
          } else {
            console.log("No such document!");
          }
        }) 
      } else {
        // User not logged in or has just logged out.
      }
    })
    
  },[]);




  const handleSave1 = (e) => {
    e.preventDefault();
    var date =new Date();
    date.setMonth(date.getMonth()+11);
      if (window.confirm('Are you sure you wish to change sub?'))
      if (info.ID == 1)
      updateDoc(doc(db,"Gymuser",auth.currentUser.uid),{
        Cost: 50
      }).then((docRef)=>{const docId=docRef.id;console.log(docId);})
      else
      updateDoc(doc(db,"Coachuser",auth.currentUser.uid),{
        Cost: 50
      }).then((docRef)=>{const docId=docRef.id;console.log(docId);})
      
    setPlan("Plan 1");
    setDuration(date.toLocaleDateString());
  
  };

 
  const handleSave2 = (e) => {
    e.preventDefault();
    var date =new Date();
    date.setMonth(date.getMonth()+11);
      if (window.confirm('Are you sure you wish to change sub?'))
      if (info.ID == 1)
      updateDoc(doc(db,"Gymuser",auth.currentUser.uid),{
        Cost: 75
      }).then((docRef)=>{const docId=docRef.id;console.log(docId);})
      else
      updateDoc(doc(db,"Coachuser",auth.currentUser.uid),{
        Cost: 75
      }).then((docRef)=>{const docId=docRef.id;console.log(docId);})
      
    setPlan("Plan 2");
    setDuration(date.toLocaleDateString());
  
  };

  const handleSave3 = (e) => {
    e.preventDefault();
    var date =new Date();
    date.setMonth(date.getMonth()+11);
      if (window.confirm('Are you sure you wish to change sub?'))
      if (info.ID == 1)
      updateDoc(doc(db,"Gymuser",auth.currentUser.uid),{
        Cost: 100
      }).then((docRef)=>{const docId=docRef.id;console.log(docId);})
      else
      updateDoc(doc(db,"Coachuser",auth.currentUser.uid),{
        Cost: 100
      }).then((docRef)=>{const docId=docRef.id;console.log(docId);})
      
    setPlan("Plan 3");
    setDuration(date.toLocaleDateString());
  
  };

  
  return (
    <div>
      <Space direction="vertical" size={2} >
      <Space wrap size={15} style={{margin:"50px 0px 0px -650px " }}>
       
      <ScheduleOutlined  style={{ fontSize: '50px', color: '#2C3E50'}}/>
      <h4 style={{ fontSize: '20px', color: '#2C3E50'}}>Your Plan: </h4>
      <Card  style={{...CardStyle}}>
         <h1 style={{fontSize:"24px" , color:"#FFFCF2",marginTop:"10px", fontWeight:"700"}}>{plan} </h1>
         <h4 style={{fontSize:"18px" , color:"#FFFCF2"}}>expire date: {duration}</h4>
         
      </Card>
      </Space>
</Space>    
    <div style={{ padding: "20px 0px 0px 0px " , marginTop: '100px',marginLeft:"160px"}}>
      <Row gutter={19}>
        <Col span={6} >

        <Card size="small" 
        style={{width:235,height:"400px",margin:"10px 0px 0px -40px" ,background:"#D9D9D9" , color:"white",border: "3px solid #D9D9D9",borderRadius:"39px"}}>
        <h1 style={{color:"#000000" ,fontfamily:"Arial",fontWeight:"700"}}>Plan 1</h1>
        <p style={{color: "#000000", marginbottom:"8px" ,fontfamily: "Arial",fontsize:10}}>
        Ideal for individual trainers or small gyms starting their fitness journey.
        Access to essential features such as gym management tools, client scheduling, and basic reporting.
        Limited customization options but provides a solid foundation for managing your fitness business effectively.
            </p>

        <Button type="primary" style={{...ButtonStyle,}} onClick={handleSave1}>
          Subscribe
        </Button>

      </Card>
      </Col>
      <Col span={6}>
      <Card size="small" 
        style={{width:235,height:"400px",margin:"10px 0px 0px -53px" ,background:"#EB5E28" , color:"white",borderRadius:"39px"}}>
        <h1 style={{color:"#2C3E50" ,fontfamily:"Arial",fontWeight:"700"}}>Plan 2 </h1>
        <p style={{color: "#2C3E50", marginbottom:"8px" ,fontfamily: "Arial",fontsize:10}}>
        Designed for medium-sized gyms, established trainers, and nutritionists seeking advanced functionalities.
        Includes all features of the Basic Subscription with additional benefits.
        Perfect for professionals aiming to provide comprehensive fitness services and personalized experiences.
            </p>


        <Button type="primary" style={{...ButtonStyle}} onClick={handleSave2}>
        Subscribe
        </Button>

      </Card>
    
      </Col>
      <Col span={7}>
      <Card size="small" 
        style={{width:235,height:"400px",margin:"10px 0px 0px -40px" ,background:"#2C3E50" , color:"white",border: "3px solid #2C3E50",borderRadius:"39px"}}>
        <h1 style={{color:"white" ,fontfamily:"Arial",fontWeight:"700"}}>Plan 3</h1>
        <p style={{color: "white", marginbottom:"8px" ,fontfamily: "Arial",fontsize:10}}>
        Tailor-made for large-scale gyms, fitness chains, and advanced trainers with extensive clientele.
        Unlocks the full suite of features and benefits, including all Pro Subscription offerings.
        Ideal for businesses that require scalability, enterprise-level management tools, and comprehensive support to drive success.
            </p>

        <Button type="primary" style={{...ButtonStyle}} onClick={handleSave3}>
        Subscribe
        </Button>

      </Card>
      </Col>
      </Row>
      </div>
</div>
)}

export default Upgrade;