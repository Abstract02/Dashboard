import React from 'react'
import './Meeting.css'
import { BsThreeDotsVertical } from 'react-icons/bs'


function Meeting() {
    return (
        <>
            <div className='meeting'>
                <div className='meet'>
                    <p>30 minute call with client</p>
                    <BsThreeDotsVertical />
                </div>
                <h1>Project Discovery Call</h1>
                <p>Due on <strong>10:00 am</strong></p>
                <div className='meet_members'>
                    <div className='memb_img'>
                        <img src='https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png' />
                        <img className='image2' src='https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png' />
                        <img className='image3' src='https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png' />
                        <img className='image4' src='https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png' />
                    </div>
                    <button>+   invite</button>

                </div>
            </div>
        </>
    )
}

export default Meeting