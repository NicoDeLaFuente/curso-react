import "./navlist.css"

import { NavLink } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget"

const Navlist = () => {
    return <ul className="nav-items">
                <li>
                    <NavLink to="/category/todos-los-productos">Todos los productos</NavLink>
                </li>
                <li>
                    <NavLink to="/category/iluminacion">Iluminación</NavLink>
                </li>
                <li>
                    <NavLink to="/category/materiales-electricos">Materiales Eléctricos</NavLink>
                </li>
                <li>
                    <NavLink to="/category/equipamiento">Equipamiento</NavLink>
                </li>
                <li>
                    <CartWidget />
                </li>
            </ul>
}

export default Navlist;