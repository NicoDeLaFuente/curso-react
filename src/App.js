
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./routes/Cart/Cart";

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {

  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route  exact path="/" element={<ItemListContainer />}/>
          <Route  exact path="/category/:category" element={<ItemListContainer />}/>
          <Route exact path="/cart" element= {<Cart/>} />
          <Route exact path={`/item/:id`} element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
