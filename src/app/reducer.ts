
import {createAction, createReducer} from '@reduxjs/toolkit'
import {ViewModeType} from '../types/types';





export const changeViewModeAC =  createAction <{viewMode: ViewModeType}> ("CHANGE_VIEW_MODE");


const initialState = {
    viewMode: 'single' as ViewModeType,
}

export const appReducer = createReducer(initialState, builder => {
    builder
        .addCase(changeViewModeAC, (state, action) => {
            state.viewMode = action.payload.viewMode
        })
})






