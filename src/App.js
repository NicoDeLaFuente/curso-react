
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {CartProvider} from "./contexts/cartContext";

import Cart from "./components/Cart/Cart";

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {

  return (
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route  exact path="/" element={<ItemListContainer />}/>
            <Route  exact path="/category/:category" element={<ItemListContainer />}/>
            <Route exact path="/cart" element= {<Cart/>} />
            <Route exact path={`/item/:id`} element={<ItemDetailContainer />}/>
            <Route exact path={"checkout/contact-form"} element={<ContactForm/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
  );
}

export default App;
