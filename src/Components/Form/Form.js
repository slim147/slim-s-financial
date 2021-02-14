import React,{useContext} from 'react';
import LoginContext from '../Contexts/LoginContext'
import './Form.css';
import { 
    MDBCardBody,
    MDBCard,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn
 } from 'mdbreact';


const style ={
    visibility:'',
    zIndex:'1000',
}
const LoginForm = ()=>{
    const {isClicked, handleLogin} = useContext(LoginContext)
    const visibility = isClicked ? 'visible': 'hidden';
    style.visibility = `${visibility}`;
    
    
    return(
           
            <div className='contact-form ' style={{...style}}>
                 
    <MDBContainer className='w-75'>
  <MDBRow className='justify-content-center p-4'>
    <MDBCol md="6" >
    <MDBCard className=''card-wrapper>
        <MDBCardBody >
      <form>
        <p className="h5 text-center mb-4">Sign in</p>
        <div className="grey-text">
          <MDBInput label="Type your username" icon="user" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Type your password" icon="lock" group type="password" validate />
        </div>
        <div className="text-center">
          <MDBBtn size='sm' className='rounded-pill'>Login</MDBBtn>
        </div>
      </form>
      </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>
                <button type='button' className='close-form' onClick={handleLogin}>x</button>
                 
                 
            </div>
            
            
             
        
    )
}

export default LoginForm;
