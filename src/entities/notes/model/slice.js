import { createSlice } from '@reduxjs/toolkit';
import { NOTES } from '../api/__mocks__/notesMock';

const initialState = {
    notes: NOTES
};
/* eslint no-param-reassign: "off" */
const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {}
});

export default notesSlice;
