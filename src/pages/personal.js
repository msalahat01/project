import React, { useState ,useEffect} from 'react';
import { Form, Input, Button, Upload, message, Col , Row  , Avatar} from 'antd';
import {DollarOutlined , UserOutlined, LockOutlined, PhoneOutlined, MailOutlined, UserAddOutlined, InfoCircleOutlined  } from '@ant-design/icons';
import { db,auth,storage} from '../firebase';
import { getStorage, ref , uploadBytesResumable ,getDownloadURL} from "firebase/storage";
import { doc,getDoc,setDoc,updateDoc } from 'firebase/firestore';
import { Radio } from 'antd';


const Personal = () => {

    const [form] = Form.useForm();
    const [ pic,setPic]=useState("");
  
    const [editMode, setEditMode] = useState(false);
    const [info,setInfo]=useState({Name:"",Phone:"",Info:"",Cost:"",Location:"",openFriday:"",openDefault:"",trainees:[""],Type:"",ID:""});


    const [botton,setBotton]=useState(false);

  
  
    
    
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
           
           getDoc(doc(db, "Gymuser", user.uid)).then(docSnap => {
            if (docSnap.exists()) {
              let values={Name:docSnap.data().Name,Phone:docSnap.data().Phone,Info:docSnap.data().Info,Cost:docSnap.data().Cost,Location:docSnap.data().Location,
                openFriday:docSnap.data().openFriday,openDefault:docSnap.data().openDefault,trainees:[""],Type:docSnap.data().Type,ID:docSnap.data().ID}
              setInfo(values);
                            //setPic(docSnap.data().Img);
              form.setFieldValue("Img",docSnap.data().Img)
              form.setFieldValue("Name",docSnap.data().Name)
              form.setFieldValue("Location",docSnap.data().Location)
              form.setFieldValue("Phone",docSnap.data().Phone)
              form.setFieldValue("openDefault",docSnap.data().openDefault)
              form.setFieldValue("openFriday",docSnap.data().openFriday)
              form.setFieldValue("Cost",docSnap.data().Cost)
              form.setFieldValue("Info",docSnap.data().Info)
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
              let values={Name:docSnap.data().Name,Phone:docSnap.data().Phone,Info:docSnap.data().Info,Cost:docSnap.data().Cost,Location:docSnap.data().Location,
                openFriday:docSnap.data().openFriday,openDefault:docSnap.data().openDefault,trainees:[""],Type:docSnap.data().Type,ID:docSnap.data().ID}
              setInfo(values);
                            //setPic(docSnap.data().Img);
              form.setFieldValue("Img",docSnap.data().Img)
              form.setFieldValue("Name",docSnap.data().Name)
              form.setFieldValue("Location",docSnap.data().Location)
              form.setFieldValue("Phone",docSnap.data().Phone)
              form.setFieldValue("openDefault",docSnap.data().openDefault)
              form.setFieldValue("openFriday",docSnap.data().openFriday)
              form.setFieldValue("Cost",docSnap.data().Cost)
              form.setFieldValue("Info",docSnap.data().Info)
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
    
    const handleChange = (event)=>{
      event.preventDefault();
      const{name,value}=event.target;
      setInfo((prev)=>{
        return {...prev,[name]:value};
      });
    };
   
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };

    const handleEdit = () => {
      setEditMode(true);
    };
  
    const handleCancel = () => {
      setEditMode(false);
    };


    const [file, setFile] = useState(null);
    const [percent, setPercent] = useState(0);

    const handleFileChange = e => {
      if (e.target.files[0]) {
        setFile(e.target.files[0]);
      }
    }

    const handleUpload = async () => {
      if (!file) {
        console.error('No file selected');
      }
  
      // Create a reference to the storage location
      const storageRef = ref(storage , `uploads/${file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, file);

      
    uploadTask.on(
      "state_changed",
      (snapshot) => {
          const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          // update progress
          setPercent(percent);
      },
      (err) => console.log(err),
      () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              console.log(url);

              if (info.ID == 1)
              updateDoc(doc(db,"Gymuser",auth.currentUser.uid),{
                Img:url
              });

              else
              updateDoc(doc(db,"Coachuser",auth.currentUser.uid),{
                Img:url
              });

              setTimeout(function(){
                window.location.reload();
             }, 500);
          });
          }
      );


    };

  
    const handleSave = () => {
      form.validateFields().then((values) => {
        console.log(values);
        setEditMode(false);
        setBotton(false);
        if (info.ID == 1)
        updateDoc(doc(db,"Gymuser",auth.currentUser.uid),values).then((docRef)=>{const docId=docRef.id;console.log(docId);})
        else
        updateDoc(doc(db,"Coachuser",auth.currentUser.uid),values).then((docRef)=>{const docId=docRef.id;console.log(docId);})
        setTimeout(function(){
          window.location.reload();
       }, 500);
            }).catch((error) => {
        console.log(error);
      });


    };
  
  
 
  return (
    <Col span={8}>
    <Form
      form={form}
    >
    <Row>
      <br></br>
      <Form.Item  
      name="Img"
      rules={[{ required: false, message: 'Please enter your photo' }]}>
         <div style = {{margin: '0 0 0 460px' , backgroundColor:'#FFFCF2' , }}>

        <label for='input-file' style={{display:"block",borderRadius:"90%",width:"190px",padding:"5px",margin:"auto",cursor:"pointer", background: editMode?"#EB5E28":"#D1D1D1"}}>
        <Avatar id='profilePic' size={170} src={form.getFieldValue("Img")} text="Username" style={{backgroundColor:"#D9D9D9"}}/>

        </label>
        <button disabled={!editMode}  onClick={handleUpload} style={{display:"block",width:"190px",color:"#fff",padding:"10px",margin:"8px auto",borderRadius:"5px",cursor:"pointer", background: editMode?"#EB5E28":"#D9D9D9"}}>Upload Photo</button>
        <input disabled={!editMode} onChange={handleFileChange} id='input-file' style={{display:"none"}} type='file' accept='image/jpeg, image/jpg, image/png'></input>
      </div>
    
      
      </Form.Item> </Row>

      <Form.Item 
        name="Name"
        rules={[{ required: false, message: 'Please enter your name' }]}
      >
        <Input prefix={<UserOutlined />}
         placeholder="Name" 
         onChange={handleChange}
         value={info.Name}
         style={{width:600,margin:"0px 100px 0px 240px" ,
         borderRadius:"40px" , color :'black' , fii: "#D9D9D9",backgroundColor :"#D9D9D9"}}
         disabled={!editMode}  />
      </Form.Item> 

      <Form.Item 
        name="Location"
        rules={[{ required: false, message: 'Please enter your location' }]}
      >
        <Input prefix={<UserOutlined />}
         placeholder="Location" 
         onChange={handleChange}
         value={info.Location}
         style={{width:600,margin:"0px 100px 0px 240px" ,
         borderRadius:"40px" , color :'black' , fii: "#D9D9D9",backgroundColor :"#D9D9D9"}}
         disabled={!editMode}  />
      </Form.Item> 
      
      <Form.Item
        name="Phone"
        rules={[{ required: false, message: 'Please enter your phone' }]}
      >
        <Input prefix={<PhoneOutlined />}  placeholder="Phone"
         value={info.Phone}
         onChange={handleChange}

        style={{width:600,margin:"0px 100px 0px 240px" ,border: "3px solid #FFFCF2",borderRadius:"40px" , backgroundColor :"#D9D9D9" , color :'black'}} 
        disabled={!editMode} />
      </Form.Item>

      <Form.Item 
        name="openDefault"
        rules={[{ required: false, message: 'available time' }]}
      >
        <Input prefix={<LockOutlined />}
         placeholder="Open time eg. 10:00 AM - 12:00 PM" 
         onChange={handleChange}
         value={info.openDefault}
         style={{width:600,margin:"0px 0px 0px 240px" ,
         borderRadius:"40px" , color :'black' , fii: "#D9D9D9",backgroundColor :"#D9D9D9"}}
         disabled={!editMode}  />
      </Form.Item> 
      <Form.Item 
        name="openFriday"
        rules={[{ required: false, message: 'available time on friday' }]}
      >
        <Input prefix={<LockOutlined />}
         placeholder="Open Friday eg. 10:00 AM - 12:00 PM On Friday" 
         onChange={handleChange}
         value={info.openFriday}
         style={{width:600,margin:"0px 0px 0px 240px" ,
         borderRadius:"40px" , color :'black' , fii: "#D9D9D9",backgroundColor :"#D9D9D9"}}
         disabled={!editMode}  />
      </Form.Item> 

      <Form.Item
     name="Cost"

     rules={[{ required: false, message: 'Lesson cost ?' }]}
>
  <Input prefix={<DollarOutlined />}      placeholder="eg. 50$"  
  style={{width:600,margin:"0px 0px 0px 240px" ,border: "3px solid #FFFCF2",borderRadius:"40px" , backgroundColor :"#D9D9D9" , color :'black'}}
  disabled/>
</Form.Item>

<Form.Item
        name="Info"
        rules={[{ required: false, message: 'info' }]}
      >
        <Input.TextArea placeholder='Write your info' prefix={<InfoCircleOutlined />}
 style={{width:600,margin:"0px 100px 0px 240px" ,
 borderRadius:"40px" , color :'black' , fii: "#D9D9D9",backgroundColor :"#D9D9D9"}}
        autoSize={true}  
        size={50}  
        onChange={handleChange}
        value={info.Info}
        disabled={!editMode} />
      </Form.Item>  
    
      </Form> 

      {editMode ?
          <Row justify="end">
            <Button style={{backgroundColor: '#EB5E28', 
      color: 'white' , 
      borderRadius: '30px',
      cursor: 'pointer',
      width:'70px',
      height: '30px',
      margin: '0px 12px 0px 0px'
     }} 
      onClick={handleSave}>Save</Button>

          <Button style={{backgroundColor: '#EB5E28 ', 
      color: 'black' , 
      borderRadius: '30px',
      cursor: 'pointer',
      width:'70px',
      height: '30px',
      margin: '0px 40px 0px 0px'}} 
       onClick={handleCancel}>Cancel</Button>
          </Row> :

      <button 
         style={{  
      backgroundColor: '#EB5E28', 
      color: 'white' , 
      borderRadius: '30px',
      cursor: 'pointer',
      width:'70px',
      height: '30px',
      margin: '0 0 0 605px'
    }} onClick={handleEdit} >Edit</button> }

      </Col>

  )}


export default Personal;