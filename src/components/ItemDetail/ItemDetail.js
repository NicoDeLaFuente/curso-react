import "./item-detail.css";

import ItemCount from "../ItemCount/ItemCount";
import BuyButton from "../BuyButton/BuyButton";

const ItemDetail = ({detail}) => {
    const {titulo, imagen, precio} = detail

    console.log(detail)
    
    return <div className="item-detail">
                <img src={imagen} alt={titulo} />
                <div className="detail-derecho">
                    <h1>{titulo}</h1>
                    <strong>${precio}</strong>
                    <h2>Descripción</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae deserunt, iusto ipsam aperiam tempora totam quo. Velit repellat, sequi nisi ea, aperiam optio maxime rem vitae qui eveniet perferendis voluptatum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae deserunt, iusto ipsam aperiam tempora totam quo. Velit repellat, sequi nisi ea, aperiam optio maxime rem vitae qui eveniet perferendis voluptatum?
                    </p>
                    <div className="detail-buttons">
                        <ItemCount stock={20}/>
                        <BuyButton/>
                    </div>
                </div>
            </div>

}

export default ItemDetail;