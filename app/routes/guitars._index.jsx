import { useLoaderData, Outlet } from "@remix-run/react"
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

export async function loader(){
 const guitars = await getGuitars()
 return guitars.data
}

const Store = () => {

//   const guitars = useLoaderData()

  return (
    <main className="container">
      {/* <GuitarsList
      guitars={guitars}
      /> */}
    </main>
  )
}

export default Store