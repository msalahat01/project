import React from 'react'
import { Col, Row } from 'antd';
import { Card } from 'antd';
import { Avatar, Button, List, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { Input } from 'antd';
import { Progress , Statistic } from 'antd';
import { updateDoc,doc, arrayUnion,getDoc } from 'firebase/firestore';
import { db ,auth} from '../firebase';

const { TextArea } = Input;

const count = 3;


function Over (){

    const [initLoading, setInitLoading] = useState(true);
    const [list, setList] = useState([]);
    const [numberOfActive, setActive] = useState(0);
    const [numberOfAll, setAll] = useState(0);
    const [uid,setUID]=useState("");
    const [post,setPost]=useState('');
    const [trainees, setTrainees] = useState([]);
    const [name,setName]=useState("");
  
  const handlePost = (e) => {
    e.preventDefault();

    console.log(post);

    if(post != ""){
    updateDoc(doc(db,"Coachuser",uid),{post:arrayUnion(post)})

    .catch(err => {
         
         updateDoc(doc(db,"Gymuser",uid),{post:arrayUnion(post)})
         console.log(err);

      });
    
      setPost("");
    }
    else
    alert("please write post")
  };
    
  
    useEffect(() => {
      
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUID(user.uid);
          getDoc(doc(db, "Gymuser", user.uid)).then(docSnap => {
            if (docSnap.exists()) {
              if(docSnap.data().trainees!=null){
                setActive(docSnap.data().trainees.length);
                
                setTrainees(docSnap.data().trainees);
              }
              if(docSnap.data().post!=null){
                setAll(docSnap.data().post.length);
                setName(docSnap.data().name);
                setList(docSnap.data().post);
                list.push(docSnap.data().post);
               
            }
            setInitLoading(false);
            // trainees.push(docSnap.data().trainees);
              
            } else {
              console.log("No such document!");
            }
          }) 
        } else {
          console.log("no user");
        }
      })

      auth.onAuthStateChanged((user) => {
        if (user) {
          setUID(user.uid);
          getDoc(doc(db, "Coachuser", user.uid)).then(docSnap => {
            if (docSnap.exists()) {
              if(docSnap.data().trainees!=null){
                setActive(docSnap.data().trainees.length);
                
                setTrainees(docSnap.data().trainees);
              }
              if(docSnap.data().post!=null){
                setAll(docSnap.data().post.length);
                setName(docSnap.data().name);
                setList(docSnap.data().post);
                list.push(docSnap.data().post);
               
            }
            setInitLoading(false);
            // trainees.push(docSnap.data().trainees);
              
            } else {
              console.log("No such document!");
            }
          }) 
        } else {
          console.log("no user");
        }
      })
  });


  const handleAnnouce = (e) => {
    e.preventDefault();
    console.log(post);    
    var x=0;
    while(x<trainees.length){
      console.log(trainees[x]);
      updateDoc(doc(db,"trainees",trainees[x]),{notification:arrayUnion(post+",from: "+name)}).then((docRef)=>{const docId=docRef.id;})
      x++;
    }
    updateDoc(doc(db,"webUsers",uid),{announcement:arrayUnion(post)}).then((docRef)=>{const docId=docRef.id;}) 
    .catch(err => {
         console.log(err);
      });
      setPost("");
      };
      

  return (
    <>

      <Row>

      <Col span={9}>
      <Card size="small" 
        style={{width:480,margin:"60px 10px 0px 60px" ,background:"#EB5E28 " , color:"white",border: "3px solid #FFFCF2",borderRadius:"40px"}}>

     <TextArea rows={6} value={post} onChange={(e)=> setPost(e.target.value)}
     style={{margin: '5px 0 0 0' , borderRadius:'40px' , backgroundColor: '#D9D9D9' , textIndent: '30px', fontSize:"18px"}} 
     autoFocus={false} />
    <br />
    <Button onClick={handlePost}
    style={{margin: '8px' , backgroundColor :'#2C3E50' , color : 'white' , borderRadius: '30px' , width: '120px'}}>
    Post </Button>
    <Button onClick={handleAnnouce}
    style={{margin: '8px' , backgroundColor :'#D9D9D9' , color : '#2C3E50' , borderRadius: '30px' , width: '120px'}}>
    Announce</Button>
      </Card>

      <Card size="small" 
        style={{maxHeight:420 ,width:480,margin:"10px 0px 0px 60px" ,background:"#EB5E28 " , color:"white",border: "3px solid #FFFCF2",borderRadius:"40px"}}>

<List  
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      dataSource={list}
      size= {list.length}
      renderItem={(item,index) => (

        <Card size="small" 
        style={{width:440,margin:"2px" ,background:"#D9D9D9 " , color:"black",border: "3px solid #FFFCF2",borderRadius:"80px"}}>
          <Skeleton avatar  loading={item.loading} active> 
            <List.Item.Meta
              
              description={list[list.length-1-index]}
              style={{display: "flex", alignItem: "center" }}
            />
          </Skeleton>
          </Card>

      )}
    />
    
      </Card>
      </Col>

      <Col span={9}>
       <Row>
      <Card bordered={false}
      style = {{backgroundColor:'#D9D9D9' , width : '220px' , height: '220px' , borderRadius : '30px' , margin:"70px 0px 0px 0px"}}>
        <Statistic
              title={
             <h3 style={{ color: '#2C3E50' }}>Active Trainees</h3>
              }
          value={numberOfActive}
          valueStyle={{ color: '#2C3E50' , fontSize:'50px' }} 
          style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center' }}
         />
      </Card>
      <Card bordered={false}
      style = {{backgroundColor:'#EB5E28' , width : '220px' , height: '220px' , borderRadius : '30px' , margin:"70px 0px 0px 60px"}}>
        <Statistic
              title={
             <h3 style={{ color: 'white' }}>Number Of Posts</h3>
              }
          value={numberOfAll}
          valueStyle={{ color: 'white' , fontSize:'50px' }} 
          style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center' }}
         />
      </Card>
      </Row>
      <Row>
      <Card bordered={false}
      style = {{backgroundColor:'#EB5E28 ', color : 'white' , width : '220px' , height: '220px' , borderRadius : '30px' , margin:"30px 0px 0px 0px"}}>
 <div style={{ position: "relative" }}>
 <Progress
  type="circle"
  percent={(numberOfActive/ 100)}
  width={90}
  strokeWidth={20}
  strokeColor={['#252422' ]}
  trailColor="#D9D9D9"
  format={() => ''}
  style={{ position: "absolute", left: "50%", transform: "translateX(-50%)"}}
/>
</div>
     <h2 
      style={{ fontSize : '15px', position: "absolute", top: "60%",left:"1%"}}>
        Active from 100 <br /> This show your active trainees above 100 
      </h2>
      </Card>

      <Card bordered={false}
      style = {{backgroundColor:'#D9D9D9 ' , width : '220px' , height: '220px' , borderRadius : '30px' , margin:"30px 0px 0px 60px"}}>
 <div style={{ position: "relative" }}>
 <Progress
  type="circle"
  percent={numberOfAll}
  width={90}
  strokeWidth={20}
  strokeColor={['#1ABC9C' ]}
  trailColor="white"
  format={() => ''}
  style={{ position: "absolute", left: "50%", transform: "translateX(-50%)"}}
/>
</div>
     <h2 
      style={{  fontSize : '15px', position: "absolute", top: "60%",left:"10spx"}}>
        Your stats to get a 100 posts <br />Let us do it
      </h2>
      </Card>
      </Row>
      </Col>
    </Row>
    </>

  )
};

export default Over ;