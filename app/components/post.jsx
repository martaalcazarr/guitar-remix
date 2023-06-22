import { Link } from "@remix-run/react";
import { formatDate } from "~/utils/helpers";

export default function Post({post}){
    const {attributes} = post
    console.log(post)
    return (
      <article className="post">
        <img src={"http://127.0.0.1:1337" + attributes.image.data.attributes.url} alt="" />
        <div className="content">
          <h3>{attributes.title}</h3>
          <p className="date">{formatDate(attributes.publishedAt)}
          </p>
          <p className="resume">{attributes.content}</p>
          <Link className="link" to={`/posts/${attributes.url}`}>Read post</Link>
        </div>
      </article>
        // <div>
        //   <h1>{attributes.title}</h1>
        //   <p>{attributes.content}</p>
        //   <img src={"http://127.0.0.1:1337" + attributes.image.data.attributes.url} alt="" />
        // </div>
      );
    }
//     return(
//         <div>post</div>
//         // <article>
//         //     <img className="image" src={"http://127.0.0.1:1337" + image.data.attributes.formats.medium.url} alt="" />
//         // </article>
//     )
// }