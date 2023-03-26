import "./cartButtons.css"

import {Link} from "react-router-dom"

const CartButton = ({paymentAmmount, clearCart}) => {

    return <div id="carrito-botones" className="carrito-botones disabled">
                <div className="boton-carrito-izquierda">
                    <button onClick={clearCart} id="vaciar-carrito" className="boton-carrito-borrar">Vaciar Carrito</button>
                </div>
                <div className="boton-carrito-derecha">
                    <div className="carrito-derecha-total">
                        <p>Total:</p>
                        <p id="total" >${paymentAmmount}</p>
                    </div>  
                    <div className="carrito-derecha-comprar">
                        <Link to="/checkout/contact-form " id="boton-comprar" className="boton-comprar">Comprar</Link>
                    </div>
                </div>
            </div>
}


export default CartButton;