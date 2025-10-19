import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const { user, loading } = use(AuthContext);
const location=useLocation()

if(loading){
    return (
      <div className='w-full bg-base-200 min-h-screen flex justify-center items-center'>
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
}


    if (user && user?.email) {
        return children;
    }else{
        return <Navigate state={location?.pathname} to="/auth/login" />;
    }
    
};

export default PrivateRoute;