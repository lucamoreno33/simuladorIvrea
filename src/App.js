import "./App.scss"
import './NavBar/NavBar'
import { NavBar } from './NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from './Cards/Card'; 
import {ContenedorProductos} from "./contenedorProductos/ContendorProductos"
import { startTransition } from "react";
// tengo entendido que simplemente habia que hacer un modulo con la propiedad greeting para poner ahi los nombres de los productos y nada mas,
// pero me tome la libertad de crear unas tarjetas por mera curiosidad de como era hacer esto en react
function App() {

  return (
    <div className="fondo">
      <div>
        <NavBar/>
      </div>
      <main>
        <section className='d-flex flex-column container'>
            <h2 className="subtitulo">Novedades de la semana</h2>
            <ContenedorProductos>
              <Card imagen={'./img/chainsawMan.jpg'} nombre={"Chainsaw Man"} tipo={"manga"} precio={"1300"}/>
              <Card imagen={'./img/berserk.jpg'} nombre={"berserk"} tipo={"manga"} precio={"1800"}/>
              <Card imagen={'./img/dragonBall.jpg'} nombre={"Dragon ball"} tipo={"manga"} precio={"1800"}/>
              <Card imagen={'./img/evangelion.jpg'} nombre={"evangelion"} tipo={"manga"} precio={"1300"}/>
            </ContenedorProductos>
        </section>
        
      </main>
    </div>
  );

}

export default App;
