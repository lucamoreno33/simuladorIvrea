import './Card.scss'
export const Card = ({imagen, nombre, tipo, precio}) => {
    return(
        <div className='col'>
            <div className='card'>
                <img src={imagen} className="card-imagen" alt={nombre}/>
                <div className='card-body'>
                    <h5>{nombre}</h5>
                    <p>tipo: {tipo}</p>
                    <p>precio: ${precio}</p>
                    <button className="btn btn-primary card-boton" id="botonCompra">agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}


