import { Link } from "react-router-dom";
import './contact.css';

const Contact = () => {
    return ( 
        <div className="div001">
            <div className="image">
                <div className="logo"></div>
            </div>
            <div className="div002">
                <div className="div003">
                    <h1>Contact Admin</h1>
                        <label for="email">Email</label><br />
                        <input type="email" /><br />
                        <label for="">Subject!</label><br />
                        <input type="text" /><br />
                        <label for="">Description</label><br />
                    
                        <textarea name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div className="div004"> 
                    <Link to="/login"><span>Submit</span></Link>
                    <Link to="/contact"><span>Cancel</span></Link>
                </div>
                <div>

                </div>
            </div>
       </div>
     );
}
 
export default Contact;