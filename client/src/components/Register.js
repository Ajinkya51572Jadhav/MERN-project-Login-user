import React, { useState } from 'react'
import axios from "axios";
import { NavLink,useNavigate} from 'react-router-dom';
import "../style.css";

const Register= () => {
const navigator = useNavigate();

const [user,setuser]=useState({
    name:"",
    email:"",
    password:"",
    cpassword:""
});


const handleChange=(e)=>{
setuser({...user,[e.target.name]:e.target.value});
}

console.log(user);

const register=(e)=>{
  e.preventDefault();

const {name,email,password,cpassword}=user;
if(name && email && password && (password===cpassword)){
// alert('register successfully');
  axios.post('http://localhost:9000/register',user).then((res)=>{
    alert(res.data.message);
    navigator("/login"); 
  
  })
}else{
  alert('plzz fill the form..');
}

}
  return (
    <div className='register_page'>
    <p className='register_name'>Register Form</p>
<form>
<div className='register_img'>
<img src={'https://i.pinimg.com/originals/aa/63/67/aa6367c03bb93b12330d8c483b172ab8.gif'} alt="rockstar gif"/>
</div>

<div className='register_form'>
<input type={'text'} placeholder='name' name="name" value={user.name} onChange={handleChange} required={true} /><br/><br/>
<input type={'text'} placeholder='Email'  name="email" value={user.email} onChange={handleChange} required={true}/><br/><br/>
<input type={'password'} placeholder='password' name="password" value={user.password} onChange={handleChange} required={true}/><br/><br/>
<input type={'password'} placeholder="confirm password"  name="cpassword" value={user.cpassword} onChange={handleChange} required={true}/><br/><br/>
<button  onClick={register} className='register_button' >Register</button><br/><br/>
<div className='register_links'>
<NavLink to={'/login'} className='btn1'>Already  account ? Login</NavLink><br/><br/>
  <NavLink to={'/'} className='btn2'>home page</NavLink><br/><br/>
  </div>
  </div>
</form>      






</div>
  )
}

export default Register;
