import { createContext, Dispatch } from 'react';
import { User, UserAuthPayload } from '../../api/userActionModels';

interface AppState {
    currentUser: User;
}
const initialAppState: AppState = {
    currentUser: { email: '', password: '', userID: '' },
} as const;

type AppStateAction = { type: 'SET_CURRENT_USER'; payload: User };

//App state Reducer
function appStateReducer(state = initialAppState, action: AppStateAction) {
    let newState = state;
    switch (action.type) {
        case 'SET_CURRENT_USER':
            newState = { ...state, currentUser: action.payload };
            break;
        default:
            break;
    }
    return newState;
}
const AppContext = createContext({
    appState: initialAppState,
    dispatchAppStateAction: (() => undefined) as Dispatch<AppStateAction>,
});
export default AppContext;
export { appStateReducer as appStateReducer, initialAppState as initialAppState };
