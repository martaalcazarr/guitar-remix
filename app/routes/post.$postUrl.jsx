import { getPost } from "~/models/post.server"
import { useLoaderData, useRouteError, isRouteErrorResponse, Link } from "@remix-run/react"
import styles from '~/styles/blog.css'
import { formatDate } from "~/utils/helpers";

export function meta({data}){
    if(!data  || Object.keys(data).length=== 0){
      return[
        {
          title: `Post not found - Guitar Studio`,
          description: `Guitars, guitar store, guitar courses, guitar not found `
        }
      ]
    }else{  
      return[
      {
        title: `${data.data[0].attributes.title} - Guitar Studio`,
        description: `Guitars, guitar store, guitar courses, guitar: ${data.data[0].attributes.title} `
      }
    ]} 
  
  }
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
                    <Link className="error-link" to='/post'>Return to the blog</Link>
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
    const {title, content, image, publishedAt} = post.data[0].attributes
    return(
       <article className="post mt-3">
        <img src={"http://127.0.0.1:1337" + image.data.attributes.url} alt="" />
        <div className="content">
          <h3>{title}</h3>
          <p className="date">{formatDate(publishedAt)}
          </p>
          <p className="text">{content}</p>
          <Link className="link" to={`/post`}>Return to blog</Link>
        </div>
       </article>
    )
}

export default Post