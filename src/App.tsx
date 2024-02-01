import { Helmet, HelmetProvider } from 'react-helmet-async'
import './global.css'
import { router } from './routes' 
import { RouterProvider } from 'react-router-dom'
export function App() { 

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <RouterProvider  router={router}/>
    </HelmetProvider>
  )
}
 
