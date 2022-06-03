import { Link } from "react-router-dom"
import './landing-page.css'

const LandingPage = ()=> {
    return (
        <div className="content">
           <nav className="nav1">
               <div className="hero"></div>
               <Link className="link" to="/contact">Contact Admin</Link>

           </nav>
           <div className="contentd1">
               <div className="contentd2">
                   <h1>Welcome</h1>
                   <p>Attendance taken by location</p>
               </div>
               <div className="contentd3">
                 <Link className="tag" to="/login">Get Started</Link>
        
               </div>
           </div>
       </div> 
       
    )
}

export default LandingPage