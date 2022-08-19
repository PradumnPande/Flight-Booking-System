import {faTicketAlt, faTrain, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {Jumbotron, Card, CardColumns} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div>
            
            <div className="container">
            <div >
                <Jumbotron className="text-center bg-green text-warning jumbotron" style={{marginTop : "20px",fontWeight : "bold"}}>
                    <h1 style={{fontWeight : "bold"}}><strong>Welcome to Book My Train</strong></h1>
                    <p className="text-white">
                        The Adventure is Few Platforms Away!
                    </p>
                </Jumbotron>
            </div>
            <CardColumns>
                <Link to="/register">
                    <Card bg="lime">
                    <Card.Img variant="top" src="https://www.thetrainline.com/cmsmedia/cms/7667/booking-train-tickets-europe.jpg?width=500&height=274" />
                    <Card.Body>
                    <Card.Title><FontAwesomeIcon icon={faUser} />REGISTER NOW! </Card.Title>
                    <Card.Text className="text-white"><strong>
                        Become a part of the Book My Train Network by registering yourself.
                            <br/><br/>
                            Kindly Login if already registered.{" "}            
                            </strong>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted text-white"><i>Book My Train welcomes you!</i></small>
                    </Card.Footer>
                </Card></Link> 

                <Link to="/trainDetails">
                    <Card bg="dark">
                    <Card.Img variant="top" src="https://blog-content.ixigo.com/wp-content/uploads/2019/10/11thoct.jpeg" />
                    <Card.Body>
                    <Card.Title className="text-warning"><FontAwesomeIcon icon={faTrain} /> LOOK FOR TRAINS & FARES!</Card.Title>
                    <Card.Text className="text-white">
                            
                            Get to know the various trains and their fares in our network.
                            <br/><br/>
                            Find train with the most affordable rates!{" "}
                                             
                        
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted text-white"><i>Book My Train welcomes you!</i></small>
                    </Card.Footer>
                </Card>
                </Link>

                
                <Link to="/check"><Card bg="cyan">
                    <Card.Img variant="top" src="https://ichef.bbci.co.uk/live-experience/cps/1248/cpsprodpb/vivo/live/images/2016/8/2/888294a2-33e3-4040-9e9d-ebe7b39e5a7c.jpg" />
                    <Card.Body>
                    <Card.Title className='text-grey'><FontAwesomeIcon icon={faTicketAlt}/> BOOK YOUR TICKET NOW!</Card.Title>
                    <Card.Text className='text-white'>
                        <strong>                            
                        Check for the appropriate trains and get your ticket now!
                            <br/><br/>
                        Also, cancel tickets with minimum loss!{" "}
                        </strong>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"><i>Book My Train welcomes you!</i></small>
                    </Card.Footer>
                </Card>
                </Link>
            </CardColumns>
        </div>
        </div>
    )
}

export default Home
