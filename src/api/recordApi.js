import axios from "axios";

const rootUrl = "http://localhost:3001/v1/";
const getSingleRecordUrl = rootUrl + "record/";
const closeRecordUrl = rootUrl + "record/close-record/";
const createNewRecordUrl = rootUrl + "record/";

export const getAllRecords = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const accessJWT = sessionStorage.getItem("accessJWT");
            const result = await axios.get("http://localhost:3001/v1/record",
                {headers: {
                    Authorization: accessJWT,
                }}
            );
               
            resolve(result);
        } catch (error) {
            
            reject(error);
            
        }
    });
};

export const getSingleRecord = (_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get(getSingleRecordUrl + _id,
                {headers: {
                    Authorization: sessionStorage.getItem("accessJWT"),
                }}
            );   
            resolve(result.data);
        } catch (error) {
            reject(error);
            
        }
    });
};

export const updateReplyRecord = (_id, msgObj) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.put(getSingleRecordUrl + _id, msgObj,
                {headers: {
                    Authorization: sessionStorage.getItem("accessJWT"),
                },  
            }); 
           
            resolve(result.data);
        } catch (error) {
            reject(error);
        }
    });
};

export const updateRecordStatusClosed = (_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.patch(closeRecordUrl + _id, {},
                {headers: {
                    Authorization: sessionStorage.getItem("accessJWT"),
                },  
            }); 
            resolve(result.data);
        } catch (error) {
            reject(error);
        }
    });
};

export const createNewRecord = (frmData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.post(
                createNewRecordUrl, 
                frmData,
                {headers: {
                    Authorization: sessionStorage.getItem("accessJWT"),
                },  
            }); 
            resolve(result.data);
        } catch (error) {
            reject(error);
        }
    });
};