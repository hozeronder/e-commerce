import {configureStore} from '@reduxjs/toolkit';
import searchboxReducer from './searchboxSlice';


export const store = configureStore({
    reducer: {
        searchbox: searchboxReducer,

    },
});

export default store;
