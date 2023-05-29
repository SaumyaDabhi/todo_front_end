import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { todosReducer } from './reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    todosReducer
})

export const store = configureStore({
    reducer: rootReducer,
    /* middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk) */ 
    middleware: getDefaultMiddleware => getDefaultMiddleware(thunk)
});