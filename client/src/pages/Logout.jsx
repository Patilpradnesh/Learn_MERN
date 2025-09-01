import { useEffect } from 'react';
import React from 'react'
import { Navigate } from 'react-router-dom';
import {useAuth}from '../store/auth';
import {toast} from 'react-hot-toast';


export const Logout=()=> {
    const {LogoutUser} = useAuth();
    
    useEffect(()=>{
      LogoutUser();
    },[]);
  
  return<Navigate to='/login'/>

 
};
