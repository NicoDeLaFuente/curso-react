import { useEffect, useState } from "react";

import data from "../../products.json"

import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";

import Loader from "../Loader/Loader";
const ItemListContainer = () => {


    const { category } = useParams();

    const [products, setProducts] = useState([])
    useEffect(() => {

        const promiseProducts = new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 2000)
        })
        if (category) { 
            promiseProducts.then((res) => {
            setProducts(res.filter(product => product.categoria === category))
            if (category === "todos-los-productos") {
                setProducts(res)
            }
        })} else {
            promiseProducts.then((res) => {
                setProducts(res)
            })
        }


        promiseProducts.catch((err) => {
            console.log("la promesa dio error", err)
        })
    }, [category])


    return <>  {products.length === 0 ? <Loader/> : <ItemList prod={products} />}
    </>

}

export default ItemListContainer;