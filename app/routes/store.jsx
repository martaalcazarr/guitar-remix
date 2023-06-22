import { useLoaderData } from "@remix-run/react"
import { getGuitars } from "~/models/guitars.server"
import Guitar from "~/components/guitar"
import styles from '~/styles/guitars.css'
export function meta({data}){
  return[
  {
    title: `Store - Guitar Studio`,
    description: `Guitars, guitar store, guitar courses`
  }
]
}
export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

//para traer las imagenes
export async function loader(){
 const guitars = await getGuitars()
 return guitars.data
}

const Store = () => {

  const guitars = useLoaderData()

  return (
    <main className="container">
      <h2 className="heading">
        Our collection
      </h2>
      {guitars?.length && (
        <div className="guitars-grid">
          {guitars.map(guitar => (
            <Guitar
              key={guitar?.id}
              guitar={guitar?.attributes}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Store