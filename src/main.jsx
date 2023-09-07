import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Layout/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Applied from './Components/Applied/Applied.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Login from './Components/Login/Login.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:([
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/job/:jobId',
        element:<JobDetails></JobDetails>,
        loader:({params})=>fetch(`jobFeatured.json`)

      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/applied',
        element:<Applied></Applied>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'*',
        element:<NotFound></NotFound>
      }
     
      
    ])
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
