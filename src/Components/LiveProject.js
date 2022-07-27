import React from 'react'
import './LiveProject.css'
import {CgMediaPodcast} from 'react-icons/cg'
import Logo from './images/Logo.jpg'

function LiveProject() {
  
  return (
    <>
    <div className='live_project'>
        <div className='top_row'>
            <div className='title'>
                <CgMediaPodcast className='live' />  
                <p>Live Projects</p>
            </div>
            <button>View All</button>
        </div>
        <div className='counter'>
          <h1>18</h1>
        </div>
        <p>Currently the project is in progress</p>
    </div>
    </>
  )
}

export default LiveProject