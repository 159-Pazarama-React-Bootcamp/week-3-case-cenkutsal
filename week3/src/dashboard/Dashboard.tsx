import React, { useContext } from 'react';
import AppContext from '../core/context/AppContext';

function Dashboard() {
    const { appState } = useContext(AppContext);
    return <h2>Hello {appState.currentUser.email}</h2>;
}

export default Dashboard;
