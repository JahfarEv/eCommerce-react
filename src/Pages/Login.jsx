import React from 'react'
import  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import  './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login'>
   
   <form >
   
    <div class="form-group">
    <h1>Login</h1>
      <label for="exampleInputEmail1">Email address</label>

      <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
      <Link to='/signUp'>Sign Up</Link>
    </div>
   
    <Link to='/shop'><button type="submit" class="btn bg-info">Submit</button></Link>
    
  </form>
  </div>

    
  );
}








export default Login
