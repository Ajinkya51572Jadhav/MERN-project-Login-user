import React from 'react'
import logo from "../images/project_img.png"
import "../inner.css";
import { NavLink } from 'react-router-dom';

const Project = () => {
  return (
    <div>

    <div className="allNavlink">
    <NavLink to={'/blogs'}><span className="header_line">Blogs</span></NavLink>
     <NavLink to={'/project'}><span className="header_line">Project</span></NavLink>
     <NavLink to={'/home2'}><span className="header_line">Home</span></NavLink>
     </div>


    <div className='container_project'>    
    <img src={logo} alt="logo_project"/>

    <h2 className='text_heading_project'>see the my  <span> project</span> </h2>

    <div className='project_box_1  project_color'>
    <h3>Project</h3>
    <div className='project_text_head'> click button drum sound on to javascript 
    programming and html , css  responsive output </div>  
    
    <NavLink  className="home_btn" to={'https://djproject.netlify.app/'}>Live Link</NavLink><br/><br/>
        </div>



    <div className='project_box_1'>
  
    <div className='project_text_head'> calculater html and css<br/>
    </div>  
    
    <NavLink  className="home_btn" to={'https://hostcalculaculator.netlify.app/'}>Live Link</NavLink><br/><br/>
        </div>



    <div className='project_box_1  project_color'>

    <div className='project_text_head'> snake game and sound<br/>
     and web hosting </div> 
    
    <NavLink  className="home_btn" to={'https://ajinkyasnakegame.netlify.app/'}>Live Link</NavLink><br/><br/>
        </div>



    <div className='project_box_1'>

    <div className='project_text_head'> Login design <br/>
   </div> 
    
    <NavLink  className="home_btn" to={'https://ajinkyajadhav.netlify.app/'}>Live Link</NavLink><br/><br/>
        </div>



    <div className='project_box_1  project_color'>

    <div className='project_text_head'> Animation  css <br/>
    </div>
    
    <NavLink  className="home_btn" to={'https://ajinkyajadhav-6a54c.web.app/'}>Live Link</NavLink><br/><br/>
        </div>
     


    <div className='project_box_1'>

    <div className='project_text_head'> local storage and user login <br/>
    routing page <br/> react Language  use simple output</div>  {/* local stdsff*/}
    
    <NavLink  className="home_btn" to={'https://localstorageuserlogin.web.app/'}>Live Link</NavLink><br/><br/>
        </div>


        

    <div className='project_box_1  project_color'>

    <div className='project_text_head'> Animation  css in Animation rotet <br/>
    </div>
    
    <NavLink  className="home_btn" to={'https://animatedrotet.netlify.app'}>Live Link</NavLink><br/><br/>
        </div>



        <div className='project_box_1'>

        <div className='project_text_head'> Animation  css  in create bouncing boll<br/>
        </div>
        
        <NavLink  className="home_btn" to={'https://bouncingboll.netlify.app'}>Live Link</NavLink><br/><br/>
            </div>


            

    <div className='project_box_1  project_color'>

    <div className='project_text_head'> javascript using slide photo<br/>
    </div>
    
    <NavLink  className="home_btn" to={'https://slidephotojs.netlify.app'}>Live Link</NavLink><br/><br/>
        </div>


     

    <div className='project_box_1  '>

    <div className='project_text_head'> Animation  css hover Psudo element<br/>
    </div>
    
    <NavLink  className="home_btn" to={'https://registerhovereffect.netlify.app'}>Live Link</NavLink><br/><br/>
        </div>

        

        <div className='project_box_1  project_color'>

        <div className='project_text_head'>set Alarm <br/> html ,css , js responsive project
        </div>
        
        <NavLink  className="home_btn" to={'https://alarmset.netlify.app/'}>Live Link</NavLink><br/><br/>
            </div>



            <div className='project_box_1  '>

            <div className='project_text_head'>search products <br/> 
            </div>
            
            <NavLink  className="home_btn" to={'https://productsearch1.netlify.app/'}>Live Link</NavLink><br/><br/>
                </div>


<div className='project_box_1 project_color '>

<div className='project_text_head'>image To Pdf Convert in javascript Language Use <br/> 
</div>

<NavLink  className="home_btn" to={'https://imgtopdfconvert.netlify.app/'}>Live Link</NavLink><br/><br/>
    </div>



    <div className='project_box_1  '>

    <div className='project_text_head'>Transfer Language   Country<br/> 
    </div>
    
    <NavLink  className="home_btn" to={'https://transferlanguage.netlify.app/'}>Live Link</NavLink><br/><br/>
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

export default Project