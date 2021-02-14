import React from 'react';
import './App.css';
// import MainNav from '../MainNav/MainNav';
// import MdbNav from '../MdbNav/MdbNav';
import {Test} from '../MdbNav/Test';
import JumbotronPage from '../Jumbotron/Jumbotron'
import Card from '../Card/Card';
import Info from '../Info/Info';
import About from '../About/About';
import Operations from '../Operations/Operations'
import Footer from '../Footer/Footer';


const App = ()=>{
  
    return(
        <section>   
        <Test/>
        <JumbotronPage/>
        <Card />
        <Info/>
        <About/>
        <Operations/>
        <Footer/>
        </section>
        
    );
}

export default App;