import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button, Spinner, Alert,  } from 'react-bootstrap'
import { loginPending, loginSuccess, loginFail } from "./loginSlice";
import {userLogin} from "../../api/userApi";
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from "../../pages/dashboard/userAction";

export const LoginForm = ({formSwitcher}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
     
    const {isLoading,isAuth, error} = useSelector(state => state.login)

    useEffect(() => {
      (sessionStorage.getItem('accessJWT')) && navigate("/dashboard");
    }, [navigate, isAuth]);
    

    const [email, setEmail] = useState("test@test.com");
    const [password, setPassword] = useState("password123");
    
    const handleOnChange = e => {
      const {name, value} = e.target;
      //to put the values extracted in the input fields so that they show
      switch(name) {
        case 'email':
          setEmail(value);
          break ;
  
        case 'password':
          setPassword(value);
          break;
  
        default:
          break;
      }
    };
  
    const handleOnSubmit = async (e) => {
      e.preventDefault();//prevent default behaviour of form reseting after submit button is clicked
  
      if(!email || !password){
        return alert("Fill up all fields");
      }
      
      dispatch(loginPending());

      try {
        const isAuth = await userLogin({email, password});
    
        if(isAuth.status === 'error') {
           return dispatch(loginFail(isAuth.message))
        };

         dispatch(loginSuccess());
         dispatch(getUserProfile())
         navigate("/dashboard");
         
      } catch (error) {
        dispatch(loginFail(error.message));
      }
    };
  return (
  
    <Container>
        <Row>
            <Col>
                <h1 className="text-info text-center">Client Login</h1>
                <hr />
                {error && <Alert variant="danger">{error}</Alert>}
                <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        placeholder="Enter Email"
                        required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleOnChange}
                        placeholder="Password"
                        required
                        />
                    </Form.Group>

                    <Button type="submit">Login</Button>
                    {isLoading && <Spinner variant="primary" animation="grow"/>}
                </Form>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col>
            <a href="#!" onClick={() => formSwitcher('rest')}>Forget Password</a>
            </Col>
        </Row>
        <Row className="py-4">
            <Col>
            Are you new here? {" "}
            <a href="/registration" >Register Now!</a>
            </Col>
        </Row>
    </Container>
  )
};

LoginForm.propTypes = {formSwitcher: PropTypes.func.isRequired,};