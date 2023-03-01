import "./item.css";

import { Link } from "react-router-dom";
const Item = ({product}) => {
    const {id, titulo, precio, imagen} = product

    return <div className="carta">
                <img className="producto-imagen" src={imagen} alt="Foto producto"/>
                <div className="producto-abajo">
                    <p className="producto-titulo">{titulo}</p>
                    <small className="producto-precio">${precio}</small>
                    <Link to={`/item/${id}`} className="producto-boton" id={id}>Ver detalle</Link>
                </div>
           </div>
}

export default Item;