import React from 'react'
import PhotoElem from './PhotoElem'
import images from '../../db.json'

const PhotoList = () => {
  return (
    <div className='content container row'>
        {images.map((alb) => {
            return alb.content.map(elem => {
                return <PhotoElem title={elem.title} />
            });
            }
        )}
    </div>
  )
}

export default PhotoList;