import { NavLink} from "react-router-dom";
import "../style.css";
function Home() {
  return (
    <div className="home_page"> 
    
    <div className="home_content">
    <span> WELCOME TO OUR SITE</span>
     </div>
     
    <div className="image_home_page">        
          <img  src={'https://cdn.dribbble.com/users/77121/screenshots/4694756/scene_05_-_door_dribbble.gif'}  alt="animated gif"/>
          </div> 
          <div className="home_create_account">
          <NavLink to={'/register'} className={"home_link"}>create Account</NavLink>           
        </div>

          </div>
  );
}

export default Home;
