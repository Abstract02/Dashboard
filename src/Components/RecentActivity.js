import React from 'react'
import './RecentActivity'
import {VscBellDot} from 'react-icons/vsc'
import './RecentActivity.css'

function RecentActivity() {
  return (
    <>
    <div className='recent'>
        <div className='dot'>
        <VscBellDot />
        </div>
        <div className='activity'>
            <h1>Thankyou for booking a meeting with MS</h1>
            <h3>Kevin Dukkon</h3>
            <p>Jan 14, 2021 at 5:31 PM</p>
        </div>
        <img src='https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg' />
    </div>
    </>
  )
}

export default RecentActivity