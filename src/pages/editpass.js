import React, { useState ,useEffect} from 'react';
import { Form, Input, Button, Upload, message, Col , Row  , Avatar} from 'antd';
import {DollarOutlined , UserOutlined, LockOutlined, PhoneOutlined, MailOutlined, UserAddOutlined, InfoCircleOutlined  } from '@ant-design/icons';
import { db,auth } from '../firebase';
import { doc,getDoc,setDoc,updateDoc }  from 'firebase/firestore';
import { updatePassword } from "firebase/auth";



  const Editpass = () => {
   
    const [form] = Form.useForm();
    const [Password, setPassword] = useState('');
    const [Repassword, setRepassword] = useState('');


    const handleUpdatePassword = async (e) => {
      e.preventDefault();

       if(Password == Repassword)
       {

        const user = auth.currentUser;
        updatePassword(user, Password).then(() => {
          setPassword("");
          setRepassword("");
          console.log("Succsfull")
          alert("Password Changed");
          setTimeout(function(){
            window.location.reload();
         }, 500);
        }).catch((error) => {
          console.log("error")
        }); 

       }

       else
       alert("Password not match");
       };
      
  
  return (


 <Form form={form} layout="inline" style={{position:"relative" ,width:"440px",height:"360px",left:"24%",top:"150px",background:"#EB5E28",opacity:"0.8",borderRadius:"40px"}}>
<div style={{position:'absolute',color:"black",fontSize:"30px",fontWeight:'bold',top:"4%",left:"23%"}}>Update Password</div>
<div style={{position:'absolute',color:"black",fontSize:"12px",top:"28%",fontWeight:'bold',left:"15.5%"}}>password</div>

      <Form.Item 
      style={{position:"absolute",top:"34%",left:"15%",width:"320px"}}
        name="newpassword"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="New Password"
          onChange={(e)=>setPassword(e.target.value)}
          value={Password}/>
      </Form.Item>
      
      <div style={{position:'absolute',color:"black",fontSize:"12px",fontWeight:'bold',top:"46.5%",left:"15.5%"}}>Confirm Password</div>

      <Form.Item
        style={{position:"absolute",top:"52%",left:"15%",width:"320px"}}
        name="rewritepassword"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-itm-icon" />}
          type="password"
          placeholder="Re-Write Password"
          onChange={(e)=>setRepassword(e.target.value)}
          value={Repassword}/>
      </Form.Item>

      <Form.Item shouldUpdate style={{position:"absolute",top:"70%",left:"18%",width:"300px"}}
 >
        {() => (
          <Button
            type='primary'
            onClick={handleUpdatePassword}
            htmlType="submit"

          >
            Change Password
          </Button>
        )}
      </Form.Item>
    </Form> 



)};

export default Editpass;