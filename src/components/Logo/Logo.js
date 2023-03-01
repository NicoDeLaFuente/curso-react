import "./logo.css";

import { Link } from "react-router-dom";

import ImgLogo from "./Logo.jpg"

const Logo = () => {
    return  <Link to="/">
                <img className="logo"src={ImgLogo} alt="Logo"/>
            </Link>
}


export default Logo;