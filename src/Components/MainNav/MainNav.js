import React, { useEffect, useState} from 'react';
import { useWindowSize } from 'use-window-size-hook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons'
import './MainNav.css'
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

const MainNav = (props)=>{
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden,setIsHidden] = useState({visibility:'hidden'});
    const [lock,setLock] = useState({visibility:'hidden'})
    const size = useWindowSize({fps:60})

  const toggle = () => setIsOpen(!isOpen);

  useEffect(()=>{
    setIsHidden({visibility:size.width > 600 ? 'visible' : 'hidden'});
    setLock({visibility:size.width <= 600 ? 'visible' : 'hidden'})
  },[size.width])
  
  return (
    <div>
      <Navbar color="primary" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <div style={lock}>
        <FontAwesomeIcon  icon={faLock}/> Login
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/"><img className='count'src='...' alt='flag' aria-label='flag'></img></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
          <Button  style={{visibility:size.width > 600 ? 'visible' : 'hidden'}} className='mx-5'color='warning'>Login</Button>
        </Collapse>
      </Navbar>
      <Navbar className='mr-5'style={isHidden} color ='light' primary expand='md'>
      <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default MainNav;