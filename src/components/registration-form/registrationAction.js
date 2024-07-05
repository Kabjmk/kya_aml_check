//import { useDispatch } from "react-redux";
import {registrationPending, registrationSuccess, registrationError} from "./userRegistrationSlice";
import {userRegistration} from "../../api/userApi";

//receive form data, sends to API, receives feedbck from server, to update the redux store with
export const newUserRegistration = (frmDt) => async (dispatch) => {
    
    try {
        dispatch(registrationPending()); 
        //api
        const result = await userRegistration(frmDt);
        if(result.status === 'success') {
            dispatch(registrationSuccess(result.message));  
        } else {
            dispatch(registrationError(result.message))
        }
        console.log(result);
         
    } catch (error) {
        dispatch(registrationError(error.message))
    }

}