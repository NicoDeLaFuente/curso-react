import "./contact-form.css"

import { useState, useContext } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { CartContext } from "../../contexts/cartContext";

const ContactForm = () => {

    const {cart} = useContext(CartContext)

    const formInfo = {
        name:"",
        email: "",
        phone: ""
    }

    const [form, setForm] = useState(formInfo);

    const [id, setId] = useState()

    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

    const order = {
        buyer : {
            name: form.name,
            email: form.email,
            phone: form.phone
        },
        items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        date: hoy.toDateString(),
        total: cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        const db = getFirestore();
        const contactFormCollection = collection(db, "orders")
        addDoc(contactFormCollection, order).then((snapshot) => {
            setForm(formInfo)
            setId(snapshot.id)
        })
            
    }

    const changeHandler = (e) => {
        const {value, name} = e.target;
        setForm({...form, [name]: value})
    }

    return  <div className="checkout">
                {id !== undefined ? (<p>El ID de su formulario es: {id}</p>) : ("")} 
                <form onSubmit={submitHandler}>
                <div className="form-item">
                    <label htmlFor="name">Nombre</label>
                    <input
                        placeholder="Escriba su nombre"
                        name="name"
                        id="name"
                        value={form.name}
                        onChange={changeHandler}></input>
                </div>
                <div className="form-item">
                    <label htmlFor="email">Email</label>
                    <input
                        placeholder="Escriba su email"
                        type="email"
                        name="email"
                        id="email"
                        value={form.email}
                        onChange={changeHandler}></input>
                </div>
                <div className="form-item">
                    <label htmlFor="phone">Teléfono</label>
                    <input
                        placeholder="Escriba su teléfono"
                        type="number"
                        name="phone"
                        id="phone"
                        value={form.phone}
                        onChange={changeHandler}></input>
                </div>
                <button>Enviar</button>

            </form>
          </div>

}

export default ContactForm;