import "./contenedor.scss"
import { useEffect, useState } from 'react'
import Itemlist from '../Itemlist/Itemlist'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { database } from '../firebase/config'


export const ItemlistContainer = () => {
    const [libros, setLibros] = useState([])
    const [loading, setLoading] = useState(true)
    const {TipoLibro} = useParams()

    useEffect(() => {
        setLoading(true)
        const coleccionProductos = collection(database, "productos")
        const filtro = TipoLibro
                        ? query(coleccionProductos, where("tipo", "==", TipoLibro))
                        : coleccionProductos
        getDocs(filtro)
            .then((res) => {
                setLibros(res.docs.map((doc) => doc.data()))
            })
            .finally(() => setLoading(false))
    }, [TipoLibro])

    return (
        <section className='d-flex flex-column container'>
            <h2 className="subtitulo">Novedades de la semana</h2>
            {loading
            ? <h2>Cargando</h2> 
            : <div className="container my-5">   
                <Itemlist cards={libros}/>
                </div>
            }
        </section>
    )
}