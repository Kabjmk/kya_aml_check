import axios from "axios";

export const getAllRecords = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get(
                "http://localhost:3001/v1/record",
                {headers: {
                    Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImUzQGUuY29tIiwiaWF0IjoxNzE4MTE5NDYxLCJleHAiOjE3MTgxMjAzNjF9.xx1hWuuU1YQYaaFbpsvknRL8UvKstQwwZorkMCuS82M"
                }}
            );
            resolve(result);
        } catch (error) {
            reject(error);
        }
    })
    
}