import React, { useState } from 'react'
import axios from "axios";
import { NavLink ,useNavigate} from 'react-router-dom';
import "../App.css";
import logincartoon from "../photocartoon/login_img.png"

  const Login=() => {

    const navigator = useNavigate();  


const [user,setdata]=useState({
    email:"",  password:"",
});


const handleChange=(e)=>{


setdata({...user,[e.target.name]:e.target.value});
}
console.log(user);

const loginclick=(e)=>{
  e.preventDefault();

axios.post('http://localhost:8000/login',user)
 .then((res)=>{
      console.log(user);
  alert(res.data.message);
  console.log(res.data.user);

if(res.data.message==='Login Successfully'){
  navigator('/myname');
}else{
  navigator('/login');
}

 

      });
 
 
}


  return (
    <div>
  
<form>


<div  className='login_page'>

<div className='cartoon_img_login'>
<img src={logincartoon} alt="logo"/>
</div>  
<div className='container'>
<div className='input_login'>
<h1>Login</h1>
<input type={'text'} placeholder='Email'   name="email" value={user.email} onChange={handleChange} required={true}/><br/><br/>
<input type={'password'} placeholder='password'  name="password" value={user.password} onChange={handleChange} required={true}/><br/><br/>
</div>

<button onClick={loginclick} className="login_button">Login</button>

<NavLink  to="/register" className="login_btn">Create a Account</NavLink><br/><br/>
</div>
</div>
</form>      

   </div> 
   
  )
}

export default Login;




