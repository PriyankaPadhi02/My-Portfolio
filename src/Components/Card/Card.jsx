import React from 'react'
import './Card.css';

export default function Card({emoji,heading,detail}) {
  return (
    <div className="card">
        <img src={emoji} alt='Icons' />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="card-but">LEARN MORE</button>
    </div>
  )
}
