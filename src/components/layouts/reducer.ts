'use client';

import { createSlice } from "@reduxjs/toolkit";
import { setCookies } from "./utils";

interface themeState {
    themeMode: string
    isLoading:boolean
    collapseSidebar:string
    sidebar:{
        isMini:boolean
    }
}

const getDefaultThemeMode=()=>{
    return 'dark';
}

const initialState: themeState={
    themeMode:getDefaultThemeMode(),
    isLoading:false,
    collapseSidebar:'false',
    sidebar:{
        isMini: false
    }
}

const layoutSlice=createSlice({
    name:'theme',
    initialState,
    reducers:{
        themeToggle(state,action){
            setCookies('themeMode', action.payload)
            state.themeMode= action.payload
        },
        sidebarToggle(state,action){
            setCookies('collapse-sidebar', action.payload)
            state.collapseSidebar=action.payload
        },
        layoutLoading(state,action){
            state.isLoading=action.payload
        },
    }
})

export const {themeToggle,sidebarToggle,layoutLoading} = layoutSlice.actions

export default layoutSlice.reducer