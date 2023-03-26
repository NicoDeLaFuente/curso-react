import "./goToCart.css"
import { Link } from "react-router-dom";
const GoToCart = () => {
    return  <div className="buttons2">
                <Link to="/category/todos-los-productos" className="return">Seguir comprando</Link>
                <Link to="/cart" className="go-to-cart">Ir al carrito</Link>
            </div>
}

export default GoToCart;