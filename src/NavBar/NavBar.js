import logo from './ivea.png'
import './NavBar.scss'
import Carrito from './CarritoLogo/Carrito'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <header className='header'>
            <div className='header-container '>
            <Link to='/'><img src={logo} className="header-img" alt='logo ivrea'/></Link>
                <nav className='Navbar' >
                    <Link to='/mangas' className="Navbar-link fs-4">mangas</Link>
                    <Link to='/libros' className="Navbar-link fs-4">libros</Link>
                    <Link to='/comics' className="Navbar-link fs-4">comics</Link>
                </nav>
                <Carrito/>
            </div>
            
        </header>
    )
}