import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
    const handleNav = () => {
        window.open("https://github.com/zedroff/theapi", "_blank")
    
    }
    return(
        <footer>
                <h2 className="footer_text">Made with ❤️ by ZedRoff © </h2>
                <FontAwesomeIcon icon={faGithub} className="footer_icon" onClick={handleNav} />
            </footer>
    )
}
export default Footer;