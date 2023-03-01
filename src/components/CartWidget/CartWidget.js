import { NavLink } from "react-router-dom";
import "./cartwidget.css"

const CartWidget = () => {


    return <NavLink to="/cart">
                <i className="bi bi-cart-fill"></i>
                <span>0</span>
           </NavLink>
}

export default CartWidget;