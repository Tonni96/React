import Cartwidget from "./CartWidget/cartWidget";
import "./navbar.css";
import { Link, Outlet } from "react-router-dom";



export const Navbar = () => {
    return (
        <div>
            <>
            <div className="navbarContainer">
            <Link to= "/">
            <img className="imgLogo" src="https://res.cloudinary.com/dsk3j8k09/image/upload/v1718309660/logo_antoine_sr1ns8.jpg" alt="" />
            </Link>
            <ul className="listContainer">
                <Link to="/category/Semi-amargo"> Semi-amargo</Link>
                <Link to="/category/especialidades"> Especialidades </Link>
            </ul>

            <Cartwidget />
            
            </div>
            </>

        </div>
    )
}
