import React, { useState } from 'react'
import Blogcard from './Blogcard';
import { useEffect } from 'react';
import axios from 'axios';
import Navbars from '../navbar/Navbars';

const Allblog = () => {
    const [value, setvalue] = useState("");

    const [data, setdata] = useState([
        {
            title: "",
            description: "",
            imageurl: "",
        }
    ]);


    useEffect(() => {
        axios.get("http://localhost:3001/blog/find")
            .then(function (response) {
                console.log(response.data.data);
                setdata(response.data.data);
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])


    const handelsearch = () => {
        let token = localStorage.getItem('token');
        if (value) {
            axios.get("http://localhost:3001/blog/search?search=" + value, {
                headers: { token: token }
            })
                .then(function (response) {
                    console.log(response.data.data);
                    setdata(response.data.data);
                })
                .catch(function (error) {
                    console.log(error)
                })

        }
    }


    const handelsort = (sort) => {

        axios.get("http://localhost:3001/blog/sort?sort=" + sort)
            .then(function (response) {
                console.log(response.data.data);
                setdata(response.data.data);
            })
            .catch(function (error) {
                console.log(error)
            })
    }




    return (
        <>
            <Navbars />

            <div className="container">
                <div className='mt-5 mb-2'>

                    <input className='mx-2' onChange={(e) => setvalue(e.target.value)} value={value} type="search" id='site-search' />
                    <button onClick={handelsearch}>search</button>


                </div>

                <div>
                    <button className='mx-3' onClick={() => { handelsort(1) }}>accending</button>
                    <button onClick={() => { handelsort(-1) }}>dccending</button>
                </div>

                <div className="row">

                    {
                        data.map(
                            (el, index) => {
                                return (


                                    <div className="col-sm-12 col-md-4 col-lg-4">
                                        <Blogcard key={index} title={el.title} description={el.description} imageurl={el.imageurl} />
                                    </div>

                                )
                            }
                        )
                    }


                </div>


            </div>

        </>
    )
}

export default Allblog