import { Link } from "@remix-run/react"; 

const Guitar = ({guitar}) => {

    const {description, imagen, url, price, name} = guitar
    console.log(imagen.data.attributes.formats.medium.url)
   
   
    return (
      <div className="guitar">
  
        <img src={"http://127.0.0.1:1337" + imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra ${name}`} />
        <div className="content">
          <h3>{name}</h3>
          <p className="description">{description}</p>
          <p className="price">{price} CLP</p>
          <Link className="link" to={`/guitars/${url}`}>More info</Link>
        </div>
      </div>
    );
}

export default Guitar