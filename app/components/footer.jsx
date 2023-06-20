import Navbar from "./navbar"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container content">

        </div>
        <Navbar/>
        <p className="copyright">
            Guitar Studio {new Date().getFullYear()}- Todos los derechos reservados
        </p>
    </footer>
  )
}

export default Footer