import axios from "axios";

const rootUrl = "http://localhost:3001/v1/";
const loginUrl = rootUrl + "user/login";
const userProfileUrl = rootUrl + "user";
const logoutUrl = rootUrl + "user/logout";
const newAccessJWT = rootUrl + "tokens";
const userVerificationUrl = rootUrl + "user/verify"

export const userRegistration = (frmData) => {
    return new Promise(async (resolve, reject) => {
        try {
           const res = await axios.post(userProfileUrl, frmData);

          resolve(res.data);
           
        if(res.data.status === "Success") {
            resolve(res.data);
        }
        } catch (error) {
            reject(error)
        }
    });
};

export const userRegistrationVerification = (frmData) => {
    return new Promise(async (resolve, reject) => {
        try {
           const res = await axios.patch(userVerificationUrl, frmData);

          resolve(res.data);
           console.log(res.data);

        if(res.data.status === "Success") {
            resolve(res.data);
        }
        } catch (error) {
            reject({status: "error", message: error.message})
        }
    });
};

export const userLogin = frmData => {
    return new Promise(async (resolve, reject) => {
        try {
           const res = await axios.post(loginUrl, frmData);

          resolve(res.data);
           
        if(res.data.status === "Success") {
            sessionStorage.setItem("accessJWT", res.data.accessJWT);
            localStorage.setItem("kycSite", JSON.stringify({refreshJWT: res.data.refreshJWT}));
            }
        } catch (error) {
            reject(error)
        }
    });
};

export const fetchUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const accessJWT = sessionStorage.getItem("accessJWT");

            if(!accessJWT){
                reject("Token not found!");
            }

           const res = await axios.get(userProfileUrl, {
            headers: {
                Authorization: accessJWT,
            },
           });

          resolve(res.data);

        } catch (error) {
            reject(error.message);
        }
    });
};

export const userLogout = async () => {
    try {
        await axios.delete(logoutUrl, {
            headers: {
                Authorization: sessionStorage.getItem("accessJWT")
            },
        });
        
    } catch (error) {
        console.log(error);   
    }
};

export const fetchNewAccessJWT = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const {refreshJWT} = JSON.parse(localStorage.getItem("kycSite"));

            if(!refreshJWT){
                reject("Token not found!");
            }

           const res = await axios.get(newAccessJWT, {
            headers: {
                Authorization: refreshJWT,
            },
           });

           if(res.data.status === "Success") {
            sessionStorage.setItem("accessJWT", res.data.accessJWT);
            };

            resolve(true);

        } catch (error) {
            if(error.message === "Request failed with status code 403") {
                localStorage.removeItem('kycSite');
            }
            reject(false);
        }
    });

};