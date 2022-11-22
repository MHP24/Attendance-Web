import React from 'react';
import './button.css';
export const Button = ({content, imgSrc=''}) => {
  return (
    <button className='btn'>
    <img className='btn__icon' src={imgSrc}/>
    {content}
    </button>
  )
}
