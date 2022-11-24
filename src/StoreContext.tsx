import React, {createContext} from "react";
import  {TReduxStore} from "./redux/reduxStore";


export const StoreContext = createContext({} as TReduxStore)

export type ProviderType = {
    store: TReduxStore
    children: React.ReactNode
}

export const Provider = (props:ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

