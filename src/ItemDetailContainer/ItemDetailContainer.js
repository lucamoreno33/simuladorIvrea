import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PedirDatos } from "../Helpers/PedirDatos"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { TipoLibro, libroId} = useParams()
    console.log(TipoLibro)
    console.log(libroId)

    useEffect(() => {
        setLoading(true)

        PedirDatos()
            .then((res) => {
                setItem( res.find((prod) => prod.id === Number(libroId) && prod.tipo === TipoLibro) )  
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    console.log(item)
    
    return(
        <div className="container my-5">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer