import logo from './ivea.png'
import './NavBar.scss'
import Carrito from './CarritoLogo/Carrito'

export const NavBar = () => {
    return (
        <header className='header'>
            <div className='header-container '>
                <img src={logo} className="header-img" alt='logo ivrea'/>
                <nav className='Navbar' >
                    <p className='Navbar-link fs-4'>Mangas</p>
                    <p className='Navbar-link fs-4'>Novelas</p>
                    <p className='Navbar-link fs-4'>Novedades</p>
                </nav>
                <Carrito/>
            </div>
            
        </header>
    )
}