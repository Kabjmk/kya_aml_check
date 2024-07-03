import { configureStore } from '@reduxjs/toolkit';
import recordsReducer from "./pages/record-list/recordsSlice";
import loginReducer from "./components/login/loginSlice";
import userReducer from "./pages/dashboard/userSlice";
import newRecordReducer from "./components/add-record-form/addRecordSlice";



const store = configureStore({ 
    reducer: {
        records: recordsReducer,
        login: loginReducer,
        user: userReducer,
        newRecord: newRecordReducer,
    }, 
});

export default store;