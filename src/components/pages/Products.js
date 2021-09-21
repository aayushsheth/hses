import React from 'react';
//import '../../App.css';
import Footer from '../Footer';
// import 'C:/Users/aayus/node_modules/font-awesome/css/font-awesome.min.css'
import '../../components/pages/Products.css'

import { Form, Button, Card, Alert } from "react-bootstrap"

export default function Products() {
  return (
  <>
    <head>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap');
      </style>
    </head>
    <div> 
      <div className = 'header'>
         <h1 className = 'top'> HSES ECONOMATHON</h1> 
         <h2 className = 'top1'> A perfect place to apply your economics knowledge</h2>  
      </div>
      {/* <div className = 'header1'>
        High School Economics Startup Program 
      </div> */}
      <div className = 'bodytext1'>
      {/* <i class="fas fa-dollar-sign"></i> */}
      <i class="fas fa-user-friends"></i>
      <p className = 'bodytext2'>
        Form a team of up to 4 high school students and work together to come up with a policy based on a case study theme 
        released on contest day! The competition will be divided into two phases, with the first being 
        Saturday, September 25th. More details on contest structure are listed below.
      </p>
      </div>
      <div className = 'bodytext11'>
      {/* <i class="fas fa-dollar-sign"></i> */}
      <i class="fas fa-dollar-sign"></i>
      <p className = 'bodytext2'> 
        The winning team after Phase 2 can win $500 after being judged by a panel of esteemed judges in the field
        of economics. Moreover, there are many more prizes that can be won for different categories 
        such as the Most Innovative, Most In-Depth Analysis, Most Unique Presentation style, etc.
      </p>
      </div>      
      <div className = 'header1'>
        <h1 className = 'top2'> PHASE ONE</h1>
      </div>
      <div className = 'infoPhase1'>
        <h1 className = 'infoHeaders'> Date: </h1>
        <h1 className = 'infoText'> Oct. 16th, 2021 (Saturday) </h1>
        <div className = 'clearing'> </div>
      </div>
      <div className = 'break' > </div>
      <div className = 'infoPhase'>
        <h1 className = 'infoHeaders'> Objectives: </h1>
        <ol type = "1">
          <li className = 'listItem'>Teams will have 3 hours to analyze and propose a solution to the economic issue released on contest day</li> 
          <li className = 'listItem'>During the three hours, they will also create a PowerPoint presentation detailing their analysis and solution</li>
          <li className = 'listItem'>Each team will then deliver a 15-minute presentation to a panel of esteemed judges.</li>
        </ol> 
      </div>
      <div className = 'break'></div>
      <div className = 'infoPhase2'>
        <h1 className = 'infoHeaders'> Best Project Awards: </h1>
        <p className = 'infoText1'> Top 8 teams with the best overall proposal move on to Phase 2 with the chance to win $500</p>
      </div>
      <div className = 'break'></div>
      <div className = 'infoPhase'>
        <h1 className = 'infoHeaders'> Special Awards: </h1>
        <li className = 'listItem1'>Most Innovative Solution</li> 
        <li className = 'listItem1'>Most Effective Economic Analysis</li> 
        <li className = 'listItem1'>Most Unique and Effective Incorporation of Technology</li> 
        <li className = 'listItem1'>Most Successful Presentation Delivery</li> 
        <li className = 'listItem1'>Most Creative Design</li>  
      </div>
      <div className = 'header1'>
        <h1 className = 'top2'> PHASE TWO</h1>
      </div>
      <div className = 'infoPhase1'>
        <h1 className = 'infoHeaders'> Date: </h1>
        <h1 className = 'infoText'> TBD </h1>
        <div className = 'clearing'> </div>
      </div>
      <div className = 'break' > </div>
      <div className = 'infoPhase'>
        <h1 className = 'infoHeaders'> Objectives: </h1>
        <ol type = "1">
          <li className = 'listItem'>Teams will have a month to write up a 7 page report to propose a developed solution to the same case study in Phase 1 (exact rubric coming soon)</li> 
          <li className = 'listItem'>Their report will be reviewed and graded by professors and members on state congress</li>
          <li className = 'listItem'>The top proposal will be selected and the winning team will get $500 to split among members</li>
        </ol> 
      </div>
      <div className = 'break'></div>
      <div className = 'infoPhase2'>
        <h1 className = 'infoHeaders'> Best Project Awards: </h1>
        <p className = 'infoText1'> In addition to $500, the team's policy will be fined tuned and formally proposed to the state legislature </p>
      </div>
      <div className = 'break'></div>
      <div className = 'infoPhase'>
        <h1 className = 'infoHeaders'> Special Awards (v2): </h1>
        <li className = 'listItem1'>Most Innovative Solution</li> 
        <li className = 'listItem1'>Most Effective Economic Analysis</li> 
        <li className = 'listItem1'>Most Unique and Effective Incorporation of Technology</li> 
        <li className = 'listItem1'>Most Successful Presentation Delivery</li> 
        <li className = 'listItem1'>Most Creative Design</li>  
      </div>
      <div className = 'break'></div>

    </div>
    <Footer></Footer>
  </>
  );
}