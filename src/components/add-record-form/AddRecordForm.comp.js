import React, {useState, useEffect} from 'react'
import { Form, Button, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import "./addrecord.style.css";
// import { PropTypes } from 'prop-types';
import {shortText} from "../../utils/validation";
import { openNewRecord } from './addRecordAction';
import {resetSuccessMsg} from "../add-record-form/addRecordSlice"

const initialFrmData = {
    First_Name: "",
    Middle_Name: "",
    Last_Name: "",
    Country:"",
    Identification_Number: "",
    DateOfBirth: "",
    Gender: "",
    Phone: "",
    Resaddress: "",
    Sender: "",
    Status:"",
};

const intialFrmError = {
    First_Name: false,
    Middle_Name: false,
    Last_Name: false,
    Country: false,
    Identification_Number: false,
    DateOfBirth:false,
    Gender:false,
    Phone: false,
    Resaddress: false,
    Sender: false,
    Status: false,
};

export const AddRecordForm = () => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user);
    const {isLoading, error, successMsg} = useSelector(state => state.newRecord);
    //console.log(user);
    const [frmData, setfrmData] = useState(initialFrmData);
    const [frmDataError, setfrmDataError] = useState(intialFrmError);

    useEffect(() => {
        return () => {
            successMsg && dispatch(resetSuccessMsg())
        };
    }, [frmData, frmDataError, dispatch,successMsg]);

    const handleOnChange = e => {
        const {name, value} = e.target;

        setfrmData({
            ...frmData,
            [name]: value
        })
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        setfrmDataError(intialFrmError);

        const isSubjectValid =  await shortText(frmData.First_Name);

        setfrmDataError({
            ...intialFrmError,
           subject: !isSubjectValid,
        });
        
        dispatch(openNewRecord(frmData));
    };

  return (
    <div className="jumbotron bg-light mt-3">
        <div>Record creator: {frmData.Sender = user.name}</div>
        <h1 className="text-info text-center">Add New KYC Record</h1>
        <hr/>
        <div>
            {error && <Alert variant="danger">{error}</Alert>}
            {successMsg && <Alert variant="primary">{successMsg}</Alert>}
            {isLoading && <Spinner variant="primary" animation="border"/>}
        </div>
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>First Name:</Form.Label>
                        <Col sm={9}>
                            <Form.Control 
                            type="text"
                            name="First_Name"
                            value={frmData.First_Name}
                            minLength={3}
                            maxLength={30}
                            onChange={handleOnChange}
                            placeholder="Enter First Name"
                            required
                          />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Middle Name:</Form.Label>
                        <Col sm={9}><Form.Control 
                        type="text"
                        name="Middle_Name"
                        value={frmData.Middle_Name}
                        minLength={3}
                        maxLength={30}
                        onChange={handleOnChange}
                        placeholder="Enter middle name"
                        required
                        /></Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Last Name:</Form.Label>
                        <Col sm={9}><Form.Control 
                        type="text"
                        name="Last_Name"
                        value={frmData.Last_Name}
                        onChange={handleOnChange}
                        minLength={3}
                        maxLength={30}
                        placeholder="Enter last name"
                        required
                        /></Col>
                    </Form.Group>  
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Country:</Form.Label>
                        <Col sm={9}><Form.Control 
                        type="text"
                        name="Country"
                        value={frmData.Country}
                        onChange={handleOnChange}
                        minLength={3}
                        maxLength={30}
                        required
                        /></Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Identification Number</Form.Label>
                        <Col sm={9}><Form.Control 
                        type="string"
                        name="Identification_Number"
                        value={frmData.Identification_Number}
                        onChange={handleOnChange}
                        minLength={3}
                        maxLength={20}
                        required
                        /></Col>
                    </Form.Group>                  
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Date of Birth:</Form.Label>
                        <Col sm={9}><Form.Control 
                        type="date"
                        name="DateOfBirth"
                        value={frmData.DateOfBirth}
                        onChange={handleOnChange}
                        minLength={3}
                        maxLength={20}
                        required
                        /></Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Gender:</Form.Label>
                        <Col sm={9}><Form.Control 
                        type="text"
                        name="Gender"
                        value={frmData.Gender}
                        onChange={handleOnChange}
                        minLength={3}
                        maxLength={30}
                        required
                        /></Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Phone:</Form.Label>
                        <Col sm={9}><Form.Control 
                        type="string"
                        name="Phone"
                        value={frmData.Phone}
                        onChange={handleOnChange}
                        minLength={3}
                        maxLength={30}
                        required
                        /></Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Residential Address:</Form.Label>
                        <Col sm={9}><Form.Control 
                        type="text"
                        name="Resaddress"
                        value={frmData.Resaddress}
                        onChange={handleOnChange}
                        minLength={3}
                        maxLength={30}
                        required
                        /></Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Status</Form.Label>
                        <Form.Control 
                        as="textarea"
                        name="Status"
                        rows={5}
                        value={frmData.Status}
                        minLength={3}
                        maxLength={100}
                        onChange={handleOnChange}
                        required
                        />
                    </Form.Group>

                    <Button type="submit" variant="info" >Create New Record</Button>
                </Form>
    </div>
  )
};

// AddRecordForm.propTypes = {
//     handleOnSubmit: PropTypes.func.isRequired, 
//     handleOnChange: PropTypes.func.isRequired, 
//     frmDt: PropTypes.object.isRequired,
// };