export default function Post({post}){
    const {attributes} = post
    console.log(post)
    return (
        <div>
          <h1>{attributes.title}</h1>
          <p>{attributes.content}</p>
          <img src={"http://127.0.0.1:1337" + attributes.image.data.attributes.url} alt="" />
        </div>
      );
    }
//     return(
//         <div>post</div>
//         // <article>
//         //     <img className="image" src={"http://127.0.0.1:1337" + image.data.attributes.formats.medium.url} alt="" />
//         // </article>
//     )
// }