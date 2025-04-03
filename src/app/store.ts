import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {ViewModeReducer} from './viewModeReducer';
import {doubleCounterReducer} from '../features/model/doubleConterReducer';

const rootReducer = combineReducers({
    viewMode: ViewModeReducer,
    doubleCounter: doubleCounterReducer
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

