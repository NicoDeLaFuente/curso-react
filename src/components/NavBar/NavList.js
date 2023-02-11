import "./navlist.css"
import CartWidget from "../CartWidget/CartWidget"

const Navlist = () => {
    return <ul className="nav-items">
                <li>
                    <a href="#">Todos los productos</a>
                </li>
                <li>
                    <a href="#">Iluminación</a>
                </li>
                <li>
                    <a href="#">Materiales Eléctricos</a>
                </li>
                <li>
                    <a href="#">Equipamiento</a>
                </li>
                <li>
                    <CartWidget />
                </li>
            </ul>
}

export default Navlist;