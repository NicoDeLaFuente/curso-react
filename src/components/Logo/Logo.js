import "./logo.css";

import { Link } from "react-router-dom";

import ImgLogo from "./Logo.jpg"

const Logo = () => {
    return  <Link to="/category/todos-los-productos">
                <img className="logo"src={ImgLogo} alt="Logo"/>
            </Link>
}


export default Logo;