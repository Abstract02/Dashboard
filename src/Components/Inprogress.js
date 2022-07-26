import React from 'react'
import { BsHourglassTop } from 'react-icons/bs'
import './Inprogress.css'

function Inprogress() {
    return (
        <>
            <div className='inprogress_project'>
                <div>
                    <div className='title_inprogress'>
                        <BsHourglassTop className='live' />
                        <p className='live'>In Progress</p>
                    </div>
                </div>
                <div className='counter_inprogress'>
                        <h1>34</h1>
                    </div>
                    <p>Project in progress</p>
            </div>
        </>
    )
}

export default Inprogress