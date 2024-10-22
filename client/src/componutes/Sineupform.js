import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Sineupform = () => {
    const history = useHistory();

    return (
        <>
            <div className='container d-flex flex-column  justify-content-center align-items-center' style={{ marginTop: "100px" }}>

                <Formik
                    initialValues={{
                        fristname: '',
                        lastname: '',
                        email: '',
                        password: ''
                    }}
                    onSubmit={async (values) => {
                        let token = localStorage.getItem('token')
                        axios.post('http://localhost:3001/sineup', values, {
                            headers: { token: token }
                        })
                            .then(function (response) {
                                // handle success
                                console.log(response);
                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error);
                            })
                    }}
                >
                    <div style={{ height: "570px", padding: "25px 100px" }}>

                        <Form >

                            <div className="form">


                                <p className="title">Register </p>
                                <p className="message">Signup now and get full access to our app. </p>
                                <div className="flex">
                                    <label>
                                        <Field className="input" id='fristname' name='fristname' type="text" />
                                        <span><label htmlFor="fristname">Firstname</label></span>
                                    </label>

                                    <label>
                                        <Field className="input" id='lastname' name='lastname' type="text" />
                                        <span><label htmlFor="lastname">Lastname</label></span>
                                    </label>
                                </div>

                                <label>
                                    <Field className="input" type="text" id='email' name='email' />
                                    <span><label htmlFor="email">Email</label></span>
                                </label>

                                <label>
                                    <Field className="input" type="password" name='password' id='password' />
                                    <span><label htmlFor="Password">Password</label></span>
                                </label>

                                <button className="submit" type="submit" >Submit</button>
                                <p className="signin">Already have an acount ? <a onClick={() => history.push('/login')}>Signin</a> </p>

                            </div>


                        </Form>
                    </div>

                </Formik>
            </div>
        </>
    )
}



export default Sineupform