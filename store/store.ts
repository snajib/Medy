import { configureStore } from 'redux-starter-kit';

import { rootReducer } from './root-reducer';

export const buildAppStore = () => configureStore({ reducer: rootReducer });
