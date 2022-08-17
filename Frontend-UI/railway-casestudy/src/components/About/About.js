import React from 'react'
import { Card, CardDeck, Jumbotron } from 'react-bootstrap'

function About() {
    return (
        <div>
            <div className="container">
                <Jumbotron className="text-center bg-teal text-warning jumbotron" style={{marginTop : "20px"}}>
                    <h2 style={{fontWeight : "bold"}}><strong>ABOUT</strong></h2>
                    <p className="text-white">
                        A little insight on this application!
                    </p>
                </Jumbotron>

                

                <CardDeck style={{width  :'90%', marginLeft : '60px'}}>
                    <Card>
                        <Card.Header style={{backgroundColor:'orange'}}>
                            <h5><strong>Features</strong></h5>
                        </Card.Header>
                        <Card.Img variant="top" src="https://media.istockphoto.com/photos/businessman-and-woman-putting-hands-fist-join-together-business-picture-id1320926306?b=1&k=20&m=1320926306&s=170667a&w=0&h=p4IqUhQOMCMcpcyMBT8oguTBRYKxs9B97ybypEqEdRA=" height="300px"/>
                        
                        <Card.Body style={{backgroundColor:'aquamarine'}}>
                            <ul>
                                <li>Become a Member and Login</li>
                                <li>View the various trains and their fares</li>
                                <li>Search for any Train</li>
                                <li>Check for available trains</li>
                                <li>Fill in your details and get the ticket</li>
                                <li>Change of plans? No worries! Cancel tickets at any time!</li>
                            </ul>
                        </Card.Body>
                        <Card.Footer style={{backgroundColor:'orange'}}>
                            <small className="text-muted"><i>Book My Train welcomes you!</i></small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Header style={{backgroundColor:'orange'}}>
                        <h5><strong>Developer's Note</strong></h5>
                        </Card.Header>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" height="300px"/>
                        <Card.Body style={{backgroundColor:'aquamarine'}}>
                            <ul>
                                <li>Developed by Pradumn Pande</li>
                                <li>It is an Online Railway Reservation Sytem</li>
                                <li>Developed as a part of Java Full-Stack Training</li>
                                <li>Future improvements and updates will be made</li>
                                <li>Contact me via email : pandepraduman4@gmail.com</li>
                            </ul>
                        </Card.Body>
                        <Card.Footer style={{backgroundColor:'orange'}}>
                            <small className="text-muted"><i>Book My Train welcomes you!</i></small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
        </div>
    )
}

export default About
