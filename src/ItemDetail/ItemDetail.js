import { useContext, useState } from "react"
import "./ItemDetail.scss"
import { CartContext } from "../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"


const ItemDetail = ({item}) => {
    const { agregarAlCarrito, estaEnCarrito} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)
    const handleAgregar = () =>{
        const newItem = {...item, cantidad}
        agregarAlCarrito(newItem)
    }
    return(
        <div className='ItemDetail'> 
            <h2>{item.nombre}</h2>
            <div className='ItemDetail-main row'>
                <img src={`${item.imagen}`} alt={item.nombre} className="ItemDetail-imagen col-4"/>
                <div className='ItemDetail-data col-8'>
                    <p className='ItemDetail-texto '>{item.descripcion}</p>
                    <p className='ItemDetail-precio'>Precio: ${item.precio}</p>
                    {
                        estaEnCarrito(item.id)
                            ? <div className="d-flex flex-column">
                                <Link  to="/carrito" className="btn btn-success ItemDetail-link">Terminar mi compra</Link>
                                <Link to="/" className="btn btn-success ItemDetail-link">Seguir Comprando</Link>
                            </div>
                            : <ItemCount 
                                stock={item.stock}
                                cantidad={cantidad}
                                setCantidad={setCantidad}
                                agregar={handleAgregar}
                                />
                    }

                </div>
                
            </div>
            
        </div>
    )
}

export default ItemDetail
