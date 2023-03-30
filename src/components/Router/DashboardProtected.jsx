import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Loader from '../Loader/Loader';


const DashboardProtected = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    let location = useLocation();
    const [admin, adminLoader] = useAdmin(user?.email);
    
 

    if (adminLoader || loader) {
        return <Loader />
    }    

    console.log('loader', admin)
    if (user?.email && admin) {
        return children;
    }

   

    return <Navigate to="/" state={{ from: location }} replace />;
};

export default DashboardProtected;