import React from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
// import App from '../../App';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../../firebase/firebase.init'
import { Link } from 'react-router-dom';


const auth = getAuth(app);

const RegisterReactBootstrap = () => {
  const [passwordError, setPasswordError] = useState ('')
  const [success, setSuccess] = useState(false)
  
  const handelRegister = (event) =>{
    setSuccess(false)
      const form = event.target;


  event.preventDefault();
  const name = form.name.value;
    const email = form.email.value
    const password = form.password.value
    console.log(name, email, password)
    
    // Validate password reguler expression
    if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
      setPasswordError('Please provide at least two uppercase')
      return;
    }
    if(password.length < 6){
      setPasswordError("Please Should be at least 6 characters")
      return;
    }
    if(!/(?=.*[!@#$%^*])/.test(password)){
      setPasswordError("Please add at least one special character")
      return;
    }
    setPasswordError('')

    // User create 
    createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
      const user = result.user
      console.log(user)
      setSuccess(true)
      form.reset();
      verifyEmail();
      updateUserName(name)
      
    })
    .catch(error =>{
      console.error('error', error)
      setPasswordError(error.message)
    })
}



const verifyEmail = () =>{
  sendEmailVerification(auth.currentUser)
  .then( () =>{
    alert ('Please check the email & varify')
  })
}

const updateUserName = (name)=>{
  updateProfile(auth.currentUser, {
    displayName: name
  })
  .then( ()=>{
    console.log('display name updated')
  })
  .catch( error => {
    console.error('error', error)
  })
}

  return (
        <div className='w-50 mx-auto'>
            <h1 className='text-success'>Please Register !!!</h1>
            <Form onSubmit={handelRegister}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter name" required />
       </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  type="email" name="email" placeholder="Enter email" required />
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control   name="password" type="password" placeholder="Password" required/>
      </Form.Group>
      <p className='text-denger'>{passwordError}</p>
      {success && <p className='text-success'>User Created Successfully</p>}
            <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <p><small>Already have an account? Please <Link to='/login'>Login</Link> </small></p>
            
        </div>
    );
};

export default RegisterReactBootstrap;