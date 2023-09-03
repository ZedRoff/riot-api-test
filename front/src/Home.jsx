import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Home = () => {
    const navigate = useNavigate();
    const handleNav = () => {
        
        navigate("/lol")
    }
    return (
        <>
       <Header show={false}/>
            <main className="main_home">
                <div className="container">
                    <h2 className="main_description">Where do you want to go ?</h2>
                </div>
                <div className="container">
                    
                    <button className="btn_main" onClick={handleNav}>LoL</button>
                    </div>
            </main>
            <Footer />
            </>
    )
}
export default Home;