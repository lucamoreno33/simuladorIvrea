import "./App.scss"
import './NavBar/NavBar'
import { NavBar } from './NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemlistContainer } from "./ItemlistContainer/ItemlistContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
function App() {
  document.body.style = 'background: #28282B ;';
  return (
      <BrowserRouter> 
        <div>
          <NavBar/>
        </div>
        <Routes>
          <Route path="/" element={<ItemlistContainer/>}/>
          <Route path="/:TipoLibro" element={<ItemlistContainer/>}/>
          <Route path="/:TipoLibro/:libroId" element={<ItemDetailContainer/>}/>
          <Route path="*"/>
          
        </Routes>
            
      </BrowserRouter>
  );
}

export default App;
