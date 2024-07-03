import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Button, Spinner, Alert } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb';
import {RecordHistory} from "../../components/message-history/RecordHistory.comp";
import {UpdateRecord} from "../../components/update-record/UpdateRecord.comp";
import { useParams } from 'react-router-dom';
import { closeRecord, fetchSingleRecord } from '../record-list/recordAction';
import {resetResponseMsg} from "../record-list/recordsSlice";

//const record = records[0];
export const Record = () => {
const {rId} = useParams();
const dispatch = useDispatch();
const {isLoading, error, selectedRecord, replyRecordError, replyMsg} = useSelector(state => state.records);

useEffect(() => {
    dispatch(fetchSingleRecord(rId));

    return () => {
        (replyMsg || replyRecordError) && dispatch(resetResponseMsg());
    }
}, [rId, dispatch, replyMsg, replyRecordError]);

  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="Record"/>
            </Col>
        </Row>
        <Row>
            <Col>
                {isLoading && <Spinner variant='primary' animation='border'/>}
                {error && <Alert variant="danger">{error}</Alert>}
                {replyRecordError && <Alert variant="danger">{replyRecordError}</Alert>}
                {replyMsg && <Alert variant="success">{replyMsg}</Alert>}  
            </Col>
        </Row>
        <Row>
            <Col className="text-weight-bolder text-secondary"> 
                <div className="firstName">First Name: {selectedRecord.First_Name}</div>
                <div className="middleName">Middle Name: {selectedRecord.Middle_Name}</div>
                <div className="lastName">Last Name: {selectedRecord.Last_Name}</div>
                <div className="country">Country: {selectedRecord.Country}</div>
                <div className="Identification">Identification Number: {selectedRecord.Identification_Number}</div>
                <div className="dateofBirth">Date of Birth: {selectedRecord.DateOfBirth && new Date(selectedRecord.DateOfBirth).toLocaleString()}</div>
                <div className="status">Status: {selectedRecord.Status}</div>
            </Col>
            <Col>
                <Button variant="outline-info" 
                onClick={() => dispatch(closeRecord(rId))}
                disabled = {selectedRecord.status === "Closed"}
                >Close Record</Button>
            </Col>
            <Col>
                <Button variant="outline-info">Delete Record</Button>
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                {selectedRecord.details && (<RecordHistory msg={selectedRecord.details}/>)}
            </Col>
        </Row>
        <hr />
        <Row className="mt-4">
            <Col>
                <UpdateRecord _id = {rId}/>
            </Col>
        </Row>
    </Container>
  )
}
