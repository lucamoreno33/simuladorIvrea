import { useEffect, useState } from 'react'

import Itemlist from '../Itemlist/Itemlist'
import "./contenedor.scss"
import libreria from "../data/libros.json"
import { useParams } from 'react-router-dom'

export const ItemlistContainer = () => {
    const [libros, setLibros] = useState([])
    const [loading, setLoading] = useState(true)
    const {TipoLibro} = useParams()
    console.log(TipoLibro)

    const PedirDatos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(libreria)
            }, 1500)
        })
    }

    useEffect(() => {
        setLoading(true)
        PedirDatos()
        .then((res) => {
            if (TipoLibro){
                setLibros(res.filter((libro) => libro.tipo === TipoLibro))
            }else{
                setLibros(res)
            }
        })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
            
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