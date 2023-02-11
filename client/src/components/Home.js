import { NavLink} from "react-router-dom";
import "../App.css";
import logo from  "../hero-img.png"

function Home() {



  return (
    <div>
        
    <div>
    <h3  className="text_home">Navbar</h3>
    </div>
          <section id="hero">
           <div className="container">
         <div className="hero-img">
          <img src={logo} className="img-fluid animated" alt=""/>
         </div>
          <div className="row">
            <div  className="textall">
              <h2>Elegant and creative solutions</h2>
              <h2>We are team of talented designers making websites </h2>
              <div className="d-flex">
                <NavLink to={'/register'} className="btn-get-started">create Account</NavLink>
                <a href="https://github.com/Ajinkya51572Jadhav" className="btn-get-started">github</a>
              </div>
            </div>        
          </div>

            </div>    
   </section>

<footer>

<div id="footer">
   <div className="copyright">
     &copy; Copyright <strong></strong>. All Rights Reserved
   </div>
   <div className="credits">
     Designed by <NavLink to="https://www.linkedin.com/in/ajinkya-jadhav-a2665623b/">Ajinkya</NavLink>
   </div>
   </div>
</footer>


    </div>
  );
}

export default Home;
