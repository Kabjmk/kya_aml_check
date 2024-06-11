import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { DefaultLayout } from '../../layout/DefaultLayout';


let isAuth = true;
export const PrivateRoute = () => {
    
  return isAuth ? <DefaultLayout><Outlet/></DefaultLayout> : <Navigate to="/"/>
  
};

