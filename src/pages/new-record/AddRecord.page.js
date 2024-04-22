import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb';
import {AddRecordForm} from "../../components/add-record-form/AddRecordForm.comp";
     
const initialFrmDt = {
    first_name: "",
    middle_name: "",
    last_name: "",
    details:"",
};

export const AddRecord = () => {

    const [frmData, setfrmData] = useState(initialFrmDt);

    useEffect(() => {
      
    }, [frmData])

    const handleOnChange = e => {
        const {name, value} = e.target;

    
        setfrmData({
            ...frmData,
            [name]: value
        })
    };

    const handleOnSubmit = e => {
        e.preventDefault();

        console.log("Record Submited", frmData);
    };

  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="New Record"/>   
            </Col>
        </Row>
        <Row>
            <Col>
                <AddRecordForm 
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                frmDt = {frmData}
                />  
            </Col>
        </Row>
    </Container>
  )
};
