import React from 'react';
import './about.css';
import Mobile1 from '../../assets/img/mobile1.png';

export const About = () => {
  return (
    <>
        <section className="about" id='about'>
            <div className="content">
                <p className="content__title">Accede desde cualquier lugar</p>
                <p className="content__paragraph">Con DuocAttendance podr&aacute;s acceder siempre que quieras o lo necesites, 
                accediendo con tu cuenta personal.</p>
            </div>

            <div className="about__img-section">
                <img className="about__img" src={Mobile1} alt="mobile" />
            </div>
        </section>
        <hr className='hr'/>
    </>
  );
}
