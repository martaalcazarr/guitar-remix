
const Guitar = ({guitar}) => {

    const {description, imagen, url, price, name} = guitar
    console.log(imagen.data.attributes.formats.medium.url)
    // console.log(imagen.data.attributes.mime['image/svg+xml'].url);
    // const svgImageSrc = `${imagen.data.attributes.url}?mime=image/svg+xml`;
console.log(imagen)
   
    return (
      <div className="guitar">
        {/* <object data={svgImageSrc} type="image/svg+xml">
          <img src={svgImageSrc} alt="img guitarra" />
        </object> */}
        <img src={"http://127.0.0.1:1337" + imagen.data.attributes.formats.medium.url} alt="as" />
        <div className="content">
          <h3>{name}</h3>
          <p className="description">{description}</p>
          <p className="price">{price} CLP</p>
        </div>
      </div>
    );
}

export default Guitar