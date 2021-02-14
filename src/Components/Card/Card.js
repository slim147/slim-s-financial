import React from 'react';
import { MDBContainer, 
    MDBRow, 
    MDBCol, 
    MDBCard, 
    MDBBtn, 
    MDBCardTitle, 
    MDBView, 
    MDBCardImage, 
    MDBMask, 
    MDBCardBody, 
    MDBCardText, 
    MDBIcon 
} from 'mdbreact';
const Cards = () =>{
    const titles = ['Free Debit Card','Friendly Advisors','Investment Oppurtunities'];

    return(
        <MDBContainer className='d-flex position-relative justify-content-center' style={{bottom:'3.5rem'}} fluid>
      <MDBContainer  >
        <MDBRow className="mx-1">
          {titles.map((title,i)=>{
              return(
                <MDBCol  key={i}md="4" className="mb-4 mb-md-0  ">
                <section>
                  <MDBCard  narrow  >
                    <MDBView hover cascade >
                    <MDBCardTitle className='pt-4 text-center' >{title}</MDBCardTitle>
                      <MDBCardImage className='p-3' src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" alt="Card image cap" top></MDBCardImage>
                      <MDBMask waves='true' className="img-gradient"></MDBMask>
                    </MDBView>
                    <MDBCardBody cascade>
                      <h5 className="pink-text"><MDBIcon icon="utensils" /> Culinary</h5>
                      <MDBCardTitle>{title}</MDBCardTitle>
                      <MDBCardText>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</MDBCardText>
                      <hr className='text-center w-50 pt-3' style={{ borderTop: '2px solid lightgreen'}}/>
                      <MDBBtn color="unique">Button</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </section>
              </MDBCol>
              )
          })}
        </MDBRow>
      </MDBContainer>
      </MDBContainer>
    )
}

export default Cards;