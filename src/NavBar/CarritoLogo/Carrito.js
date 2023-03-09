import { BsCart4 } from 'react-icons/bs'
import './Carrito.scss'

const Carrito = () => {
    return(
        <div className='carrito d-flex'>
            <BsCart4 className='carrito-logo'/>
            <div className='carrito-cantidad'>
            <span>0</span>  
            </div>
        </div>
    )

}
export default Carrito
