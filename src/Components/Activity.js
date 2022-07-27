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
                <RecentActivity name = "Adarsh" link='https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg' />
                <RecentActivity name="Troy Ajanke" link="https://www.sony.co.uk/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg" />
                <RecentActivity name="Vanesha Roy" link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAoBWvOSRMve0ZteEW_GaPy0AX_VMDePjDFQ&usqp=CAU" />
                <RecentActivity name = "Mosh Dib" link = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROEUqMxQpHe32ZCHRo8jB_gKQ_KJBPVTTXvg&usqp=CAU" />
            </div>
        </>
    )
}

export default Activity