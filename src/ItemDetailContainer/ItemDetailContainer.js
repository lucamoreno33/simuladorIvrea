import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from "firebase/firestore"
import { database } from "../firebase/config"

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { libroId } = useParams()

    useEffect(() => {
        setLoading(true)
        const documentoLibro = doc(database, "productos", libroId)
        getDoc(documentoLibro)
            .then((doc) => {
                setItem(doc.data())
            })
        .finally(() => setLoading(false))

    }, [])

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