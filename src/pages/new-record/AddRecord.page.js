import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb';
import {AddRecordForm} from "../../components/add-record-form/AddRecordForm.comp";
     


export const AddRecord = () => {

  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="New Record"/>   
            </Col>
        </Row>
        <Row>
            <Col>
                <AddRecordForm/>  
            </Col>
        </Row>
    </Container>
  )
};
