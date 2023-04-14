import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import ErrorPage from './Pages/Errorpage/ErrorPage';
import Chart from './Pages/Chart/Chart';
import Blog from './Pages/Blog/Blog';
import NotFound from './Pages/NotFound/NotFound';
import FeaturedJobDetails from './components/FeaturedJobDetails/FeaturedJobDetails';
import AppliedJobs from './Pages/AppliedJobs/AppliedJobs';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<ErrorPage/>,
    children:[
     {
      path:'/',
      element:<Home></Home>,
      loader: () => fetch('/jobCatagory.json')
     },
     {
      path:'/chart',
      element:<Chart></Chart>
     },
     {
      path:"/blog",
      element:<Blog></Blog>
     },
     {
      path:"/jobs",
      element:<AppliedJobs></AppliedJobs>
     },
     {
      path:'featuredJob/:jobId',
      element:<FeaturedJobDetails></FeaturedJobDetails>,

      loader: async ({params}) => {
        const res = await fetch("/featuredJobs.json");
        const featuredJob = await res.json();

        const findJob = featuredJob.find(job => job.id == params.jobId);

        return findJob;
      }
     },





    {
      path:"*",
      element:<NotFound/>
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
