import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import './Activity.css'
import Meeting from './Meeting'
import RecentActivity from './RecentActivity'

function Activity() {
    return (
        <>
            <div className='activities'>
                <div className='meetings'>
                    <p>Upcomming Meetings</p>
                    <BsThreeDotsVertical />
                </div>
                <div className='today_meeting'>
                    <p>Today's Meetings</p>
                    <MdOutlineKeyboardArrowDown />
                </div>
                <Meeting />
                <Meeting />
                <div className='today_meeting schedule'>
                    <p>Schedule Meeting</p>
                    <MdOutlineKeyboardArrowUp />
                </div>
                <div className='meetings schedule'>
                    <p>Recent Activity</p>
                    <BsThreeDotsVertical />
                </div>
                <RecentActivity />
                <RecentActivity />
                <RecentActivity />
                <RecentActivity />
            </div>
        </>
    )
}

export default Activity