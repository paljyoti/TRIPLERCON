import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import AboutUs from './component/Blog.jsx'
import Aboutpage from './Aboutpage.jsx'
import Contact from './page/Contact.jsx'
import BlogPage from './page/BlogPage.jsx'




const  router = createHashRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path:"/aboutus",
    element: <Aboutpage/>
  },
  {
    path:"/contact",
    element: <Contact/>
  },
  {
    path:"/blog",
    element: <BlogPage/>
  },
])

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
   
  </StrictMode>
 
)
