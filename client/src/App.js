import Register from "./components/Register";
 import Login from "./components/Login";
 import Home from "./components/Home";
import {Routes,Route , NavLink} from "react-router-dom";
import Errorpage from "./components/Errorpage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Home2 from "./login_inner_component/Component/Home2";
import Project from "./login_inner_component/Component/Project";
import Blogs from "./login_inner_component/Component/Blogs";
import Logo from "./login_inner_component/Component/Logo";






function App() {

  const [home2 , sethome2]=useState("");
  const [project , setproject]=useState("");
  const [logo , setlogo]=useState("");
  const [blogs , setblogs]=useState("");

   


  return (
    <div>
<Routes>



 {home2=="Login Successfully" ?  <Route path="/home2" element={<Home2/>} /> :null }
 {project=="Login Successfully" ?  <Route path="/project" element={<Project/>} /> :null }
{logo=="Login Successfully" ?  <Route path="/logo" element={<Logo/>} /> :null }
   {blogs=="Login Successfully" ?  <Route path="/blogs" element={<Blogs/>} /> :null } 

   



 <Route  path="/" element={<Home/>} ></Route>
 <Route path="/login"  element={<Login  home2={sethome2} project={setproject} logo={setlogo} blogs={setblogs} />} />
<Route path="/register" element={<Register/>}/>
<Route path="*" element={<Errorpage/>}></Route>
</Routes>


{/* <NavLink to={'/blogs'}><span className="header_line">Blogs</span></NavLink>
// <NavLink to={'/project'}><span className="header_line">Project</span></NavLink>
  // <NavLink to={'/'}><span className="header_line">Home</span></NavLink>*/}

    </div>
  );
}

export default App;



