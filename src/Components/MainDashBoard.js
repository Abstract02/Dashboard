import './MainDashBoard.css'
import React from 'react'
import Diheader from './Diheader'
import LiveProject from './LiveProject'
import Inprogress from './Inprogress'
import Completed from './Completed'
import Cpheader from './Cpheader'
import Project from './Project'
import Invoice from './Invoice'
import Slider from 'react-slick'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

function MainDashBoard() {
    
  return (
    <>
    <div className='main_dash'>
        <p>Welcome back, Abhishek Singh!</p>
        <h2>Have a look at the quick progress bar.</h2>
        <div className='project_status'>
            <LiveProject />
            <Inprogress />
            <Completed />
        </div>
        <div className='cp_header'>
          <Cpheader />
          <p>Projects that are currently in progress</p>
        </div>
        <div className='current_projects'>
        <Project />
        <Project />
        <Project />
        </div>
        <div className='di_header'>
          <Diheader />
          <p>Invoices that are currently Pending</p>
        </div>
        <div className='pending_invoices'>
          <Invoice />
          <Invoice />
          <Invoice />
          
        </div>
    </div>
    </>
  )
}

export default MainDashBoard