import React, { useEffect, useReducer, useRef, useState } from 'react';
import { User } from '../../api/userActionModels';
import userActionsApi from '../../api/userActionsApi';
import useAsyncProcess from '../network/async-process/useAsyncProcess';
import AppContext, { appStateReducer, initialAppState } from './AppContext';

interface AppContextProviderProps {
    children: React.ReactNode;
}

function AppContextProvider({ children }: AppContextProviderProps) {
    const [appState, dispatchAppStateAction] = useReducer(appStateReducer, initialAppState);
    const { state, runAsyncProcess } = useAsyncProcess<User>();
    const [user, setUser] = useState();
    const userID = localStorage.getItem('userID');
    useEffect(() => {
        (async () => {
            try {
                if (userID) {
                    const response = await runAsyncProcess(userActionsApi.getUserById(userID));
                    dispatchAppStateAction({ type: 'SET_CURRENT_USER', payload: response });
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    useEffect(() => {
        const loggedInUserID = localStorage.getItem('userID');
        if (loggedInUserID) {
            const foundUser = JSON.parse(loggedInUserID);
            setUser(foundUser);
        }
    }, []);
    return (
        <AppContext.Provider
            value={{
                appState: appState,
                dispatchAppStateAction: dispatchAppStateAction,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
export default AppContextProvider;
function runAsyncProcess(arg0: any) {
    throw new Error('Function not implemented.');
}
