import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from "../../../Hooks/useAuth";
import cartIcon from "../../../Images/header/trolley.png";
import logo from "../../../Images/logo.png";
import './Header.css';

const Header = () => {
    const{user,handleSignOut} = useAuth();
    return (
        <div>
            <div className="header">
                <Container>
                    <div className="header-main">
                        <Row className="header-fixed">
                            <Col xs={12} md={2}>
                                <div className="logo">
                                    <img src={logo} alt="" />
                                </div>
                            </Col>
                            <Col xs={12} md={10}>
                                <div className="main-menu">
                                    <ul>
                                       
                                        <li><Link to="/home">Home</Link></li>
                                        <li><Link to="/meals">Meals</Link></li>
                                        <li><Link to="/additem">Add Item </Link></li>
                                        
                                        {
                                         !user.email && <li><Link to="/login">Login</Link></li>
                                        }
                                        {
                                          user.email && <li><img src={user.photoURL} alt="" /></li>
                                        }
                                        <li>{user?.displayName}</li>
                                        {
                                            user?.email && <li><button onClick={handleSignOut}>Logout</button></li>
                                        }
                                        <li><Link to="/cart" className="cartIcon"><img src={cartIcon} alt="" /></Link></li>
                                        <li><Link to="/signup" className="SignUp">Sign up</Link></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>                    
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Header;