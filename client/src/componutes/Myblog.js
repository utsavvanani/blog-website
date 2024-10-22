import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Blogcard from './Blogcard';
import Navbars from '../navbar/Navbars';

const Myblog = () => {
    const [data, setdata] = useState([]);

    const getdata = () => {
        let token = localStorage.getItem("token");
        axios.get("http://localhost:3001/blogdata", {
            headers: { token: token }
        })
            .then(function (response) {
                console.log(response.data.data);
                setdata(response.data.data);

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        getdata();
    }, [])



    return (
        <>
            <Navbars/>
            <div className="container">


                <div className="row">
                    {
                        data.map((el,index) => {
                            return (

                                <>
                                    <div className="col-sm-12 col-md-4 col-lg-4">
                                        <Blogcard key={index} title={el.title} description={el.description} imageurl={el.imageurl} />
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>

        </>
    )
}

export default Myblog