import React from 'react';
import Link from "../Router/Link";
import {Button, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";

const Users = () => {

    let email = '';
    const dispatch = useDispatch();

    const updateEmail = (email) =>{

        dispatch({type: 'UPDATE_EMAIL', payload: email});
    }
    return (
        <div>
           <h1>Welcome to users page</h1>
            <Link to='/'>Main page</Link>
            <br />
            <br />
            <Form>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={(e)=>{
                        email = e.target.value}
                    } type="email" placeholder="Email" />
                </Form.Group>
            </Form>

            <Button variant='primary' onClick={(e) => {
                e.preventDefault();
                updateEmail(email);
            }
            }>
                Submit
            </Button>


        </div>
    );
};

export default Users;


