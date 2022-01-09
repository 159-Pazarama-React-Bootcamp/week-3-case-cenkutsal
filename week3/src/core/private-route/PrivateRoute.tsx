import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
interface PrivateRouteProps {
    children: React.ReactNode;
}

function PrivateRoute(children: PrivateRouteProps) {
    const { appState } = useContext(AppContext);

    const auth = useAuth();
    return (
        <>
            {auth} ? children : <Navigate to="/login" />;
        </>
    );
    async function useAuth() {
        if (appState.currentUser) {
            return true;
        } else return false;
    }
}

export default PrivateRoute;
