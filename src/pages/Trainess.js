import React from 'react'
import { useEffect, useState } from "react";
import { Card, Col, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space ,Button, List, Skeleton, message } from 'antd';
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
import { Scrollbars } from "react-custom-scrollbars";




const Traniess = () => {

  const CardStyle = {
    width:300,
    borderRadius:"40px",
    height: "200px" ,
    fontFamily: "Arial, sans-serif",
    fontWeight:"bold",
  };


  const [initLoading, setInitLoading] = useState(true);
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
      <Cards/>
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
                    size="small"
                    style={{
                      width: 450,
                      height :80 ,
                      margin: "0px 0px 9px 3px",
                      background: "#D9D9D9 ",
                      color: "black",
                      border: "3px solid #FFFCF2",
                      borderRadius: "35px",
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
