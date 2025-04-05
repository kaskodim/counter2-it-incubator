import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {ViewModeReducer} from './viewModeReducer';
import {doubleCounterReducer} from '../common/double/doubleReduser';
import { singleReducer } from "../common/single/singleReduser"


const rootReducer = combineReducers({
    viewMode: ViewModeReducer,
    doubleCounter: doubleCounterReducer,
    singleCounter: singleReducer,
});

export const store = configureStore({
    reducer: rootReducer

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

