import "./item.css";

import { Link } from "react-router-dom";
const Item = ({product}) => {
    const {id, title, price, image} = product

    return <div className="carta">
                <img className="producto-imagen" src={image} alt="Foto producto"/>
                <div className="producto-abajo">
                    <p className="producto-titulo">{title}</p>
                    <small className="producto-precio">${price}</small>
                    <Link to={`/item/${id}`} className="producto-boton" id={id}>Ver detalle</Link>
                </div>
           </div>
}

export default Item;