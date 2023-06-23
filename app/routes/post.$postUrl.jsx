import { getPost } from "~/models/post.server"
import { useLoaderData, useRouteError, isRouteErrorResponse, Link } from "@remix-run/react"
import styles from '~/styles/blog.css'

export async function loader({params}){
    const {postUrl} = params
    const post = await getPost(postUrl)
    if(post.data.length === 0){
        throw new Response('',{
            status: 404,
            statusText: 'Post not found'
        })
    }
    return post
}

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

  export function links(){
    return[
      {
        rel: 'stylesheet',
        href: styles
      }
    ]
  }

const Post = () => {

    const post = useLoaderData()
    console.log(post)
    const {title} = post.data[0].attributes
    return(
        <div>{title}</div>
    )
}

export default Post