import React,{useEffect,useState} from "react";
import Image from './Images/Image'
import { 
    MDBAnimation,
    MDBJumbotron, 
    MDBBtn, 
    MDBContainer, 
    MDBRow, 
    MDBCol, 
    MDBCardTitle,
     MDBIcon
     } from "mdbreact";

const JumbotronPage = () => {
    const [image,setImage] = useState(Image[0]);
    let [index,setIndex] = useState(0);
    
useEffect(()=>{
    setTimeout(()=>{
        if(index < Image.length-1){
            setIndex((prevInt)=>{
                return prevInt + 1
            })
            setImage(Image[index])
        }else{
            setIndex((prevInt)=>{
                return prevInt =  0
            })
            setImage(Image[index])
        }
  console.log(index)
    },15000)
    console.log('I was called')
},[index])
  return (
    <section>
    <MDBContainer style={{ padding: 0 }} fluid>
      <MDBRow>
        <MDBCol >
        <MDBAnimation type="zoomIn" duration="4s" delay="2s" >
          <MDBJumbotron style={{ padding: 0 }}>
      <MDBCol className="text-white text-center  px-4 " style={{ backgroundImage: `url(${image})`,backgroundSize: 'cover',
      backgroundRepeat:'no-repeat',maxWidth:'100%',height:'auto' ,backgroundPosition:'center'}}>
          <MDBAnimation type="slideInDown" duration="4s" delay="2s" >
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Create your beautiful website with MDBootstrap</MDBCardTitle>
                <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                  optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                </p>
                <MDBBtn outline color="white" className="mb-5 " ><MDBIcon icon="clone" className="mr-2"></MDBIcon> View project</MDBBtn>
              </MDBCol>
              </MDBAnimation>
            </MDBCol>
          </MDBJumbotron>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </section>
  )
}

export default JumbotronPage;