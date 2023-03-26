import "./item-detail.css";

import { useContext, useState } from "react";

import {CartContext} from "../../contexts/cartContext";

import ItemCount from "../ItemCount/ItemCount";

import GoToCart from "../GoToCart/GoToCart";

const ItemDetail = ({detail}) => {

    const {addProduct} = useContext(CartContext);
    

    const {title, image, price, description, stock} = detail

    const [goToCart, setGoToCart] = useState(false)

    const onAdd = (quantity) => {
        setGoToCart(true)
        addProduct(detail, quantity)
    }
    
    return <div className="item-detail">
                <img src={image} alt={title} />
                <div className="detail-derecho">
                    <h1>{title}</h1>
                    <strong>${price}</strong>
                    <h2>Descripción</h2>
                    <p>{description}</p>
                    <div className="detail-buttons">
                        {
                            goToCart ? <GoToCart/> : <ItemCount stock={stock} onAdd={onAdd}/>
                        }
                    </div>
                </div>
            </div>

}

export default ItemDetail;