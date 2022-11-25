import React from 'react';
import './buttonLink.css';
export const ButtonLink = ({content, imgSrc='', func=null, refLink}) => {
  return (
    <a onClick={func} className='btn' href={refLink}>
    <img className='btn__icon' src={imgSrc}/>
    {content}
    </a>
  )
}
