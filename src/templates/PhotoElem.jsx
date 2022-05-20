import React from 'react'
import image from '../logo.svg'

export default function PhotoElem({ title }) {
  return (
    <div className="col-md-3">
        <img src={image} alt="" className="contentPhoto" />
        <p className='contentSubText'>{title}</p>
    </div>
  )
}
