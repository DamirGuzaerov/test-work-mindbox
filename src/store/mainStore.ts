import {combineReducers, configureStore} from "@reduxjs/toolkit";
import TodoReducer from './slices/todoSlice/todoSlice'

const rootReducer = combineReducers({
    TodoReducer,
});

export const mainStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof mainStore>;
export type AppDispatch = AppStore["dispatch"];