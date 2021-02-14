import React,{useState} from 'react';
import Logo from './logo.png'
import {
    MDBNavbar, 
    MDBNavbarBrand, 
    MDBNavbarNav, 
    MDBNavItem, 
    MDBNavLink, 
    MDBNavbarToggler, 
    MDBCollapse,
    MDBBtn,
    } from "mdbreact";
    import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import  LoginContext  from '../Contexts/LoginContext';
import Form from '../Form/Form'


    const Test = () =>{
        const [isOpen,setIsOpen] = useState(false);
        const [isClicked, setIsClicked]= useState(false);
        
        
        
        
         
        const date = new  Date()

        const hoverEffect = (e)=>{
            if(e.target.hasAttribute('href') && e.type === 'mouseover') {
                e.target.style.background = 'lightgreen'
            }
         }
            const moueseleaveEffect = (e)=>{
                if(e.target.hasAttribute('href') && e.type === 'mouseout'){
                    e.target.style.background = 'transparent'
            }
        }
       
        function disableScroll() {
            document.body.style.overflow = 'hidden';
            document.querySelector('html').scrollTop = window.scrollY;
            }
            
            function enableScroll() {
            document.body.style.overflow = null;
            }
        const handleLogin = () =>{
            setIsClicked(!isClicked);
            if(!isClicked){disableScroll()}
            else if(isClicked){enableScroll()}
        }
        

        const toggle = () => setIsOpen(!isOpen);
        return(<>
            <LoginContext.Provider value={{isClicked,handleLogin}}>
                <Form/>
                </LoginContext.Provider>
            <Router>
                <section>
                <MDBNavbar className='px-5 'color='indigo darken-4' dark expand='md' >
                <div className="d-flex  align-self-center  h-100  position-absolute" style={{top:'8px',left:'9vmin',zIndex:'9000'}}>
                <MDBNavbarBrand className='position-relative-lg my-auto float-sm-left' > 
                <img src={Logo}  height= '100'alt="RBC"></img>
                    </MDBNavbarBrand>
                </div>
                <Navbar className='d-sm-inline d-md-none'></Navbar>
                
                <MDBNavbarToggler right onClick={toggle} />
                    <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                    <MDBNavbarNav right className='pr-5' style={{fontSize:'1.2rem'}} >
                            <MDBNavItem active>
                                 {/* Change to flag */}
                            <MDBNavLink  to="#!">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                
                            <MDBNavLink to="#!">{date.toDateString()}</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                            </MDBNavItem>
                            
                    </MDBNavbarNav>
                    </MDBCollapse>
                    
                    <MDBBtn rounded color='success'  className=' z-depth-3 rounded-pill w-25' size="md" onClick={handleLogin}>Login</MDBBtn>
                   
                </MDBNavbar>
               
                <MDBNavbar className='d-none d-md-block' color='light' primary='true' expand='md' onMouseOver={hoverEffect} onMouseOut={moueseleaveEffect}>
                    <MDBNavbarNav className='justify-content-center  align-item-center' right style={{fontSize:'1.3rem'}}>
                            <MDBNavItem  className='ml-3' active >
                            <MDBNavLink  to="#!">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className='ml-3'>
                            <MDBNavLink to="#!">Features</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className='ml-3'>
                            <MDBNavLink to="#!">Pricing</MDBNavLink>
                            </MDBNavItem>
                    </MDBNavbarNav>
                    </MDBNavbar>
                    </section>
            </Router>
            {/* </Form> */}
            </>
        )
    }
   
    export {Test};