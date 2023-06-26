import { useLoaderData, Outlet } from "@remix-run/react"
// import PostsList from "~/components/posts-list"
// import { getPosts } from "~/models/post.server"
import styles from '~/styles/blog.css'

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

// export function meta({data}){
//   return[
//   {
//     title: `Blog - Guitar Studio`,
//     description: `Guitars, guitar store, guitar courses`
//   }
// ]
// }

// export async function loader(){
//   const posts = await getPosts()

//   return posts.data
// }

const Blog = () => {
  // const posts = useLoaderData()
  return (
    
    <main className="container">
     <Outlet/>
    </main>
  )
}

export default Blog