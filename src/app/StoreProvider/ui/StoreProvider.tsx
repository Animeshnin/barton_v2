import React from "react";
import {Provider} from "react-redux";
import {createReduxStore} from "@/app/StoreProvider/config/store.ts";
import {StateSchema} from "@/app/StoreProvider/config/StateSchema.ts";

interface StoreProviderProps {
    children?: React.ReactNode;
    initialState?: StateSchema;
}

export const StoreProvider =({children, initialState}: StoreProviderProps) => {

    const store = createReduxStore(initialState);


    return (
        // @ts-ignore
        <Provider store={store}>
            {children}
        </Provider>
    );
}

