import React from 'react'
import { Form, Button } from 'react-bootstrap'
import PropTypes from "prop-types";

export const UpdateRecord = ({msg, handleOnChange, handleOnSubmit}) => {

  return (
    <Form onSubmit={handleOnSubmit}>
        <Form.Label>Update Record</Form.Label>
        <Form.Text>Please update the record here</Form.Text>
        <Form.Control 
        value={msg}
        onChange={handleOnChange}
        as="textarea" 
        rows="3"  
        />
        <div className="text-end mt-3 mb-3">
         <Button variant='info' type='submit'>Update Record</Button>
        </div>
        
    </Form>
  )
};

UpdateRecord.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    msg: PropTypes.string.isRequired,
};

