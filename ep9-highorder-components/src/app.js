import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom'
import ContactUs from './components/ContactUs';
import About from './components/About';
import Error from './components/Error';
import Body from './components/Body';
import NavBar from './components/NavBar';
import RestoPage from './components/RestoPage';
import UserContext from './utils/UserContext';


const AppComponent = () => {
      return (
            <div>
                  <NavBar />
                  <Outlet />
            </div>
      )
}


const ReactRouter = createBrowserRouter([
      {
            path: '/',
            element: <AppComponent/>,
            children: [
                  {
                        path:'/',
                        element: <Body/>
                  },
                  {
                        path:'/about',
                        element: <About/>
                  },
                  {
                        path:'/contact-us',
                        element: <ContactUs/>
                  },
                  {
                        path:'restaurant/:resId',
                        element: <RestoPage />
                  }
            ],
            errorElement: <Error />
      },
      
])


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={ReactRouter} />);