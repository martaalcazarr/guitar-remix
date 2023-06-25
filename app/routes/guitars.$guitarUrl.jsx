import { useLoaderData, useRouteError, isRouteErrorResponse, Link } from "@remix-run/react"
import { getGuitar } from "~/models/guitars.server"
import styles from '~/styles/guitars.css'

/**Manejo de errores */
export function ErrorBoundary(){
  const error = useRouteError()

  if(isRouteErrorResponse(error)){
      return(
          // <Document>
              <p className='error'>
                  {error.status} {error.statusText}
                  <Link className="error-link" to='/store'>Return to the store</Link>
              </p>
          // </Document>
      )
  }
}
export function meta({data}){
  if(!data  || Object.keys(data).length=== 0){
    return[
      {
        title: `Guitar not found - Guitar Studio`,
        description: `Guitars, guitar store, guitar courses, guitar not found `
      }
    ]
  }else{  
    return[
    {
      title: `${data.data[0].attributes.name} - Guitar Studio`,
      description: `Guitars, guitar store, guitar courses, guitar: ${data.data[0].attributes.name} `
    }
  ]} 

}

// export function links(){
//   return[
//     {
//       rel: 'stylesheet',
//       href: styles
//     }
//   ]
// }

export async function loader({request, params}){
    const {guitarUrl} = params
    const guitar = await getGuitar(guitarUrl)
    if(guitar.data.length === 0){
      throw new Response('',{
        status: 404,
        statusText: 'Guitar not found'
      })
    }
    return guitar
}

const Guitar = () => {
  const guitar = useLoaderData()
  const {name, description, imagen, price} = guitar.data[0].attributes
    return (
      <div className="guitar">
        
        
        <img className="image" src={"http://127.0.0.1:1337" + imagen.data.attributes.formats.medium.url} />
        <div className="content">
          <h3>{name}</h3>
          <p className="text">{description}</p>
          <p className="price">{price} CLP</p>
        </div>
        <Link className="link" to='/guitars'>Back to the store</Link>
      </div>
    )
  }
  
  export default Guitar