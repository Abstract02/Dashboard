import React from 'react'
import './Invoice.css'

function Invoice() {
  return (
    <>
    <div className='invoice'>
        <h1>$ 150.00</h1>
        <div>
            <p>Amount</p>
            <div className='approval'>
                <p>Approved</p>
            </div>
        </div>
        <div className='detailss'>
            <img src='https://www.sony.co.uk/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg' />
            <div className='name_detail'>
                <h1>Troy Ajanke</h1>
                <div className='txn_detail'>
                    <h2>#4776</h2>
                    <p>Date: 01 April</p>
                </div>
            </div>
        </div>
    </div>
    </>

  )
}

export default Invoice