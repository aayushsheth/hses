import React from 'react';
//import '../../App.css';
import Footer from './Footer';
// import 'C:/Users/aayus/node_modules/font-awesome/css/font-awesome.min.css'
import '../components/Services.css'

import { Form, Button, Card, Alert } from "react-bootstrap"

export default function Services() {
  return (
  <>
    <head>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap');
      </style>
    </head>
    <div> 
      <div className = 'header'>
         <h1 className = 'top'> High School Economic Startup Program </h1> 
         <h2 className = 'top1'> Expand economic and financial literacy among Washington high school students</h2>  
      </div>
      {/* <div className = 'header1'>
        High School Economics Startup Program 
      </div> */}
      <div className = 'btext1'>
      {/* <i class="fas fa-dollar-sign"></i> */}
      <i class="fas fa-layer-group"></i>
      <p className = 'btext'>
        We have a growing collection of over 20 HSES powerpoints and videos that teach the AP
        Microeconomic and Macroeconomic Curriculum. 
      </p>
      </div>
      <div className = 'btext11'>
      {/* <i class="fas fa-dollar-sign"></i> */}
      <i class="fas fa-user-plus"></i>
      <p className = 'btext'> 
        Sign up to start your very own school economics club using the resources we provide.
      </p>
      </div>
      <div className = 'btext1'>
      {/* <i class="fas fa-dollar-sign"></i> */}
      <i class="fas fa-chalkboard-teacher"></i>
      <p className = 'btext'> 
        Apply to be on the HSES board and help organize financial and logistic details across schools + competitions 
      </p>
      </div>  
      <div className = 'btext11'>
      {/* <i class="fas fa-dollar-sign"></i> */}
      <i class="fas fa-question-circle"></i>
      <p className = 'btext'> 
        If you want to apply or have any other questions about the program please email hseseconomics@gmail.com!
      </p>
      </div>       
      <div className = 'break'></div>
    </div>
    <Footer></Footer>
  </>
  );
}