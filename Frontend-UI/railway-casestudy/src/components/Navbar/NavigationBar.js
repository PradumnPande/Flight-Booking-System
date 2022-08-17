import React from 'react';
import { Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'
import {connect} from 'react-redux'
import {logoutUser} from '../../services/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faSignInAlt, faSignOutAlt, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';

class NavigationBar extends React.Component {
    
    logout = () => {
        this.props.logoutUser();
    };

    render() {
        const guestLinks = (
            <>
                <Nav className="mr-auto">
                    <Link to={"trainDetails"} className="nav-link" style={{backgroundColor:'grey'}}>TRAINS</Link>
                    <Link to={"search"} className="nav-link" style={{backgroundColor:'grey'}}>SEARCH</Link>
                    <Link to={"trainDetails"} className="nav-link" style={{backgroundColor:'grey'}}><FontAwesomeIcon icon={faDollarSign}/>{" "} FARES</Link>
                    <Link to={"about"} className="nav-link" style={{backgroundColor:'grey'}}>ABOUT</Link>
                </Nav>
            <Nav className="navbar-right">
                <Link to="/register" className="nav-link" style={{backgroundColor:'green'}}><FontAwesomeIcon icon={faUserPlus}/>{" "} REGISTER  </Link>
                <Link to="/login" class='text-dark' className="nav-link" style={{backgroundColor:'teal'}}><FontAwesomeIcon icon={faSignInAlt}/>LOGIN</Link>
            </Nav> 
            </>
        );

        const adminLinks = (
            <>
                <Nav className="mr-auto">
                    <Link to={"trainDetails"} className="nav-link" style={{backgroundColor:'grey'}}>TRAINS</Link>
                    <Link to={"search"} className="nav-link" style={{backgroundColor:'grey'}}>SEARCH</Link>
                    <Link to={"trainDetails"} className="nav-link" style={{backgroundColor:'grey'}}><FontAwesomeIcon icon={faDollarSign}/>{" "} FARES</Link>
                    <Link to="/check" className="nav-link" style={{backgroundColor:'grey'}}>TRAVEL</Link>                    
                    <Link to={"about"} className="nav-link" style={{backgroundColor:'grey'}}>ABOUT</Link>                                   
                </Nav>
                <Nav className="navbar-right">
                    <Link to="/admin" className="nav-link" style={{backgroundColor:'maroon'}}>ADMIN</Link>
                    <Link to="/profile" className="nav-link" style={{backgroundColor:'green'}}><FontAwesomeIcon icon={faUser}/>PROFILE</Link>   
                    <Link to="/logout" className="nav-link" style={{backgroundColor:'teal'}} onClick={this.logout}><FontAwesomeIcon icon={faSignOutAlt}/>{" "} LOGOUT</Link>
                </Nav> 
            </>
        );

        const userLinks = (
            <>
                <Nav className="mr-auto">
                    <Link to={"trainDetails"} className="nav-link" style={{backgroundColor:'grey'}}>TRAINS</Link>
                    <Link to={"search"} className="nav-link" style={{backgroundColor:'grey'}}>SEARCH</Link>
                    <Link to={"trainDetails"} className="nav-link" style={{backgroundColor:'grey'}}><FontAwesomeIcon icon={faDollarSign}/>{" "} FARES</Link>
                    <Link to="/check" className="nav-link" style={{backgroundColor:'grey'}}>TRAVEL</Link>
                    <Link to={"about"} className="nav-link" style={{backgroundColor:'grey'}}>ABOUT</Link>                                     
                </Nav>
                <Nav className="navbar-right">
                    <Link to="/bookings" className="nav-link" style={{backgroundColor:'maroon'}}>MY BOOKINGS</Link>
                    <Link to="/profile" className="nav-link" style={{backgroundColor:'green'}}><FontAwesomeIcon icon={faUser}/>PROFILE</Link>   
                    <Link to="/logout" className="nav-link" style={{backgroundColor:'teal'}} onClick={this.logout}><FontAwesomeIcon icon={faSignOutAlt}/>{" "}LOGOUT</Link>
                </Nav> 
            </>
        );
        return(
            <div>
                <Navbar style={{backgroundColor : "sandybrown"}} variant="dark">
                        <Link to="" className="navbar-brand" style={{backgroundColor:'#2E2E2E',padding:'10px',fontWeight : "bold", borderRadius : '15px'}}>Book My Train</Link>
                        {this.props.auth.isLoggedIn ? 
                            localStorage.getItem('role') === '[ROLE_ADMIN]' ? adminLinks : userLinks : 
                            guestLinks}
                </Navbar>
            </div>
          
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};
const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
