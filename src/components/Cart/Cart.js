import "./cart.css"

import { useContext } from "react";

import { CartContext } from "../../contexts/cartContext";

import CartItem from "../CartItem/CartItem";

import CartButton from "../CartButtons/CartButtons";

const Cart = () => {

    const {cart, clearCart, removeProduct} = useContext(CartContext);

    const paymentAmmount = (cart.reduce((acc, item) => acc + item.price * item.quantity, 0))


    return  <>
                <div className="carrito-productos">
                {
                    cart.length < 1 ?
                    <div>Tu carrito esta vacío</div> :
                    cart.map((product) => (
                        <CartItem product={product} key={product.id} removeProduct={removeProduct}/>
                    ))
                }
                </div>
                <CartButton clearCart={clearCart} paymentAmmount={paymentAmmount}/>

            </>
}

export default Cart;