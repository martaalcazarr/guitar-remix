import { Link, useLocation } from "@remix-run/react"
import logo from '../../public/img/logo.svg'

const Header = () => {

    const location = useLocation()
    console.log(location)

return (
    <header className="header">
        <div className="container bar">
            <Link to='/' className="logo">
                <img className="logo" src={logo} alt="img logo" />
            </Link>
            <nav className="navbar">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''} >
                    Index
                </Link >
                <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                    About us
                </Link>
                <Link to="/store" className={location.pathname === '/store' ? 'active' : ''}>
                    Store
                </Link>
                <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
                    Blog
                </Link>
            </nav>
        </div>
    </header>
  )
}

export default Header