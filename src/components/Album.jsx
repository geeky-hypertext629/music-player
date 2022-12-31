import React from 'react'

export default function Album(props) {
  return (
    <div className="albumname">
        <img src={props.albumurl} className="albumimg" alt=""/>
        <p className='albumtext'>{props.name}</p>
    </div>
  )
}
