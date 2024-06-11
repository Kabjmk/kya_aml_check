import { 
    fetchRecordLoading, 
    fetchRecordSuccess, 
    fetchRecordFail,
    searchRecords,
 } from "./recordsSlice";
 import {getAllRecords} from "../../api/recordApi";

export const fetchAllRecords = () => async dispatch => {
    dispatch(fetchRecordLoading());

 //   fetch data from API
 try {
    const result = await getAllRecords();
    dispatch(fetchRecordSuccess(result.data.result));
 } catch (error) {
    dispatch(fetchRecordFail(error.message))
 }
};

export const filterSearchRecord = (str) => (dispatch) => {
    dispatch(searchRecords(str));
};
