import React from 'react';
import { getAuth } from "firebase/auth";
import App from '../../App';

	const auth = getAuth(App);

const Register = () => {
   const handelRegister = (event) =>{
  event.preventDefault();
    const email = event.target.email.value
    const password = event.target.password.value
    // console.log(email, password)
}
const handlerEmailChange = (event) =>{
  const email = event.target.value
  console.log(email)
}
const handlerPasswordChange = (event) =>{
  const password = event.target.value
  console.log(password)
}

  return (
    <div className="App">
      <form onSubmit={handelRegister}> 
        {/* <input onChange={handlerEmailChange} type="email" name="email" id="" placeholder="Your email Id" /> */}
        <input onBlur={handlerEmailChange} type="email" name="email" id="" placeholder="Your email Id" />
        <br />
        {/* <input onChange={handlerPasswordChange} type="password" name="password" id="" placeholder='Your password' /> */}
        <input onBlur={handlerPasswordChange} type="password" name="password" id="" placeholder='Your password' />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;