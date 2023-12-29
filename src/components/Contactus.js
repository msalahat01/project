import React, { Component , useState } from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { db,auth } from '../firebase';
import { Firestore } from 'firebase/firestore';
import { doc,addDoc, collection,setDoc,updateDoc,getDoc } from 'firebase/firestore';


function Contactus () {
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [subject,setSubject]=useState('');
    const [message,setMessage]=useState('');  

    
    const handleSubmit = (e) => {
      e.preventDefault();
      
      setDoc(doc(db,"contact",""+Math.random()*100000), {
        Subject:subject,
        Name:name,
        Email:email,
        Message:message
     }).then(() => {
        setEmail("");
        setName("");
        setMessage("");
        setSubject("");
          
        }).catch(err => {
           console.log(err);
        });
    };

  return (
    
    <Form id='form' style={{color:"#FFFFFF"}}>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label className='n2'>Your Name</Form.Label>
        <Form.Control value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label className='n2'>Your Email</Form.Label>
        <Form.Control value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label className='n1'>Subject</Form.Label>
            <Form.Control value={subject} onChange={(e)=> setSubject(e.target.value)} placeholder="Tech,Account,Error,etc.." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className='n1'>Message</Form.Label>
            <Form.Control value={message} onChange={(e)=> setMessage(e.target.value)} as="textarea" rows={3} placeholder="Your message" />
          </Form.Group>

        <Form.Group style={{textAlign:"center"}}>
          <Button  id='submit' type="submit" onClick={handleSubmit} size='lg' style={{backgroundColor :"#EB5E28", color:"#FFFFFF" , textAlign:"center"}}>
            Submit
          </Button>
          </Form.Group>
        </Form>
      );
    }

export default Contactus ;


