import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Layout/Main';
import Home from './pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
 <div className="max-w-screen-xl mx-auto"> 
   <StrictMode >
    <RouterProvider  router={router} />
  </StrictMode>,
 </div>
)
