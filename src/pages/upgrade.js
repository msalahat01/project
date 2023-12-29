import React from 'react'
import { Card, Col, Row } from 'antd';
import { Button} from 'antd';
import { ScheduleOutlined} from '@ant-design/icons';
import { Space } from 'antd';
import { useState,useEffect } from 'react';
import { doc,getDoc,updateDoc } from 'firebase/firestore';
import { db ,auth} from '../firebase';

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
  const [plan,setPlan]=useState("");
  const [duration,setDuration]=useState("")
  

  const handleSub1 = (e) => {
    e.preventDefault();
    console.log(plan);
    if (window.confirm('Are you sure you wish to change sub?')) {
    updateDoc(doc(db,"webUsers",auth.currentUser.uid),{plan:"Plan 1",plan_duration:"Unlimited"}).then((docRef)=>{const docId=docRef.id;})
    .catch(err => {
         console.log(err);
      });
      setPlan("Plan 1");
      setDuration("Unlimited");
    }
  };
  const handleSub2 = (e) => {
    e.preventDefault();
    console.log(plan);
    var date =new Date();
    date.setMonth(date.getMonth()+1);
    console.log(date.toLocaleDateString());
    if (window.confirm('Are you sure you wish to change sub?')) {

    updateDoc(doc(db,"webUsers",auth.currentUser.uid),{plan:"Plan 2",plan_duration:date.toLocaleDateString()}).then((docRef)=>{const docId=docRef.id;})
    
    .catch(err => {
         console.log(err);
      });
      setPlan("Plan 2");
      setDuration(date.toLocaleDateString());
    }
  };
  const handleSub3 = (e) => {
    e.preventDefault();
    console.log(plan);
    var date =new Date();
    date.setMonth(date.getMonth()+1);
    console.log(date.toLocaleDateString());
    if (window.confirm('Are you sure you wish to change sub?')) {

    updateDoc(doc(db,"webUsers",auth.currentUser.uid),{plan:"Plan 3",plan_duration:date.toLocaleDateString()}).then((docRef)=>{const docId=docRef.id;})
    
    .catch(err => {
         console.log(err);
      });
      setPlan("Plan 3");
      setDuration(date.toLocaleDateString());
    }

  };
  function getPlan(){
    auth.onAuthStateChanged((user) => {
      if (user) {
        getDoc(doc(db, "webUsers", user.uid)).then(docSnap => {
          if (docSnap.exists()) {

          setPlan(docSnap.data().plan);
          if(docSnap.data().plan_duration !== null)
            setDuration(docSnap.data().plan_duration);
          else 
            setDuration("Unlimited");
          } else {
            console.log("No such document!");
          }
        }) 
      } else {
        console.log("no user");
      }
    })
  }
  useEffect(() => {
    let ignore = false;
    
    if (!ignore)  getPlan()
    return () => { ignore = false; }
    },[]);
 
  
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

        <Button type="primary" style={{...ButtonStyle,}} onClick={handleSub1}>
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


        <Button type="primary" style={{...ButtonStyle}} onClick={handleSub2}>
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

        <Button type="primary" style={{...ButtonStyle}} onClick={handleSub3}>
        Subscribe
        </Button>

      </Card>
      </Col>
      </Row>
      </div>
</div>
)}

export default Upgrade;