import React, { useState } from "react";

const CartContext = React.createContext([]);

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addProduct = (item, quantity) => {
        let newCart;
        let product = cart.find(product => product.id === item.id)
        if (product) {
            product.quantity += quantity;
            newCart = [...cart];
        }
        else {
            product = {...item, quantity: quantity}
            newCart = [...cart, product]
        }
        setCart(newCart)
    }

    const clearCart = () => setCart([]);

    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }

    const removeProduct = (e) => {
       const idButton = e.currentTarget.id
       setCart(cart.filter(product => product.id !== idButton))
    }

    return <CartContext.Provider value={{
        cart,
        addProduct,
        clearCart,
        isInCart,
        removeProduct
    }}>
            {children}
           </CartContext.Provider>
};

export { CartProvider, CartContext };