import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Header";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import axios from "axios";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Lol = () => {
    let refEntry = useRef(null)
    let [userData, setUserData] = useState(null)
    const handleSearch = async () => {
        if(refEntry.current.value === "") return toast.warning("Please enter a username", {position: "bottom-right"})
        let {data} = await axios({
            method: "post",
            url: "/api/getbasicinfos",
            data: {
                name: refEntry.current.value
            }
        })
      if(data == "notfound") return toast.error("User not found", {position: "bottom-right"})
        setUserData(data)
    console.log(data)
    }
    return(
        <>
        <Header show={true}/>
        <main className="main_lol">
            <div className="container_lol">
                <div className="input_sys">
                    <input type="text" placeholder="Username" className="input_main" ref={refEntry} />
                    <div className="spacer" onClick={handleSearch}><FontAwesomeIcon icon={faSearch} className="search_icon" /></div>

                </div>
            </div>
        </main>
        <Footer />
        <ToastContainer />
        </>

    )
}
export default Lol;