
import { useContext } from "react"
import "./CardCarrito.scss"
import { CartContext } from "../context/CartContext"
import {BsFillTrashFill} from 'react-icons/bs'



const CardCarrito = ({item}) =>{
    const {handleBorrar} = useContext(CartContext)
    return(
        <div className="cardCarro my-4">
            <img className="cardCarro-img" src={item.imagen} alt={item.nombre}></img>

            <div className="cardCarro-data mx-3">
                <h2 className="cardCarro-titulo">{item.nombre}</h2>
                <div className="cardCarro-descripcion">
                
                    <p>Precio: ${item.precio}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Total: ${item.cantidad * item.precio}</p>
                </div>
            </div>
            <BsFillTrashFill className="cardCarro-trashcan" onClick={() => handleBorrar(item.id)}></BsFillTrashFill>
        </div>
    )
    
}

export default CardCarrito