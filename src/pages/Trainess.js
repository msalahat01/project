import React from 'react'
import { useEffect, useState } from "react";
import { Card, Col, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space ,Button, List, Skeleton, message } from 'antd';
import { CaretLeftOutlined , CaretRightOutlined, LockOutlined  } from '@ant-design/icons';
import { db, auth } from "../firebase";
import {
  updateDoc,
  doc,
  arrayUnion,
  getDoc,
  arrayRemove,setDoc
} from "firebase/firestore";
import { Scrollbars } from "react-custom-scrollbars";
import {DollarOutlined , PhoneOutlined, MailOutlined, UserAddOutlined, InfoCircleOutlined  } from '@ant-design/icons';
import { Input } from "antd";





const Traniess = () => {

  
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
  

  const CardStyle = {
    width:300,
    borderRadius:"40px",
    height: "200px" ,
    fontFamily: "Arial, sans-serif",
    fontWeight:"bold",
  };

  const photoArray = [
    "https://i.ibb.co/HPfgzPF/user1.jpg",
    "https://i.ibb.co/x2fDwRf/user2.jpg",
    "https://i.ibb.co/GTZhw7N/user4.jpg",
    "https://i.ibb.co/rmMn8r6/user5.jpg",
    "https://i.ibb.co/tCQMbgy/nut1.jpg",
    "https://i.ibb.co/KskqSPH/nut2.jpg"
  ];

  const mappedObject = {};
photoArray.map((photo, index) => {
  mappedObject[index] = photo;
});

  const [initLoading, setInitLoading] = useState(true);
  const [list1, setList1] = useState([]);
  const [numberOfActive, setActive] = useState(0);
  const [ID,setID]=useState("");
  const [trainess, setTrainess] = useState("");
  const [uid, setUID] = useState("");
  const [Cost, setCost] = useState("");
  const [Maxnumber, setMaxnumber] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);


  const handleItemClick = (item , item1) => {
    // Update the selectedItem variable with the clicked item
    setSelectedItem(item);
    setSelectedImg(item1);

  };


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
            setInitLoading(false);
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
            setInitLoading(false);
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

  <Card  style={{width:"680px",height:"400px", border: "2px solid #D9D9D9", borderRadius:"40px", 
       background:"#EB5E28 " ,border: "2px solid #1ABC9C",  position: "relative", }}>
         
  
            <Card  style={{width:"600px",height:"100px", borderRadius:"40px", left:"5%", background:"#2C3E50 " ,border: "2px solid #2C3E50",position: "absolute"}}>
              <p style={{position: "absolute" ,left:"18%",top:"34%", fontSize:"20px", color:" #D9D9D9 "}}>{selectedItem}</p> 
                  
            <Avatar  style={{
             margin:"0px 0px 0px 0px",width:"77px",height:"77px", border: "1px solid #D9D9D9", borderRadius:"60px",
             background:"#D9D9D9 " ,border: "2px solid #D9D9D9", position:"absolute",top:"10px" ,left:"9px"}}
             src={ mappedObject[selectedImg]}
            >
        </Avatar> 

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

<div style={{position:"absolute", top:"35px" , left:"-10%"  }}>

  <Card
            size="small"
            style={{
              height: 650,
              width: 500,
              background: "#EB5E28 ",
              color: "white",
              border: "3px solid #FFFCF2",
              borderRadius: "40px",
              overscrollBehavior: "auto",
              overflowX: "hidden",
            }}
          >
                          <div style={{position:"absolute" , fontSize:"24px" , top:"3%" ,left: "40%" , color:"#2C3E50"}}>Trainess</div>


            <Scrollbars
              autoHide
              autoHideTimeout={1000}
              autoHideDuration={200}
              style={{ height: 555 , marginTop:"60px"}}
            >
              
              <List  style={{position:"absolute" ,top:"4%" }}
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                dataSource={list1}
                size={list1.length}
                renderItem={(item, index) => (
                  <Card
                  onClick={() => handleItemClick(list1[list1.length - 1 - index] , index)}
                    size="small"
                    style={{
                      cursor: 'pointer' ,
                      width: 450,
                      height :80 ,
                      margin: "0px 0px 9px 3px",
                      background: "#D9D9D9 ",
                      color: "black",
                      border: "3px solid #FFFCF2",
                      borderRadius: "40px",
                      wordBreak: "break-word",
                    }}
                  >
                    {item.loading ? (
                      <Skeleton avatar loading active />
                    ) : (
                      <List.Item.Meta
                        description={
                          <>
                            <div
                              style={{
                                fontSize :"20px",
                                display: "flex",
                                margin: "8px 0px 0px 80px" ,
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                             <div>{list1[list1.length - 1 - index]}</div>
                             <Avatar  style={{
                              margin:"0px 0px 0px 0px",width:"72px",height:"72px", border: "1px solid #D9D9D9", borderRadius:"40px",
                              background:"#D9D9D9 " ,border: "2px solid #D9D9D9", position:"absolute",top:"1px" ,left:"4px"}}
                              src={ mappedObject[index]}
                              >
                          </Avatar> 
                              <Space size="middle">
                       
                              </Space>
                            </div>
                          </>
                        }
                      />
                    )}
                  </Card>
                )}
              />
            </Scrollbars>
          </Card>
          </div>
 </div>   
 
 )}

export default Traniess
