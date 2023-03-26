import ItemDetail from "../ItemDetail/ItemDetail";

import {getFirestore, doc, getDoc} from "firebase/firestore"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../Loader/Loader";


const ItemDetailContainer = () => {
    
    const {id} = useParams();
    const [detail, setDetail] = useState()
    
    useEffect(() => {

        const db = getFirestore();
        const itemRef = doc(db, 'items', id);
        getDoc(itemRef).then((snapshot) => {
            const item = {
                id: snapshot.id,
                ...snapshot.data()
            }
        setDetail(item);
        })
    }, [id])

    return  <>
                {detail === undefined ? <Loader/> : <ItemDetail detail={detail}/>}
            </>
};

export default ItemDetailContainer;