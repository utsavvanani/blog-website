import React, { useEffect, useState } from 'react'
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Addblogform = () => {

    const history = useHistory();
    return (
        <>
            <div className='container d-flex flex-column  justify-content-center align-items-center' style={{ marginTop: "100px" }}>

                <Formik
                    initialValues={{
                        title: '',
                        description: '',
                        imageurl: '',
                    }}
                    onSubmit={async (values) => {
                        let token = localStorage.getItem('token')
                        axios.post('http://localhost:3001/blog/create', values ,{
                            headers:{token:token}
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


                                <p className="title">Add blog </p>
                              
                                <div className="flex">
                                    <label>
                                        <Field className="input" id='title' name='title' type="text" />
                                        <span><label htmlFor="title">Blog title</label></span>
                                    </label>

                                   
                                </div>
                                <label>
                                        <Field className="input" id='description' name='description' type="text" />
                                        <span><label htmlFor="description">Description</label></span>
                                    </label>
                               

                                <label>
                                    <Field type="text" className="input" name='imageurl' id='imageurl' />
                                    <span><label htmlFor="imageurl">imageurl</label></span>
                                </label>

                                <button className="submit" type="submit" >Submit</button>
                                <p className="signin">Already have an acount ? <a href="#" onClick={() => history.push('/login')}>Signin</a> </p>

                            </div>


                        </Form>
                    </div>

                </Formik>
            </div>
           
        </>
    )
}

export default Addblogform