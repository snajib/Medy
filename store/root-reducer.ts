import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { appActionReducer } from './app-action-reducer';

export const rootReducer = combineReducers({ appActionReducer });

export type RootState = StateType<typeof rootReducer>;
