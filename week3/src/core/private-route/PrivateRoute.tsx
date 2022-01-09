import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AppContext from '../context/AppContext';

function PrivateRoute() {
    const { appState } = useContext(AppContext);

    const auth = useAuth();
    return auth ? <Outlet /> : <Navigate to="/login" />;
    function useAuth() {
        if (appState.currentUser.userID === localStorage.getItem('userID')) {
            return true;
        } else return false;
    }
}

export default PrivateRoute;
