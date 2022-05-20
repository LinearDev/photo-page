import React from 'react'
import PhotoElem from './PhotoElem'
import images from './data/images.json'

const PhotoList = () => {
  return (
    <div className='content container'>
        {images.map(alb => {return <PhotoElem album={alb} />})}
    </div>
  )
}

export default PhotoList;