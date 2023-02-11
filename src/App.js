
import './App.css';

import NavBar from './components/NavBar/NavBar';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greeting={"Hola! Aquí iran todos los productos. "}/>
      </main>
    </div>
  );
}

export default App;
