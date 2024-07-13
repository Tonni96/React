import "./navbar.css";
import { LiaOpencart } from "react-icons/lia";


export const Navbar = () => {
    return (
        <div className="navbarContainer">
            <img className="imgLogo" src="https://res.cloudinary.com/dsk3j8k09/image/upload/v1718309660/logo_antoine_sr1ns8.jpg" alt="" />

            <ul className="listContainer">
                <li className="list">Quienes somos?</li>
                <li className="list">semi-amargo</li>
                <li className="list">Especialidades</li>
                <li className="list">Semi-amargo</li>
                <li className="list">especialidades</li>
            </ul>

            <LiaOpencart size={25}/>

        </div>
    )
}
