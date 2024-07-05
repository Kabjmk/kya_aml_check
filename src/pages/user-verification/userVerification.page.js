import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Spinner, Alert } from 'react-bootstrap';
import "./userVerification.style.css";
import {userRegistrationVerification} from "../../api/userApi"


const initialResponse = {
    status: '',
    message: '',
};

export const UserVerification = () => {
    const {_id, email} = useParams();
    const dt = {_id, email}

    const [response, setResponse] = useState(initialResponse)

    //call api and send the _id string to the server to verify if the user has the email
    useEffect(() => {
        const apiCall = async () => {
            const result = await userRegistrationVerification(dt);
            setResponse(result);    
        }

        !response.status && apiCall();

    }, [response])
  
    return (
    <div className="verification-page bg-info">
        <div className="mt-5">
        <div className="jumbotron">
            {!response.status && <Spinner variant="info" animation="border" />}
            {response.status && <Alert variant={response.status === "success" ? "success" : "danger"}>{response.message}</Alert>}
        </div>
        </div>
    </div>
  )
}
