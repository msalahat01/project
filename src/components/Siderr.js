import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import { Card , Button } from 'antd';
import {db,auth} from "../firebase";
import { doc,addDoc, collection,setDoc,updateDoc,getDoc, and } from 'firebase/firestore';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import {  useNavigate } from 'react-router-dom';



function Siderr() {
  //var uuid;
  const [Info,setInfo]=useState('');
  const [Name,setName]=useState('');
  const [Img,setPhoto]=useState("");
   //uuid ="";
  auth.onAuthStateChanged((user) => {
    if (user) {
       
       getDoc(doc(db, "Coachuser", user.uid)).then(docSnap => {
        if (docSnap.exists()) {
          setInfo(docSnap.data().Info);
          setName(docSnap.data().Name);
          setPhoto(docSnap.data().Img);
          //console.log(user.uid);

          //console.log("Document data:", docSnap.data().info);
        } else {
          console.log("No such document!");
        }
      }) 
      // User logged in already or has just logged in.
      console.log(user.uid);
    } else {
      // User not logged in or has just logged out.
    }
  })

  auth.onAuthStateChanged((user) => {
    if (user) {
       
       getDoc(doc(db, "Gymuser", user.uid)).then(docSnap => {
        if (docSnap.exists()) {
          setInfo(docSnap.data().Info);
          setName(docSnap.data().Name);
          setPhoto(docSnap.data().Img);
          //console.log(user.uid);

          //console.log("Document data:", docSnap.data().info);
        } else {
          console.log("No such document!");
        }
      }) 
      // User logged in already or has just logged in.
      console.log(user.uid);
    } else {
      // User not logged in or has just logged out.
    }
  })


 
  const ButtonStyle={
    color:"#000000",
    background:"#D9D9D9",
    border: "2px solid #2C3E50 ", 
    borderRadius:"30px",
    width:"200px",
    height:"40px",
    fontWeight:700,
    left : 125 , 
    top : 790,
    position:"absolute"
  }
  
  const styles = {
    container: {
        position: "absolute" ,
        right: "0%",
        background:"#EB5E28",
        borderRadius : "40px 0px 0px 40px " ,
        display: 'flex',
        flexDirection: 'column',
        width:'440px' ,
        height:'940px'
    }
  }

  const navigate = useNavigate();

const onSubmit = async (e) => {
  e.preventDefault();
  signOut(auth);
  navigate("/Signin")
  
}

const onBack = async (e) => {
  e.preventDefault();
  navigate("/Overlayout")
  
}

  
return(
  <div style={styles.container}>
  <Space direction="vertical" size={4}>
    <Space wrap size={4}>
      <Avatar size={150} src={Img} text="Username" style={{backgroundColor:"#D9D9D9" , marginTop: "70px"}}/>
    </Space>
    <h2  style={{margin:" 8px" , lineHeight:"40px",  textAlign: 'center',color: "white"}} >{Name} </h2>
  </Space>
  <div>
        
        <Card size="xsmall" 
        style={{width:378, height:360,margin:"30px 0px 60px 35px" ,background:"rgba(37, 36, 34, 0.7200000286102295) " ,border: "3px solid #16A085",borderRadius:"20px"}}>
         <h1 style={{color:"white" ,fontfamily:"Arial",}}>INFO </h1>
        <p style={{color: "white", marginbottom:"8px" ,fontfamily: "Arial",fontsize: 14 ,textAlign:'left'}}>
        {Info}
            </p>
      </Card>
      </div>
      
      <Button onClick={onBack} type="primary" style={{...ButtonStyle }}>
      
      Back
        </Button>

        <Button onClick={onSubmit} type="primary" style={{...ButtonStyle , margin: '45px 0px 0px 0px'}}>
      
      Sign Out
        </Button>
</div>



);
}
export default Siderr;