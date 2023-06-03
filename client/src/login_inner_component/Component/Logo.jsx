import React from 'react'
import logo from "../images/logodesign.png"
import "../inner.css";
import { NavLink } from 'react-router-dom';

const Logo= () => {
  return (
    <div>

    <div className="allNavlink">
    <NavLink to={'/blogs'}><span className="header_line">Blogs</span></NavLink>
     <NavLink to={'/project'}><span className="header_line">Project</span></NavLink>
     <NavLink to={'/home2'}><span className="header_line">Home</span></NavLink>
     </div>

    <div className='container_project'>    
    <img src={logo} alt="logo_project"/>

    <h2 className='text_heading_project'>create Logo  <span>Design</span> </h2>

   
    <div className='project_box_1  project_color'>
    <div className='project_text_head'> Chrome Logo</div> 
     <NavLink  className="home_btn" to={'https://chromelogo.netlify.app/'}>Live Link</NavLink><br/><br/>
        </div>



    <div className='project_box_1'>
    <div className='project_text_head'> Spotify Logo </div> 
     <NavLink  className="home_btn" to={'https://spotifylogo.netlify.app/'}>Live Link</NavLink><br/><br/>
     </div>



    <div className='project_box_1  project_color'>
    <div className='project_text_head'> Instagram Logo</div>
        <NavLink  className="home_btn" to={'https://instagramlogo1.netlify.app/'}>Live Link</NavLink><br/><br/>
        </div>
     


    <div className='project_box_1'>
    <div className='project_text_head'>Youtube Logo</div>  
        <NavLink  className="home_btn" to={'https://youtubelogo.netlify.app/'}>Live Link</NavLink><br/><br/>
        </div>

        <div className='project_box_1 project_color'>
        <div className='project_text_head'>Captain america Logo</div>  
            <NavLink  className="home_btn" to={'https://logo-434e1.web.app/'}>Live Link</NavLink><br/><br/>
            </div>

</div>


<footer className='footer_container'>
<h2>connet with me</h2>
<div className='footer_navlink'>

<NavLink to={"https://github.com/Ajinkya51572Jadhav"}><span>Github</span></NavLink>
<NavLink to={'https://www.linkedin.com/in/ajinkya-jadhav-a2665623b/'}><span>Linkdin</span></NavLink>
<NavLink to={'https://www.instagram.com/ajinkya_jadhav_77777'}><span>Instagram</span></NavLink>
</div>
</footer>

    </div>
  
  )
}

export default Logo;