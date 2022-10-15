import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterBootstrap = () => {
     const handelRegister = (event) =>{
  event.preventDefault();
    const email = event.target.email.value
    const password = event.target.password.value
    console.log(email, password)
}
const handlerEmailChange = (event) =>{
  const email = event.target.value
//   console.log(email)
}
const handlerPasswordChange = (event) =>{
  const password = event.target.value
//   console.log(password)
}
    return (
        <div className='w-50 mx-auto'>
            <form onSubmit={handelRegister}>
  <div classname="mb-3">
    <label for="exampleInputEmail1" classname="form-label">Email address</label>
    <input type="email" name="email" classname="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div classname="mb-3">
    <label for="exampleInputPassword1" classname="form-label">Password</label>
    <input type="password" name="password" classname="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" classname="btn btn-primary">Register</button>
</form>
            
        </div>
    );
};

export default RegisterBootstrap;