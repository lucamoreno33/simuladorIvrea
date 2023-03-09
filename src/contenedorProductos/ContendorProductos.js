import "./contenedor.scss"

export const ContenedorProductos = ({children}) => {
    return(
        <div className="row row-cols-1 row-cols-md-3">
            {children}
        </div>
    )
}

// 