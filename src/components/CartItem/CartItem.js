import "./cartItem.css"

const CartItem = ({product, removeProduct}) => {

    return <div className="carrito-producto" >
    <img className="carrito-producto-imagen" src={product.image} alt="{producto.title}"/>
    <div className="carrito-producto-titulo">
        <small>Nombre</small>
        <h2>{product.title}</h2>
    </div>
    <div className="carrito-producto-cantidad">
        <small>Cantidad</small>
        <p>{product.quantity}</p>
    </div>
    <div className="carrito-producto-precio">
        <small>Precio</small>
        <p>${product.price}</p>
    </div>
    <div className="carrito-producto-subtotal">
        <small>Subtotal</small>
        <p>${product.price * product.quantity}</p>
    </div>
    <button id = {product.id} className="boton-borrar" onClick={removeProduct}><i className="bi bi-trash3-fill"></i></button>
    </div>
}

export default CartItem;