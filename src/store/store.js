import { configureStore } from "@reduxjs/toolkit";
import { authStore } from "../auth";

export const store = configureStore({
    reducer: {
        [authStore.name]: authStore.reducer
    }
})