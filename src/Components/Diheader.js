import React from 'react'
import './Cpheader.css'
import {MdFilterListAlt} from 'react-icons/md'
import {BsThreeDotsVertical} from 'react-icons/bs'

function Diheader() {
  return (
    <>
    <div className='header_cp'>
        <p>Pending Invoices</p>
        <div className='three_dot_pi'>
        <BsThreeDotsVertical />
        </div>
    </div>
    </>

  )
}

export default Diheader