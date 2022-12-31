import React from 'react'

export default function Navoptions(props) {
  return (
    <div className='options'>
        <i class={props.url}></i>{props.name}
    </div>
  )
}
