import React from 'react'
import './RecentActivity'
import {VscBellDot} from 'react-icons/vsc'
import './RecentActivity.css'

function RecentActivity({name,link}) {
  return (
    <>
    <div className='recent'>
        <div className='dot'>
        <VscBellDot />
        </div>
        <div className='activity'>
            <h1>Thankyou for booking a meeting with MS</h1>
            <h3>{name}</h3>
            <p>Jan 14, 2021 at 5:31 PM</p>
        </div>
        <img src={link} />
    </div>
    </>
  )
}

export default RecentActivity