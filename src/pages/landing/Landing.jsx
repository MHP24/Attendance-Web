import React from 'react';
import './landing.css';
import Phones from '../../assets/img/phone2.png';
import Mobile1 from '../../assets/img/mobile1.png';
import Mobile2 from '../../assets/img/mobile2.png';
import QRImg from '../../assets/img/qr.png';
import Download from '../../assets/icons/download.svg';
import Android from '../../assets/svgs/android.svg';
import Easy from '../../assets/svgs/easy.svg';
import Safe from '../../assets/svgs/safe.svg';
import { Button } from '../../components/button/Button';
import { isMobile } from 'react-device-detect';

export const Landing = () => {
  return (
    <>
      <section className="hero" id='home'>
        <div className="hero__left animate__animated animate__fadeInLeft">
          <div className="hero__content">
            <h1 className="hero__title">Porque hacer presencia es importante</h1>
            <p className="hero__paragraph">Registra tu asistencia a clases con una aplicaci&oacute;n 
            f&aacute;cil de usar y de llevar a donde sea</p>
          <Button content={'Comenzar'}/>
          </div>

        </div>
        <div className="hero__right animate__animated animate__fadeInRight">
          <img src={Phones} alt="phones" className="hero__img" />
        </div>
      </section>

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

      <section className="download" id='download'>
        <div className="about__img-section">
          <img className="about__img" src={Mobile2} alt="mobile" />
        </div>

        <div className="content">
          <p className="content__title">Obt&eacute;n la aplicaci&oacute;n</p>
          {
            isMobile ?
            <>
              <p className="content__paragraph">Presiona aqu&iacute; para comenzar la descarga gratuita.</p>
              <a href="/DuocAttendance-release.apk" className="btn" download>
                <img src={Download}  alt="download" className="btn__img" />
                Descargar</a>
              {/* <Button content={'Descargar'} imgSrc={Download}/> */}
            </>
            :
            <>
              <p className="content__paragraph">Esc&aacute;nea el siguiente c&oacute;digo QR para comenzar la descarga. gratuita</p>
              <img src={QRImg} alt="qrImg" className="qr-img" />
            </>
          }
        </div>
      </section>
      <section className="features">
        <p className="features__title">Garantizamos</p>

        <div className="features-container">
          <div className="feature">
            <img className='feature__img' src={Android} alt="android" />
            <p className="feature__name">Compatibilidad</p>
            <p className="feature__description">Accede desde tu dispositivo android</p>
          </div>

          <div className="feature">
            <img className='feature__img' src={Safe} alt="safe" />
            <p className="feature__name">Seguridad</p>
            <p className="feature__description">Tu informaci&oacute;n est&aacute; protegida</p>
          </div>

          <div className="feature">
            <img className='feature__img' src={Easy} alt="easy" />
            <p className="feature__name">Usabilidad</p>
            <p className="feature__description">Simple de usar y aprender</p>
          </div>
        </div>
      </section>
    </>
  );
}
