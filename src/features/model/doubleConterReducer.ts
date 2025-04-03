import {createAction, createReducer} from '@reduxjs/toolkit'
import {DoubleCounterType, ValuesType} from '../../types/types';


export const getValuesLocalStorageAC = createAction<ValuesType>(' doubleCounter/getValuesLocalStorage');

export const onChangeValuesAC = createAction<any>('doubleCounter/onChangeValues');



const initialState: DoubleCounterType = {
    values: {max: 0, start: 0},
    status: 'setup'
}


export const doubleCounterReducer = createReducer(initialState, builder => {
    builder
        .addCase(getValuesLocalStorageAC, (state, action) => {
            state.values.start = action.payload.start
            state.values.max = action.payload.max
        })
        .addCase(onChangeValuesAC, (state, action) => {
        //     что то делает
        })
})
