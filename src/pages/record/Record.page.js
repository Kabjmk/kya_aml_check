import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb';
import {RecordHistory} from "../../components/message-history/RecordHistory.comp";
import {UpdateRecord} from "../../components/update-record/UpdateRecord.comp";
import records from "../../assets/data/dummy-records.json";


const record = records[0];
export const Record = () => {
const [message, setMessage] = useState("");//to grab message from update

useEffect(() => {}, [message]);

const handleOnChange = e => {
    setMessage(e.target.value)
};

const handleOnSubmit = () => {
    alert('form submited');
}
  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="Record"/>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="firstName">First Name: {record.First_Name}</div>
                <div className="middleName">Middle Name: {record.Middle_Name}</div>
                <div className="lastName">Last Name: {record.Last_Name}</div>
                <div className="country">Country: {record.Country}</div>
                <div className="Identification">Identification Number: {record.dentification_Numer}</div>
                <div className="status">Status: {record.Status}</div>
            </Col>
            <Col>
                <Button variant="outline-info">Delete Record</Button>
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <RecordHistory msg={record.history}/>
            </Col>
        </Row>
        <hr />
        <Row className="mt-4">
            <Col>
                <UpdateRecord msg={message} 
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                />
            </Col>
        </Row>

    </Container>
  )
}
