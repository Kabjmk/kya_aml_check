import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import "./addrecord.style.css";
import { PropTypes } from 'prop-types';

export const AddRecordForm = ({handleOnSubmit, handleOnChange, frmDt }) => {
    console.log(frmDt);
  return (
    <div className="jumbotron bg-light mt-3">
        <h1 className="text-info text-center">Add New KYC Record</h1>
        <hr/>
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>First Name:</Form.Label>
                        <Col sm={9}>
                            <Form.Control 
                            type="text"
                            name="first_name"
                            value={frmDt.first_name}
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
                        name="middle_name"
                        value={frmDt.middle_name}
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
                        name="last_name"
                        value={frmDt.last_name}
                        onChange={handleOnChange}
                        minLength={3}
                        maxLength={30}
                        placeholder="Enter last name"
                        required
                        /></Col>
                    </Form.Group>                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Date of Birth:</Form.Label>
                        <Col sm={9}><Form.Control 
                        type="date"
                        name="dateOfBirth"
                        value={frmDt.dateOfBirth}
                        onChange={handleOnChange}
                        minLength={3}
                        maxLength={20}
                        required
                        /></Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Country:</Form.Label>
                        <Col sm={9}><Form.Control 
                        type="text"
                        name="country"
                        value={frmDt.country}
                        onChange={handleOnChange}
                        minLength={3}
                        maxLength={200}
                        required
                        /></Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Status</Form.Label>
                        <Form.Control 
                        as="textarea"
                        name="details"
                        rows={5}
                        value={frmDt.details}
                        minLength={3}
                        maxLength={100}
                        onChange={handleOnChange}
                        required
                        />
                    </Form.Group>

                    <Button type="submit" variant="info" >Submit</Button>
                </Form>
    </div>
  )
};

AddRecordForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired, 
    handleOnChange: PropTypes.func.isRequired, 
    frmDt: PropTypes.object.isRequired,
};