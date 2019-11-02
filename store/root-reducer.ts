import { combineReducers } from 'redux';
import { appActionReducer } from './app-action-reducer';

export const rootReducer = combineReducers({ appActionReducer });
