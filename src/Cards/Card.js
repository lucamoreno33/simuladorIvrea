import { Link } from 'react-router-dom'
import './Card.scss'


export const Card = ({card}) => {
    return(
            <div className='card col-lg-3 col-md-5 col-sm-12'>
                <img src={card.imagen} className="card-imagen" alt={card.nombre}/>
                <div className='card-body'>
                    <h5>{card.nombre}</h5>
                    <p>tipo: {card.tipo}</p>
                    <p>precio: ${card.precio}</p>
                    <Link to={`/${card.tipo}/${card.id}`} className="btn btn-primary card-boton m-1" id="botonCompra">ver mas</Link>
                </div>
            </div>
    )
}

