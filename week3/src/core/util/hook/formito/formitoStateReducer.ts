type FormitoReducerAction<T> = {
    type: 'SET_FORM_VALUE';
    payload: Partial<T>;
};

function formitoStateReducer<T>(state: T, action: FormitoReducerAction<T>): T {
    let newState = state;

    switch (action.type) {
        case 'SET_FORM_VALUE': {
            newState = {
                ...state,
                ...action.payload,
            };

            break;
        }

        default:
            break;
    }

    return newState;
}

export default formitoStateReducer;
export type { FormitoReducerAction };
