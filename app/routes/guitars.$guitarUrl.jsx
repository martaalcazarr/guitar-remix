import { useLoaderData } from "@remix-run/react"
import { getGuitar } from "~/models/guitars.server"
import styles from '~/styles/guitars.css'

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader({request, params}){
    const {guitarUrl} = params
    const guitar = await getGuitar(guitarUrl)
    
    return guitar
}

const Guitar = () => {
  const guitar = useLoaderData()
  const {name, description, imagen, price} = guitar.data[0].attributes
    return (
      <main className="container guitar">
        
        
        <img className="image" src={"http://127.0.0.1:1337" + imagen.data.attributes.formats.medium.url} />
        <div className="content">
          <h3>{name}</h3>
          <p className="text">{description}</p>
          <p className="price">{price} CLP</p>
        </div>
      </main>
    )
  }
  
  export default Guitar