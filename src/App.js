import React from 'react';
import './App.css';
import Home from './pages/Home';



import { createBrowserRouter,RouterProvider,Route,Link } from "react-router-dom"
import LoginPage from './pages/LoginPage';
import SignUp from './features/auth/components/SignUp';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
    },
    {
      path:'/login',
      element:<LoginPage></LoginPage>
    },
    {
      path:'/signup',
      element:<SignUp></SignUp>
    }
])


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
       
    </div>
  );
}

export default App;

