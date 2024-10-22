import React from 'react'


const Blogcard = (props) => {
    return (
        <>



            <div className="card my-5">
                <div className='my-3'>
                    <img src={props.imageurl} height={"200px"} width={"100%"} alt="" srcset="" />
                </div>

                <p className="heading">{props.title}</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aliquam ex minima. Atque illo reprehenderit iusto quibusdam modi voluptates qui minus, perspiciatis eos nesciunt impedit laborum! Voluptatum quaerat ducimus incidunt.</p>

            </div>


        </>
    )
}

export default Blogcard