import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Navbars = () => {
    const history = useHistory();
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container >
                    <Navbar.Brand href="#">UvBlog</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link onClick={() => history.push('/')} >Home</Nav.Link>
                            <Nav.Link onClick={() => history.push('/addblog')} >AddBlag</Nav.Link>
                            <Nav.Link onClick={() => history.push('/myblog')} >MyBlog</Nav.Link>
                            <Nav.Link onClick={() => history.push('/allblog')}>AllBlog</Nav.Link>
                            <Nav.Link onClick={() => history.push('/signup')}>SignUp</Nav.Link>


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbars