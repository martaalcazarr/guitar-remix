import { useOutletContext } from '@remix-run/react'
import styles from '~/styles/shoppingcart.css'

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
    title: `Shopping Cart - Guitar Studio`,
    description: `Guitars, guitar store, guitar courses`
  }
]
}
function ShoppingCart(){
    const {shoppingCart} = useOutletContext()
    console.log(shoppingCart)
    return(
        <main className="container">
            <h1 className="heading">Shopping Cart</h1>
            <div className="content">
                <div className='cart'>
                    <h2>Articles</h2>
                    {shoppingCart.length === 0 ? 'Your shopping cart is empty' : (
                        shoppingCart.map(product =>(
                            <div key={product.id} className='product'> 
                                <div>
                                    <img src={"http://127.0.0.1:1337" + product.image} alt={`Imagen de ${product.name}`} />
                                </div>
                                <div>
                                    <p className='name'>{product.name}</p>
                                    <p>Quantity: {product.quantity}</p>


                                    <p className='price'> <span>{product.price}</span> CLP</p>
                                    <p className='subtotal'>Subtotal: <span>{product.quantity * product.price}</span> CLP</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <aside className="resume">
                <p>Your order</p>
                <p>Total: CLP</p>
            </aside>
        </main>
    )
}

export default ShoppingCart