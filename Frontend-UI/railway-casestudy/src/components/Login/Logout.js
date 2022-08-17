import React from 'react'
import {Button, Jumbotron} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Logout() {
    return (
        <div className="container">
            <Jumbotron className="text-center bg-dark text-warning jumbotron" style={{marginTop : "100px"}}>
                <h2><strong>Logout Successful</strong></h2>
                <h3><strong>We hope to see you soon!</strong></h3>
                <p className="text-white" style={{marginTop : "50px"}}>
                    <Link to="/login" style={{marginRight : "20px"}}><Button variant="success">Login</Button></Link>
                    <Link to="/" style={{marginLeft : "20px"}}><Button variant="danger">Home</Button></Link>
                </p>
            </Jumbotron>
        </div>
    )
}

export default Logout
