import React from 'react';
import './hero.css';
import Phones from '../../assets/img/phone2.png';
import { ButtonLink } from '../../components/buttonLink/ButtonLink';

export const Hero = () => {
  return (
    <section className="hero" id='home'>
        <div className="hero__left">
            <div className="hero__content">
                <h1 className="hero__title">Porque hacer presencia es importante</h1>
                <p className="hero__paragraph">Registra tu asistencia a clases con una aplicaci&oacute;n 
                f&aacute;cil de usar y de llevar a donde sea</p>
                <ButtonLink content={'Comenzar'} refLink={"#downloads"}/>
            </div>
        </div>

        <div className="hero__right">
            <img src={Phones} alt="phones" className="hero__img" />
        </div>
    </section>
  );
}
