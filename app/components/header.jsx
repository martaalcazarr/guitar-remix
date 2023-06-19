import { Link } from "@remix-run/react"

const Header = () => {
  return (
    <header className="header">
        <div className="container bar">
            <div className="logo">

            </div>
            <nav className="navbar">
                <Link to="/" >
                    Index
                </Link >
                <Link to="/about">
                    About us
                </Link>
                <Link to="/store">
                    Store
                </Link>
                <Link to="/blog">
                    Blog
                </Link>
            </nav>
        </div>
    </header>
  )
}

export default Header