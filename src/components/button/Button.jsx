import React from 'react';
import './button.css';
export const Button = ({content, imgSrc='', func=null}) => {
  return (
    <button onClick={func} className='btn'>
    <img className='btn__icon' src={imgSrc}/>
    {content}
    </button>
  )
}
