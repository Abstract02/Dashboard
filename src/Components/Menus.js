import React from 'react'
import { HiDocumentText } from 'react-icons/hi'
import { MdSend, MdCall, MdNotificationsActive } from 'react-icons/md'
import { BsCalendarCheck, BsFillGrid1X2Fill } from 'react-icons/bs'
import './Menus.css'

function Menus() {
    return (
        <>
            <div className='dashboard_menu'>
                <div className='highlighter'></div>
                <div className='dash_title'>
                    <BsFillGrid1X2Fill className='dash_icon' />
                    <h1>Dashboard</h1>
                </div>
            </div>
            <div className='menu_options'>
                <div className='menu_item'>
                    <HiDocumentText className='menu_item_icon' />
                    <p>Projects</p>
                </div>
                <div className='menu_item'>
                    <BsCalendarCheck className='menu_item_icon' />
                    <p>Calender</p>
                </div>
                <div className='menu_item'>
                    <MdSend className='menu_item_icon' />
                    <p>Message</p>
                </div>
                <div className='menu_item'>
                    <MdNotificationsActive className='menu_item_icon' />
                    <p>Notification</p>
                </div>
                <div className='menu_item'>
                    <MdCall className='menu_item_icon' />
                    <p>Contacts</p>
                </div>
            </div>
        </>
    )
}

export default Menus