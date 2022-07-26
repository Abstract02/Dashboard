import React from 'react'
import './Cpheader.css'
import {MdFilterListAlt} from 'react-icons/md'
import {BsThreeDotsVertical} from 'react-icons/bs'

function Cpheader() {
  return (
    <>
    <div className='header_cp'>
        <p>Current Projects</p>
        <div className='filter'>
            <p>Filter</p>
            <MdFilterListAlt />
        </div>
        <BsThreeDotsVertical className='three_dot' />
    </div>
    </>

  )
}

export default Cpheader