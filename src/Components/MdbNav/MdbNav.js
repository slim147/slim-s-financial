import React,{useEffect,useState} from 'react';
import { useWindowSize } from 'use-window-size-hook';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock } from '@fortawesome/free-solid-svg-icons'

import {
    MDBNavbar, 
    MDBNavbarBrand, 
    MDBNavbarNav, 
    MDBNavItem, 
    MDBNavLink, 
    MDBNavbarToggler, 
    MDBCollapse, 
    MDBIcon
    } from "mdbreact";
    import { BrowserRouter as Router } from 'react-router-dom';

    const MdbNav = () =>{
        const [isOpen,setIsOpen] = useState(false);
        const [lock,setLock] = useState({visibility:'hidden'});
        const size = useWindowSize()
        const lockStyle ={
            color: ' red',
            fonFamily: 'roboto'
           
        }

        const toggle = () => setIsOpen(!isOpen);


        useEffect(()=>{
            setLock({visibility:size.width <= 600 ? 'visible': 'hidden'})

        })
      
        return(
            <Router>
                <MDBNavbar className='px-5'style={{background:'blue'}} dark expand='md'>
                <MDBNavbarBrand>
                    <strong className="white-text">Navbar</strong>
                    </MDBNavbarBrand>

                    <p color='danger' style={lock}><MDBIcon icon="lock" size="fa-2x" className="red-text pr-3" />Login</p>
                    <MDBNavbarToggler right={true} onClick={toggle} />
                    <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                    <MDBNavbarNav right>
                            <MDBNavItem active>
                            <MDBNavLink to="#!">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                            <MDBNavLink to="#!">Features</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                            <MDBNavLink to="#!">Pricing</MDBNavLink>
                            </MDBNavItem>
                    </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </Router>
        )
    }

    export default MdbNav;