import {StateSchema} from "@/app/StoreProvider/config/StateSchema";

export const getLoginState = (state: StateSchema) => state?.loginForm;
