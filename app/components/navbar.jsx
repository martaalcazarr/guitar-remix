import { Link, useLocation } from "@remix-run/react"

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
    <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
        Blog
    </Link>
</nav>
  )
}

export default Navbar