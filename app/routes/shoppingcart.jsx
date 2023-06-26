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
    return(
        <main className="container">
            <h1 className="heading">Shopping Cart</h1>
            <div className="content">
                <div className='cart'>
                    <h2>Articles</h2>
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