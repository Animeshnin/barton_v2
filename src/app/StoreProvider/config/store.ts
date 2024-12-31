import {combineReducers, configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema} from "@/app/StoreProvider/config/StateSchema.ts";
import {userReducer} from '@/entities/User'
import {loginReducer} from "@/features/AuthByUsername";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = combineReducers({
        user: userReducer,
        loginForm: loginReducer
    })

    return configureStore<StateSchema>({
        reducer: rootReducer,
        preloadedState: initialState,
    })
}

