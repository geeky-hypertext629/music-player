import React from 'react'

export default function Logo(props) {
    const path = props.imgUrl;
  return (
    <img className='logo' src={path} alt="itsimage" />
  )
}
