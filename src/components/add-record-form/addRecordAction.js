import { 
    openNewRecordPending,
    openNewRecordSuccess,
    openNewRecordFail,
} from "./addRecordSlice";
import {createNewRecord} from "../../api/recordApi";


export const openNewRecord = (frmData) => (dispatch) => {
    return new Promise (async (resolve, reject) => {
        try {
            dispatch(openNewRecordPending());

            //call API
            const result = await createNewRecord(frmData);
            console.log(result);
            if(result.status === "error") {
                dispatch(openNewRecordFail(result.message));
            }

            dispatch(openNewRecordSuccess(result.message));
            
        } catch (error) {   
            dispatch(openNewRecordFail(error.message));
        }
    })
}