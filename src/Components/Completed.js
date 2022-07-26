import React from 'react'
import { AiOutlineFileDone } from 'react-icons/ai'
import './completed.css'

function Completed() {
    return (
        <>
            <div className='completed_project'>
                <div>
                    <div className='title_completed'>
                        <AiOutlineFileDone className='live' />
                        <p>Completed</p>
                    </div>
                </div>
                    <div className='counter_completed'>
                        <h1>22</h1>
                    </div>
                    <p>Completed projects</p>
            </div>
        </>
    )
}

export default Completed