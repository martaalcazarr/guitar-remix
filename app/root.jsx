import { useState, useEffect } from 'react';
import {
    Meta,
    Links,
    Outlet,
    Scripts, 
    LiveReload,
    useRouteError,
    isRouteErrorResponse
} from '@remix-run/react'
import styles from './styles/index.css'
import Header from './components/header';
import Footer from './components/footer';

export function meta() {
    return [
      {
        charset: 'utf-8',
        title: 'Guitar Studio',
        viewport: "width=device-width,initial-scale=1"
      }
    ];
  }

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: "true"
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href:  styles
         }
    ]
}
  

export default function App(){

    //si es del servidor, que no haga nada, pero si es del cliente que haga json.parse
    const shoppingCartLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('shoppingCart')) ?? [] : null
    const [shoppingCart, setShoppingCart] = useState(shoppingCartLS)

    useEffect(() =>{
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
    }, [shoppingCart])

    const addCart = guitar =>{
        // setShoppingCart([...shoppingCart, guitar])
        if(shoppingCart.some(guitarState => guitarState.id === guitar.id)){
            const updatedCart = shoppingCart.map(guitarState =>{
                if(guitarState.id === guitar.id){
                    //rewrite quantity
                    guitarState.quantity = guitar.quantity
                    //or sum both quantitys
                    // guitarState.quantity += guitar.quantity
                }
                return guitarState
            })
            //add to cart
            setShoppingCart(updatedCart)
        }else{
            //new, add to cart
            setShoppingCart([...shoppingCart, guitar])
        }
    }

    const updateQuantity = guitar => {
        const updatedCart = shoppingCart.map(guitarState => {
           if(guitarState.id === guitar.id){
            guitarState.quantity = guitar.quantity
           }
           return guitarState
        })
        setShoppingCart(updatedCart)
    }

    const deleteGuitar = id => {
        const updatedCart = shoppingCart.filter(guitarState => guitarState.id !== id)
            setShoppingCart(updatedCart)
        
    }
    return(
        
        <Document>
            <Outlet
            context={{
                addCart,
                shoppingCart,
                updateQuantity,
                deleteGuitar
            }} />
        </Document>
    )
}

function Document({children}){
    return(
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer/>
                <Scripts/>
                <LiveReload/>
            </body>
        </html>
    )
}

