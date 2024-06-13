import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { loginSuccess } from "../login/loginSlice";
import { DefaultLayout } from '../../layout/DefaultLayout';
import { fetchNewAccessJWT } from '../../api/userApi';

export const PrivateRoute = () => {

  const {isAuth} = useSelector(state => state.login);

  const dispatch = useDispatch();

  useEffect(() => {
    const updateAccessJWT = async () => {//this is the way to run async function with useEffet
      const result = await fetchNewAccessJWT();
      if(result){
        dispatch(loginSuccess());
      }
    }
   if(sessionStorage.getItem('accessJWT')) {dispatch(loginSuccess())};
  }, [dispatch]);
  
    
  return isAuth ? <DefaultLayout><Outlet/></DefaultLayout> : <Navigate to="/"/>
  
};

