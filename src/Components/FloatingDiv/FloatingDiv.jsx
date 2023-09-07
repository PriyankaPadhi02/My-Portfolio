import React from 'react'
import './FloatingDiv.css';

export default function ({img,txtWeb, txtDev}) {
  return (
    <div className="floatingDiv">
        <img src={img} alt='crown image' />
        <span>
            {txtWeb}<br/>
            {txtDev}
        </span>
    </div>
  )
}
