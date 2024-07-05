import React, {useState, useEffect} from 'react';
import { Col, Container, Row, Form, Button, Spinner, Alert } from 'react-bootstrap';
import {newUserRegistration} from "./registrationAction";
import { useDispatch, useSelector } from 'react-redux';


//initial local state 
const initiaState = {
    name: 'Joseph Kabali',
    email: 'kabjmk@yahoo.co.uk',
    organisation: 'Mytalu',
    address: '8th Floor Sunshare Tower Lusaka',
    phone: '0977770862',
    password: 'Abcd!235',
    confirmPass: 'Abcd!235',
};

//another initial state for password
const passVerificationError = {
    isLengthy: false,
    hasUpper: false,
    hasLower: false,
    hasNumber: false,
    hasSpclChr: false,
    confirmPass: false
};

const RegistrationForm = () => {
const dispatch = useDispatch();
const [newUser, setNewUser] = useState(initiaState);
const [passwordError, setPasswordError] = useState(passVerificationError);

const {isLoading, status, message} = useSelector(state => state.registration)

useEffect(() => {
 
}, [newUser])


const handleOnChnage = e => {
    const {name, value} = e.target;

    setNewUser({...newUser, [name]: value});

    if(name === "password") {
        const isLengthy = value.length > 8;
        const hasUpper = /[A-Z]/.test(value);
        const hasLower = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasSpclChr = /[!,@,#,$,%,^,&,*]/.test(value);

        setPasswordError({ ...passwordError, isLengthy, hasUpper, hasLower, hasNumber, hasSpclChr});
    }

    if(name === "confirmPass") {
        setPasswordError({ 
            ...passwordError, 
            confirmPass: newUser.password === value,
        });
    }

};

const handleOnSubmit = (e) => {
    e.preventDefault(); 
    //console.log(newUser);
    const {
        name, 
        organisation, 
        address, 
        phone, 
        email, 
        password,
    } = newUser;

    const newRegistration = {
        name, 
        organisation, 
        address, 
        phone, 
        email, 
        password,
    };

    dispatch(newUserRegistration(newRegistration));
};
//next steps
//connect user registration form to backend REST API and manage network state with Redux tookit
//email user a link to verify their email address
//create frontend page to handle the email verification that the client recieves in their email

  return <Container>
    <Row>
        <Col>
        <h1 className="text-info">User Registration</h1>
        </Col>
    </Row>
    <hr/>
    <Row> <Col>
        {message && <Alert variant={status ==='success' ? "success" : "danger"}>{message}</Alert>}
    </Col></Row>
    <Row>
        <Col>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group >
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="name" value={newUser.name} onChange={handleOnChnage} placeholder="Your Name" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={newUser.email} onChange={handleOnChnage} placeholder="Enter email" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Organisation name</Form.Label>
                    <Form.Control type="text" name="organisation" value={newUser.organisation} onChange={handleOnChnage} placeholder="Organisation name" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name="address" value={newUser.address} onChange={handleOnChnage} placeholder="Full Address" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="number" name="phone" value={newUser.phone} onChange={handleOnChnage} placeholder="Phone number" />
                </Form.Group>
                
                <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={newUser.password} onChange={handleOnChnage} placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3"    >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirmPass" value={newUser.confirmPass} onChange={handleOnChnage} placeholder="Confirm Password" />
                </Form.Group>
                <Form.Text>
              {!passwordError.confirmPass && (
                <div className="text-danger mb-3">Password doesn't match!</div>
              )}
            </Form.Text>
                <ul className="mb-3">
                    <li className={passwordError.isLengthy ? "text-success" : "text-danger"}>Min 8 characters</li>
                    <li className={passwordError.hasUpper ? "text-success" : "text-danger"}>At least one upper case character</li>
                    <li className={passwordError.hasLower ? "text-success" : "text-danger"}>At least one lower case character</li>
                    <li className={passwordError.hasNumber ? "text-success" : "text-danger"}>At least one number</li>
                    <li className={passwordError.hasSpclChr ? "text-success" : "text-danger"}>At least one of the special characters e.g !@#$%^&*</li>
                </ul>

                <Button variant="primary" type="submit" disabled={Object.values(passwordError).includes(false)}>
                    Submit
                </Button>
                {isLoading && <Spinner variant="info" animation="border"/>}
            </Form>
        </Col>
    </Row>
    <Row className="py-4">
        <Col>Already have an account? {" "}
        <a href="/">Login Now!</a>
        </Col>
    </Row>

  </Container>;
  
};

export default RegistrationForm;
