import { useEffect, useState } from "react";

import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"

import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";

import Loader from "../Loader/Loader";
const ItemListContainer = () => {


    const { category } = useParams();

    const [products, setProducts] = useState([])
    useEffect(() => {

        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        if(category && category !== "todos-los-productos") {
            const q = query(itemsCollection, where("categoryId", "==", category))
            getDocs(q).then((snapshotQuery) => {
                const docs = snapshotQuery.docs.map((snapshot) => ({
                    id: snapshot.id,
                    ...snapshot.data(),
                }));

                setProducts(docs);
        }
    )} else {
        getDocs(itemsCollection).then((snapshotList) => {
            const docs = snapshotList.docs.map((snapshot) => ({
                id: snapshot.id,
                ...snapshot.data(),
        }))
        setProducts(docs)
    })

}}, [category])
    
    return <>  {products.length === 0 ? <Loader/> : <ItemList prod={products} />}
    </>

}

export default ItemListContainer;