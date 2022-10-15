import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';

const auth = getAuth(app)

const Login = () => {
  const [success, setSuccess] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  const handleSubmit = event =>{
    event.preventDefault()
    setSuccess(false)

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)

    signInWithEmailAndPassword(auth, email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      setSuccess(true)
    })
    .catch(error =>{
      console.error("error",error)
    })

  }
const handleEmailBlur = event =>{
  const email = event.target.value;
  setUserEmail(email)
}

  const handleForgetPassword = () =>{
    if(!userEmail){
      alert("Please enter you email address")
      return;
    }
    sendPasswordResetEmail(auth, userEmail)
    .then(()=>{
      alert ('password Reset Email send')
    })
    .catch(error =>{
      console.error('error', error)
    })
    
  }
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-success'>Log In !!!</h1>
           <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
                <input type="email" onBlur={handleEmailBlur} name='email' className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
                <input type="password" name='password' className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
              </div>
               <Button variant="primary" type="submit">Login</Button>
           </form>
           {success && <p className='text-success'>Successfully Login to the Accoutn</p>}
           <p><small>New to this website? Please <Link to='/register'>Register</Link> </small></p>
           <p>Forget Password? <button onClick={handleForgetPassword} type="button" className="btn btn-link">Plaese Reset</button></p>
           
        </div>
    );
};

export default Login;