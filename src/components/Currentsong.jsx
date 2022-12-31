import React from 'react'

export default function Currentsong(props) {
  return (
    <div className='currsong'>
    <img className='currsongimg' src={props.urlsong} alt="" />
    <div className="songDetails">
    <h4>{props.title}</h4>
    <p className='aboutsong'>{props.details}</p>
    </div>
    </div>
  )
}
