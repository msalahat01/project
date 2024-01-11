import React from 'react'
import { Card, Col, Row } from 'antd';
import { Button} from 'antd';
import { Progress } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Input } from "antd";


const { TextArea } = Input;


const ButtonStyle={
    color:"#FFFCF2",
    background:"#2C3E50",
    border: "2px solid #2C3E50 ", 
    borderRadius:"30px",
    border: "2px solid #2C3E50 ",
    width:"200px",
    height:"40px",
}   



const Cards = () => {
  return (
    <div>


       <Card  style={{width:"680px",height:"400px", border: "2px solid #D9D9D9", borderRadius:"40px", 
       background:"#EB5E28 " ,border: "2px solid #1ABC9C",  position: "relative", }}>
         
  
            <Card  style={{width:"600px",height:"100px", borderRadius:"40px", left:"5%", background:"#2C3E50 " ,border: "2px solid #2C3E50",position: "absolute"}}>
              <p style={{position: "absolute" ,left:"18%",top:"8%", fontSize:"14px", color:" #D9D9D9 "}}>Info About Traine </p> 
                  
            <Card  style={{
             margin:"0px 0px 0px 0px",width:"77px",height:"77px", border: "1px solid #D9D9D9", borderRadius:"60px",
             background:"#D9D9D9 " ,border: "2px solid #D9D9D9", position:"absolute",top:"10px" ,left:"9px"}}>
        </Card> 

      </Card> 

      <TextArea
              rows={6}
              style={{
                position: "absolute",
                borderRadius: "40px",
                top:"37%",
                left:"5%",
                backgroundColor: "#D9D9D9",
                textIndent: "30px",
                fontSize: "16px",
                width:"600px"
              }}
              autoFocus={false}
            />
         

        <Button type="primary" style={{...ButtonStyle,position: "absolute", left: "17%", top:"84%",color:" #D9D9D9 "}}>
            Send
        </Button> 

        <Button type="primary" style={{...ButtonStyle,position: "absolute", left: "53%", top:"84%",color:" #D9D9D9 "}}>
            Send For All
        </Button> 
         
      
        
</Card>
        
</div>

  )
}

export default Cards
