import { configureStore } from "@reduxjs/toolkit";
import {  useSelector as useReduxSelector, TypedUseSelectorHook } from "react-redux";
import layoutReducer from '../components/layouts/reducer'


const store= configureStore({
    reducer:{
        layout: layoutReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
