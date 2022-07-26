import React from 'react'
import './User.css'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
function User() {
  return (
    <>
    <div className='vendor_div'>
        <div className='vendor_icon'>
            <img src='https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png' />
        </div>
        <div className='vendor_detail'>
            <h2>Adarsh Singh</h2>
            <p>Vendor</p>
        </div>
        <div className='arrow_button'>
            <MdOutlineKeyboardArrowRight />
        </div>
    </div>
    </>
  )
}

export default User