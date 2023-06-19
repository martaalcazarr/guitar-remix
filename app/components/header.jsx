import { Link} from "@remix-run/react"
import logo from '../../public/img/logo.svg'
import Navbar from "./navbar"

const Header = () => {


return (
    <header className="header">
        <div className="container bar">
            <Link to='/' className="logo">
                <img className="logo" src={logo} alt="img logo" />
            </Link>

            <Navbar/>
        </div>
    </header>
  )
}

export default Header