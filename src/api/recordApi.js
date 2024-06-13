import axios from "axios";

export const getAllRecords = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get(
                "http://localhost:3001/v1/record",
                {headers: {
                    Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImUzQGUuY29tIiwiaWF0IjoxNzE4MTk1MjEzLCJleHAiOjE3MTgxOTYxMTN9.0qt32J_r-MpJl_udglyJwxpvIzuRFbjhfxj2s9Qnyng"
                }}
            );
            resolve(result);
        } catch (error) {
            reject(error);
            console.log(error);
        }
    })
    
}