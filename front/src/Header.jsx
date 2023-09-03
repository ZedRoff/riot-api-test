import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
const Header = ({show}) => {
    let navigate = useNavigate();
    const handleNav = () => {
        navigate("/home")
    }
    return( <header>
        {show ? <FontAwesomeIcon icon={faDoorOpen} className="header_icon" onClick={handleNav} /> : <></>}
        <h1 className="main_title">The API</h1>
                    </header>)
}
Header.propTypes = {
  
    show: PropTypes.bool.isRequired
}
export default Header;