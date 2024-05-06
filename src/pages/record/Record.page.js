import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb';
import {RecordHistory} from "../../components/message-history/RecordHistory.comp";
import {UpdateRecord} from "../../components/update-record/UpdateRecord.comp";
import records from "../../assets/data/dummy-records.json";
import { useParams } from 'react-router-dom';

//const record = records[0];
export const Record = () => {
const {rId} = useParams();

const [message, setMessage] = useState("");//to grab message from update
const [record, setRecord] = useState("")

useEffect(() => {
    for (let i = 0; i < records.length; i++) {
        if(records[i].item == rId) {
            setRecord(records[i]);
            continue;
        }
        
    }
}, [message, rId]);

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
            <Col className="text-weight-bolder text-secondary">
                <div className="firstName">First Name: {record.First_Name}</div>
                <div className="middleName">Middle Name: {record.Middle_Name}</div>
                <div className="lastName">Last Name: {record.Last_Name}</div>
                <div className="country">Country: {record.Country}</div>
                <div className="Identification">Identification Number: {record.Identification_Number}</div>
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
