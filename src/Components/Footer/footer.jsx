import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
    <footer className="footer">
        <p>Created by Mandy</p>
        <p>Need a custom Wedding Website? Contact <Link to="www.mandyswebview.com" className="footer__link">Me</Link></p>
    </footer>
    );
}
 
export default Footer;