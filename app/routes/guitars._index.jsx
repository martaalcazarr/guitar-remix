import { useLoaderData} from "@remix-run/react"
import { getGuitars } from "~/models/guitars.server"
import GuitarsList from "~/components/guitars-list"
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
  
      <GuitarsList
      guitars={guitars}
      />
      

  )
}

export default Store