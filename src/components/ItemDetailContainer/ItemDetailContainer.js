import data from "../../products.json";
import ItemDetail from "../ItemDetail/ItemDetail";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../Loader/Loader";


const ItemDetailContainer = () => {
    
    const {id} = useParams();

    const [detail, setDetail] = useState()
    
    useEffect(() => {

        const promiseProducts = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 2000)
        })
        promiseProducts.then((res) => {
            setDetail(res.find(product => product.id === id))

        })
        promiseProducts.catch((err) => {
            console.log("la promesa dio error", err)
        })
    }, [id])



    console.log(detail)

    return  <>
                {detail === undefined ? <Loader/> : <ItemDetail detail={detail}/>}
            </>
};

export default ItemDetailContainer;