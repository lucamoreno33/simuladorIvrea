import './ItemDetail.scss'

const ItemDetail = ({item}) => {
    return(
        <div className='ItemDetail'> 
            <h2>{item.nombre}</h2>
            <div className='ItemDetail-main row'>
                <img src={`../${item.imagen}`} alt={item.nombre} className="ItemDetail-imagen col-4"/>
                <div className='ItemDetail-data col-8'>
                    <p className='ItemDetail-texto '>{item.descripcion}</p>
                    <p className='ItemDetail-precio'>Precio: ${item.precio}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
