
const Guitar = ({guitar}) => {

    const {description, imagen, url, price, name} = guitar
    console.log(imagen.data.attributes)
    // console.log(imagen.data.attributes.mime['image/svg+xml'].url);
    // const svgImageSrc = `${imagen.data.attributes.url}?mime=image/svg+xml`;

    const svgImageSrc = imagen.url ;

    return (
      <div className="guitar">
        <object data={svgImageSrc} type="image/svg+xml">
          <img src={svgImageSrc} alt="img guitarra" />
        </object>
        <div className="content">
          <h3>{name}</h3>
          <p className="description">{description}</p>
          <p className="price">{price} CLP</p>
        </div>
      </div>
    );
}

export default Guitar