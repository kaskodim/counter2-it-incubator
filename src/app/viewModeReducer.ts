import {createAction, createReducer} from '@reduxjs/toolkit'
import {ViewModeType} from '../types/types';

export const changeViewModeAC =  createAction <{viewMode: ViewModeType}> ('app/changeViewMode');

const initialState = {
    viewMode: 'single' as ViewModeType,
}

export const ViewModeReducer = createReducer(initialState, builder => {
    builder
        .addCase(changeViewModeAC, (state, action) => {
            state.viewMode = action.payload.viewMode
        })
})
