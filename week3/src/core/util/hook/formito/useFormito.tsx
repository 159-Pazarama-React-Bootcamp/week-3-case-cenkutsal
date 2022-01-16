import { Reducer, useReducer } from 'react';

import formitoStateReducer, { FormitoReducerAction } from './formitoStateReducer';

// This version is an experiment, i'll be testing and adding new features
function useFormito<T>(initialState: T) {
    const [formitoState, dispatchFormitoAction] = useReducer<Reducer<T, FormitoReducerAction<T>>>(
        formitoStateReducer,
        initialState,
    );

    return {
        formitoState,
        dispatchFormitoAction,
    };
}

export default useFormito;

/* USAGE:
  const initialLoginFormState = {
    email: "",
    password: ""
    rememberMe: false
  };

  const {formitoState, dispatchFormitoAction} = useFormito(initialLoginFormState);

  dispatchFormitoAction({
    type: "SET_FORM_VALUE",
    payload: {
      [currentTarget.name]: currentTarget.value
    }
  })
*/
