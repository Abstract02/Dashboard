import React from 'react'
import {BsCalendarEvent} from 'react-icons/bs'
import './Project.css'

function Project({project,name,link}) {
  return (
    <>
    <div className='project'>
        <h1>{project} Project</h1>
        <p>Property name</p>
        <div className='price_deadline'>
            <div className='price'>
            <h2>$</h2>
            <h3>100-140</h3>
            </div>
            <BsCalendarEvent className='calender' />
            <p>Deadline - 25 May</p>
        </div>
        <div className='progress_bar'>
            <div className='progress'>
            </div>
        </div>
        <div className='progress_detail'>
            <h6>Progress bar</h6>
            <p>75%</p>
        </div>
        <div className='vendor_details'>
            <div className='details'>
            <img src={link} />
            <p>{name}</p>
            </div>
            <button>View</button>
        </div>
    </div>
    </>
  )
}

export default Project