import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux';
import { replyOnRecord } from '../../pages/record-list/recordAction';

export const UpdateRecord = ({_id}) => {
 
  const dispatch = useDispatch();

  const {user: {name}} = useSelector(state => state.user);

  const [Message, setMessage] = useState("");

  const handleOnChange = (e) => {
    setMessage(e.target.value)
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const msgObj = {
      Message, 
      Sender: name
    };

    dispatch(replyOnRecord(_id, msgObj));
    setMessage("");
  };  
  return (
    <Form onSubmit={handleOnSubmit}>
        <Form.Label>Update Record</Form.Label>
        <Form.Text> (Please update the record here)</Form.Text>
        <Form.Control 
        value={Message}
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
    _id: PropTypes.string.isRequired,
};

