import React, { useState } from 'react'
import axios from "axios";
import { NavLink ,useNavigate} from 'react-router-dom';
import "../style.css";
import logincartoon from "../photocartoon/login_img.png"

  const Login=({home2 , project , logo , blogs} ) => {

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

axios.post('http://localhost:9000/login',user)
 .then((res)=>{
      console.log(user);
   alert(res.data.message);
  home2(res.data.message);
  project(res.data.message);
  logo(res.data.message);
  blogs(res.data.message);

  console.log(res.data.message);
  if(res.data.message==='Login Successfully'){
  navigator('/home2');
  }else{
     navigator('/login');
  }
      });
 }
  return (
    <div>
  <form>
<div  className='login_page'>

<div className='login_img'> 
<img src={'https://cdn.dribbble.com/users/623359/screenshots/3061757/rocket_launch.gif'} alt="logo"/>
</div>  

<div className='login_container'>


<div className='login_input'>
<h1>Login Here</h1>
<input type={'text'} placeholder='Email'   name="email" value={user.email} onChange={handleChange} required={true}/><br/><br/>
<input type={'password'} placeholder='password'  name="password" value={user.password} onChange={handleChange} required={true}/><br/><br/><br/><br/> 
<button onClick={loginclick} className="login_button">Login</button>
<NavLink  to="/register" className="login_link">Create a Account</NavLink><br/><br/>

 </div>

</div>

</div>
</form>      
   </div> 
     )
}
export default Login;




