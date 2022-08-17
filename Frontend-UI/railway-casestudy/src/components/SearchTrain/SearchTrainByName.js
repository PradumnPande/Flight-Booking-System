import React, { Component } from 'react'
import { Button, Card, Carousel , CardDeck} from 'react-bootstrap'
import SearchTrainService from '../../services/SearchTrainService'

export class SearchTrainByName extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search : "",
             result : [],
             clicked : false
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        SearchTrainService.searchTrainByName(this.state.search).then((res) => {
            this.setState({
                result : res.data,
                clicked : true
            });
        })
        
    }
    
    render() {
       const {search} = this.state
        return (
            <div>
                    <Carousel style={{width : "100%"}}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/e2/e0/28/e2e028048eb932451b2d5feb3185732d.jpg" height="550px"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 class="text-warning" style={{fontWeight : "bold"}}><strong>Search Your Train Here!</strong></h1>
                            <p className="container" style={{width : "60%"}}>
                                <form onSubmit={this.submitHandler}>
                                    <input class='text-white' type="text" name="search" id="search" value={search} autocomplete="off" placeholder="Search Name..." onChange={this.changeHandler}></input>
                                    <Button type="submit" variant="info">Search</Button>
                                </form>
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


                {        
                        this.state.clicked === true && this.state.result.length !== 0 ?                               
                                                this.state.result.map(
                                                    train =>
                                                    <div className="container">
                                                        

                                                                                                                
                                                        
                                                       
                                                    <Card key={train.trainId} style={{paddingBottom : '20px', marginTop : '20px'}}>
                                                        <Card.Header className="text-white" style={{backgroundColor : 'green'}}>
                                                           <h5><strong>{train.name} ({train.trainId})</strong></h5> 
                                                        </Card.Header>
                                                        
                                                        <Card.Text>
                                                            <br/>
                                                            <CardDeck style={{marginLeft : '5px', marginRight : '5px', color : 'white'}}>
                                                                <Card bg="light">
                                                                    <Card.Title style={{marginLeft : "10px", paddingTop : '20px', color: 'black'}}>FROM :  <span style={{marginLeft : '20px'}}>{train.source}</span> </Card.Title>
                                                                    <Card.Title style={{marginLeft : "10px", color : 'black'}}>TO :     <span style={{marginLeft : '50px'}}>{train.destination}</span></Card.Title>                                                                
                                                                </Card>
    
                                                                <Card bg="light">
                                                                    <Card.Title style={{marginLeft : "10px", paddingTop : '20px', color : 'black'}}>Departure :    <span style={{marginLeft : '10px'}}>{train.departureTime}</span></Card.Title>
                                                                    <Card.Title style={{marginLeft : "10px", color : 'black'}}>Arrival :     <span style={{marginLeft : '40px'}}>{train.arrivalTime}</span></Card.Title>                                                               
                                                                </Card>
    
                                                                <Card bg="light">
                                                                    <Card.Title style={{marginLeft : "10px", paddingTop : '20px', color : 'black'}}>Seats :   <span style={{marginLeft : '10px'}}> {train.seatsLeft}</span></Card.Title>
                                                                    <Card.Title style={{marginLeft : "10px", color : 'black'}}>Date :    <span style={{marginLeft : '20px'}}> {train.date}</span></Card.Title>
                                                                </Card>
    
                                                                <Card bg="light">
                                                                    <Card.Title style={{marginLeft : "10px", paddingTop : '20px', color : 'black'}}>GEN :    <span style={{marginLeft : '35px'}}>{train.generalFare} (INR)</span></Card.Title>
                                                                    <Card.Title style={{marginLeft : "10px", color : 'black'}}>LADIES :     <span style={{marginLeft : '10px'}}>{train.ladiesFare} (INR)</span></Card.Title>
                                                                </Card>
                                                            </CardDeck>
                                                            
                                                        </Card.Text>
    
                                                    </Card>
                                                    </div>
                                                ) : this.state.clicked === false ?
                                                    <div className="container">                                                        
                                                    </div>: 
                                                    <div className="container">                                                        
                                                        <Card bg="dark" className="text-center text-warning" style={{width : '40%', marginLeft : '325px', marginTop : '20px', paddingTop :'20px', borderRadius : '50px'}}>
                                                            <Card.Title><h3><strong>No Such Train Available!</strong></h3></Card.Title>
                                                        </Card>
                                                    </div>
                                            
                                        }

            </div>
        )
    }
}




export default SearchTrainByName
