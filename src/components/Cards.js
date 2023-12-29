import React from 'react'
import { Card, Col, Row } from 'antd';
import { Button} from 'antd';
import { Progress } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const ButtonStyle={
    color:"#FFFCF2",
    background:"#2C3E50",
    border: "2px solid #2C3E50 ", 
    borderRadius:"30px",
    border: "2px solid #2C3E50 ",
    width:"100px",
    height:"40px",
}   

const progressStyle={
    color:"#2C3E50",
    position: "absolute",
    

}

const Cards = () => {
  return (
    <div>
    <Row gutter={16}>
    <Col span={16} >
       <Card  style={{
        margin:"35px 0px 0px 300px",width:"690px",height:"360px", border: "2px solid #D9D9D9", borderRadius:"40px",
        background:"#1ABC9C " ,border: "2px solid #1ABC9C",  position: "relative", }}>
           
           <div style={{
              position: "absolute",
              top: "38%",
              left: "-200px",
              transform: "translateY(-50%)",
            }}>
              <Avatar size={120} icon={<UserOutlined />} />
            </div>
           <Card  style={{
             margin:"0px 0px 0px 0px",width:"300px",height:"260px", border: "2px solid #D9D9D9", borderRadius:"40px",
             background:"#D9D9D9 " ,border: "2px solid #1ABC9C",}}
             >
              
              
            <Card  style={{
             margin:"0px 0px 0px 280px",width:"350px",height:"100px", border: "2px solid #2C3E50", borderRadius:"60px",
             background:"#2C3E50 " ,border: "2px solid #2C3E50",}}>
              <p style={{margin:"0px 0px 0px 46px ", fontSize:"12px", color:" #D9D9D9 "}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p> 
                  
            <Card  style={{
             margin:"0px 0px 0px 0px",width:"77px",height:"77px", border: "1px solid #D9D9D9", borderRadius:"60px",
             background:"#D9D9D9 " ,border: "2px solid #D9D9D9", position:"absolute",top:"10px" ,left:"9px"}}>
        </Card> 

      </Card> 
         
   </Card>

        <Button type="primary" style={{...ButtonStyle,position: "absolute", left: "120px", top:"303px",color:" #D9D9D9 "}}>
            Send
        </Button> 
         
        <Progress type="circle" percent={80}  width={99}  strokeColor="#D9D9D9 " trailColor="#2C3E50 " strokeWidth={20}  format={() => '' } 
        style={{...progressStyle, left: "300px", top:"190px", width:"300px"}}/>

        <Progress type="circle" percent={60} width={99} strokeColor="#D9D9D9 " trailColor="#2C3E50 " strokeWidth={20} format={() => ''} 
            style={{...progressStyle, left: "420px", top:"190px"  ,width:"300px"}}/>
        
</Card>
       
        
  </Col>
</Row>
</div>
  )
}

export default Cards
