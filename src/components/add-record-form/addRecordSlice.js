import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    error: "",
    successMsg: "",
};

const newRecordSlice = createSlice({
    name: 'newRecord',
    initialState,
    reducers: {
        openNewRecordPending: (state) => {
            state.isLoading = true;
        },
        openNewRecordSuccess: (state, {payload}) => {
            state.isLoading = false;
            state.successMsg = payload;
        },
        openNewRecordFail: (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        },
        resetSuccessMsg: (state) => {
            state.isLoading = true;
            state.successMsg = "";
        },
    }
});

//const {reducer, actions} = createNewRecordSlice;

export const { 
    openNewRecordPending,
    openNewRecordSuccess,
    openNewRecordFail,
    resetSuccessMsg,
} = newRecordSlice.actions;
         
export default newRecordSlice.reducer;