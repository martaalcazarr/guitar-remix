import image from '../../public/img/us.jpg'
import styles from '../styles/about.css'

export function links(){
  return [
    {
    rel: 'stylesheet',
    href: styles
    },
    {
      rel: 'preload',
      href: image,
      as: 'image'
    }
  ]
}

export function meta(){
    return[
        {
            title: 'About us - Guitar Studio ',
            description: `Guitars, guitar store, guitar courses`
        }
    ]
}

const About = () => {
  return (
    <main className="container about-us">
      <h2 className="heading">
        About us
      </h2>
      <div className="content">
        <img src={image} alt="about us" />
        <div>
          <p>Welcome to our guitar and guitar lessons store ! We are a passionate team of musicians and guitar enthusiasts dedicated to providing our customers with the best musical experience possible. Whether you're looking for your first guitar or wanting to enhance your guitar skills, we are here to assist you every step of the way.</p>
        </div>
      </div>
    </main>
  )
}

export default About