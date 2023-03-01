import "./itemList.css";

import Item from "../Item/Item";

const ItemList = ({ prod }) => {

    return <div className="contenedor-productos">
        {prod.map((product) => (
            <Item product={product} key={product.id} />
        )
        )}
    </div>
}

export default ItemList;