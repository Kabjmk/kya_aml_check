import { configureStore } from '@reduxjs/toolkit';
import recordsReducer from "./pages/record-list/recordsSlice";



const store = configureStore({ 
    reducer: {
        records: recordsReducer,
    }, 
});

export default store;