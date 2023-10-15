import { createSlice } from '@reduxjs/toolkit';

const initialState = { searchbox: [] };

const searchboxSlice = createSlice({
    name: 'searchbox',
    initialState,
    reducers: {
        setSearchbox: (state, action) => {
            state.searchbox = action.payload;
        },
    },
});

export const { setSearchbox } = searchboxSlice.actions;

export default searchboxSlice.reducer;
