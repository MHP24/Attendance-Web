import React from 'react';
import './features.css';
import Android from '../../assets/svgs/android.svg';
import Easy from '../../assets/svgs/easy.svg';
import Safe from '../../assets/svgs/safe.svg';
export const Features = () => {
  return (
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
  );
}
