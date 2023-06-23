import { useLoaderData } from "@remix-run/react"
import Post from "~/components/post"
import { getPosts } from "~/models/post.server"
import styles from '~/styles/blog.css'

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export function meta({data}){
  return[
  {
    title: `Blog - Guitar Studio`,
    description: `Guitars, guitar store, guitar courses`
  }
]
}

export async function loader(){
  const posts = await getPosts()
  console.log(posts)
  return posts.data
}

const Blog = () => {
  const posts = useLoaderData()
  return (
    
    <main className="container">
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map(post =>
          <Post
          key={post.id}
          post={post}
          />)}
      </div>
    </main>
  )
}

export default Blog