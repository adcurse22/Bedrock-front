import { configureStore } from '@reduxjs/toolkit';
import notesSlice from 'entities/notes/model/slice';
import { sessionSlice } from 'entities/session';

export const store = configureStore({
    reducer: {
        [sessionSlice.name]: sessionSlice.reducer,
        [notesSlice.name]: notesSlice.reducer
    }
});
