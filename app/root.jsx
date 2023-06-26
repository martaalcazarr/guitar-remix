import { useState } from 'react';
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

    const [shoppingCart, setShoppingCart] = useState([])

    const addCart = guitar =>{
        setShoppingCart([...shoppingCart, guitar])
    }
    return(
        
        <Document>
            <Outlet
            context={{
                addCart
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

