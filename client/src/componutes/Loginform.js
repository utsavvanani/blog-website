import React from 'react'
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Loginform = () => {
    const history = useHistory();
    return (
        <>
            <div className='container d-flex flex-column  justify-content-center align-items-center' style={{ marginTop: "100px" }}>

                <Formik
                    initialValues={{

                        email: '',
                        password: ''
                    }}
                    onSubmit={async (values) => {
                        let token = localStorage.getItem('token');
                        axios.post('http://localhost:3001/login', values, {
                            headers: { token: token }
                        })
                            .then(function (response) {
                                // handle success
                                console.log(response);

                                history.push('/signup')
                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error);
                            })
                    }}
                >
                    <div style={{ height: "400px", padding: "25px 100px" }}>


                        <Form>

                            <div className="form-container">
                                <p className="title">Login</p>
                                <div className="form">
                                    <div className="input-group">
                                        <label htmlfor="email">Email</label>
                                        <Field type="text" name="email" id="email" placeholder="enter email" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlfor="password">Password</label>
                                        <Field type="password" name="password" id="password" placeholder="enter password" />
                                        <div className="forgot">
                                            <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                                        </div>
                                    </div>
                                    <button type="submit" className="sign">Sign in</button>
                                </div>


                                <div className="social-message">
                                    <div className="line"></div>
                                    <p className="message d-flex ">Login with social accounts <a className='nav-link' onClick={() => history.push('/signup')}> Signup</a></p>
                                    <div className="line"></div>
                                </div>
                                <div className="social-icons">
                                    <button aria-label="Log in with Google" className="icon"></button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </Formik>
            </div>
        </>
    )
}



export default Loginform