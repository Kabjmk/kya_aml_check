import { configureStore } from '@reduxjs/toolkit';
import recordsReducer from "./pages/record-list/recordsSlice";
import loginReducer from "./components/login/loginSlice";
import userReducer from "./pages/dashboard/userSlice";
import newRecordReducer from "./components/add-record-form/addRecordSlice";
import registrationReducer from "./components/registration-form/userRegistrationSlice";



const store = configureStore({ 
    reducer: {
        records: recordsReducer,
        login: loginReducer,
        user: userReducer,
        newRecord: newRecordReducer,
        registration: registrationReducer,
    }, 
});

export default store;