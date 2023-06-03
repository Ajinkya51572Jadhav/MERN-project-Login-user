import React from 'react'
import logo from "../images/Working-pana.png"
import "../inner.css";
import { NavLink } from 'react-router-dom';

const Home2 = () => {
  return (
    <div>

    <div className="allNavlink">
    <NavLink to={'/blogs'}><span className="header_line">Blogs</span></NavLink>
     <NavLink to={'/project'}><span className="header_line">Project</span></NavLink>
     <NavLink to={'/home2'}><span className="header_line">Home</span></NavLink>
     </div>

    <div className='container_home'>    
    <img src={logo} alt="logo_home"/>

    <h2 className='text_heading_home'>Ajinkya Jadhav The <span>fronted Developer</span> </h2>

    <div className='home_box_tech'>
    <h3 className='home_text_heading'>Technologies</h3>
    <div className='text_home_box  home_paragraph'>i'm familier with HTML5 , 
    css3,git,javascript,reactjs,and web hosting</div>
        </div>

    <div className='home_box_pro'>
    <h3 className='home_text_heading'>Project</h3>
    <div className='home_paragraph'> I like showcase my work and thus , you can  
      see my project hosted online.
      I have worked on CLI apps and also GUI you can see 
      my project 
      </div>
        <NavLink  className="home_btn" to={'/project'}>Project</NavLink>
    </div>

    <div className='home_box_blog'>
    <h3 className='home_text_heading'>Logo design</h3>
    <div className='home_paragraph'> create Logo design </div>
    

    <NavLink  className="home_btn" to={'/logo'}>Logo</NavLink>
    </div>

    <div className='home_box_pro'>
    <h3 className='home_text_heading'>Blogs</h3>
    <div className='home_paragraph'> i'm also working on some technical and
     non technical blogs.
    I like to document my journey of learning .
    I would like to  share my blogs with others.
    I hope they can  aquire more information
       </div>    
    <NavLink  className="home_btn" to={'/blogs'}>read Blogs</NavLink>
    </div>

      </div>
      <footer className='footer_container'>
      <h2 className='home_text_heading' >connet with me</h2>
      <div className='footer_navlink'>
      
      <NavLink to={"https://github.com/Ajinkya51572Jadhav"}><span>Github</span></NavLink>
      <NavLink to={'https://www.linkedin.com/in/ajinkya-jadhav-a2665623b/'}><span>Linkdin</span></NavLink>
      <NavLink to={'https://www.instagram.com/ajinkya_jadhav_77777'}><span>Instagram</span></NavLink>
      </div>
      </footer>

      </div>
      )
}

export default Home2;
