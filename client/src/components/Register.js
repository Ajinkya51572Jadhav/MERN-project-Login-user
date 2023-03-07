import React, { useState } from 'react'
import axios from "axios";
import { NavLink,useNavigate} from 'react-router-dom';
import "../App.css";
import logocartoon from "../photocartoon/Mobile-login.png";

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
alert('register successfully');
  axios.post('http://localhost:9000/register',user).then((res)=>{
    alert(res.data.message);
    navigator("/login");
  
  })
}else{
  alert('plzz fill the form..');
}

}





  return (
    <div>

<h3 className='register_h1'>Register</h3>
<form>
<div className='cartoon_img'>
<img src={logocartoon} alt="logo"/>
</div>
<div className='register_page'>

<div className='input_register'>
<input type={'text'} placeholder='name' name="name" value={user.name} onChange={handleChange} required={true} /><br/><br/>
<input type={'text'} placeholder='Email'  name="email" value={user.email} onChange={handleChange} required={true}/><br/><br/>
<input type={'password'} placeholder='password' name="password" value={user.password} onChange={handleChange} required={true}/><br/><br/>
<input type={'password'} placeholder="confirm password"  name="cpassword" value={user.cpassword} onChange={handleChange} required={true}/><br/><br/>
</div>

<button  onClick={register} className='register_button' >Register</button><br/><br/>

<NavLink to={'/login'} className='btn'  >Already  account ? Login</NavLink><br/><br/>
  <NavLink to={'/'} className='btn'>Home page</NavLink><br/><br/>
  </div>
</form>      





<footer>

<div id="footer">
   <div className="copyright">
     &copy; Copyright <strong><span>MERN Project</span></strong>. All Rights Reserved
   </div>
   <div className="credits">
     Designed by <NavLink to="https://www.linkedin.com/in/ajinkya-jadhav-a2665623b/">Ajinkya</NavLink>
   </div>
   </div>
</footer>

</div>
  )
}

export default Register;
