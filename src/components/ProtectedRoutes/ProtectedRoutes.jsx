import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const ProtectedRoutes = ({ children }) => {
    const { user, loader } = useContext(AuthContext)

    if (loader) { 
        return 'Loading........'
    }

    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
    return children
};

export default ProtectedRoutes;