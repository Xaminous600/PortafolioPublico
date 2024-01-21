import { createContext, useReducer } from "react";

export const LanguajeContext = createContext();

const initialStateLanguaje = 'esp';

function reducerLanguaje(state, action){
    switch(action.type){
        case 'CHANGE_LANGUAJE':{
            return action.payload;
        }

        return state;
    }
}

export function LanguajeProvider({children}){

    const [state, dispatch] = useReducer(reducerLanguaje, initialStateLanguaje);

    function changeLanguaje(languaje){
        dispatch({
            type: 'CHANGE_LANGUAJE',
            payload: languaje
        })
    }

    return(
        <LanguajeContext.Provider value={{
            initialStateLanguaje: state,
            changeLanguaje,
        }}>
            {children}
        </LanguajeContext.Provider>
    )
}