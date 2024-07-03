import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { loginSuccess } from "../login/loginSlice";
import { DefaultLayout } from '../../layout/DefaultLayout';
import { fetchNewAccessJWT } from '../../api/userApi';
import {getUserProfile} from "../../pages/dashboard/userAction";

export const PrivateRoute = () => {

  const {isAuth} = useSelector(state => state.login);
  const {user} = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const updateAccessJWT = async () => {//this is the way to run async function with useEffet
      const result = await fetchNewAccessJWT();
      result && dispatch(loginSuccess());
      
    }  

    !user._id && dispatch(getUserProfile());

    !sessionStorage.getItem('accessJWT') && sessionStorage.getItem('kycSite') && updateAccessJWT();

   !isAuth && sessionStorage.getItem('accessJWT') && dispatch(loginSuccess());
  }, [dispatch, isAuth, user._id]);
  
    
  return isAuth ? <DefaultLayout><Outlet/></DefaultLayout> : <Navigate to="/"/>
  
};

