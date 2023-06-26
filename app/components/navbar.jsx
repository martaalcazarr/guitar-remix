import { Link, useLocation } from "@remix-run/react"
import image from '../../public/img/shopcar.png'

const Navbar = () => {

    const location = useLocation()

  return (
    <nav className="navbar">
    <Link to="/" className={location.pathname === '/' ? 'active' : ''} >
        Index
    </Link >
    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
        About us
    </Link>
    <Link to="/guitars" className={location.pathname === '/guitars' ? 'active' : ''}>
        Store
    </Link>
    <Link to="/post" className={location.pathname === '/post' ? 'active' : ''}>
        Blog
    </Link>
    <Link to="/shoppingcart">
       <img src={image} alt="img shopping cart"/>
    </Link>
</nav>
  )
}

export default Navbar