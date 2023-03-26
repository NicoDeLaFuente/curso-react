import "./itemCount.css"

import { useState } from "react";

const ItemCount = ({stock, onAdd}) => {

    let [counter, setCounter] = useState(1);

    const clickHandlerAdd = () => {
        counter < stock ? setCounter(counter + 1) : setCounter(counter = stock)
    }

    const clickHandlerRemove = () => {
        counter > 1 ? setCounter(counter - 1) : setCounter(counter = 1)
    }

    return <div className="buttons">
                <div className="count-button">
                    <button onClick={clickHandlerRemove}>-</button>
                        {counter}
                    <button onClick={clickHandlerAdd}>+</button>
                </div>
                <button onClick={() => onAdd(counter)} className="buy-button">Comprar</button>
            </div>
}

export default ItemCount;