import { 
    fetchRecordLoading, 
    fetchRecordSuccess, 
    fetchRecordFail,
    fetchSingleRecordLoading, 
    fetchSingleRecordSuccess, 
    fetchSingleRecordFail,
    replyRecordLoading, 
    replyRecordSuccess, 
    replyRecordFail,
    closeRecordLoading, 
    closeRecordSuccess, 
    closeRecordFail,
    searchRecords,
 } from "./recordsSlice";
 import {getAllRecords, 
         getSingleRecord, 
         updateReplyRecord, 
         updateRecordStatusClosed,
      } from "../../api/recordApi";

export const fetchAllRecords = () => async (dispatch) => {
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


//Actions for a single record
export const fetchSingleRecord = (_id) => async (dispatch) => {
   dispatch(fetchSingleRecordLoading());

//   fetch data from API
try {
   const result = await getSingleRecord(_id);
  
   dispatch(fetchSingleRecordSuccess(result.result.length && result.result[0]));
} catch (error) {

   dispatch(fetchSingleRecordFail(error.message))
}
};

//Actions for a replying on single record
export const replyOnRecord = (_id, msgObj) => async (dispatch) => {
   dispatch(replyRecordLoading());

//   fetch data from API
try {
   const result = await updateReplyRecord(_id, msgObj);
   if(result.status === 'error') {
      return dispatch(replyRecordFail(result.message))
   }

dispatch(fetchSingleRecord(_id));

dispatch(replyRecordSuccess(result.message));
} catch (error) {
   dispatch(replyRecordFail(error.message))
}
};

//Actions for closing record
export const closeRecord = (_id) => async (dispatch) => {
   dispatch(closeRecordLoading());

//   fetch data from API
try {
   const result = await updateRecordStatusClosed(_id);
  
   if(result.status === 'error') {
      return dispatch(closeRecordFail(result.message))
   }

   dispatch(fetchSingleRecord(_id));

   dispatch(closeRecordSuccess(result.message));
} catch (error) {
  
   dispatch(closeRecordFail(error.message))
}
};
