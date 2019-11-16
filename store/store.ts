// import { configureStore } from "redux-starter-kit";
import { createStore } from 'redux';
import { rootReducer } from './root-reducer';

export const buildAppStore = () => createStore(rootReducer);
