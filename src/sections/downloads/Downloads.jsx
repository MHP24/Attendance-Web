import React from 'react';
import './downloads.css';
import Mobile2 from '../../assets/img/mobile2.png';
import QRImg from '../../assets/img/qr.png';
import Download from '../../assets/icons/download.svg';
import { ButtonLink } from '../../components/buttonLink/ButtonLink';
import { isMobile } from 'react-device-detect';
export const Downloads = () => {
  return (
    <section className="downloads" id='downloads'>
        <div className="about__img-section">
            <img className="about__img" src={Mobile2} alt="mobile" />
        </div>

        <div className="content">
            <p className="content__title">Obt&eacute;n la aplicaci&oacute;n</p>
            {
                isMobile ?
                <>
                    <p className="content__paragraph">Presiona aqu&iacute; para comenzar la descarga gratuita.</p>
                    <ButtonLink 
                    download
                    content={'Descargar'}
                    imgSrc={Download}
                    refLink={"https://drive.google.com/u/0/uc?id=1uZmpljABIK2ZOgG0MhN_g5MTmNFtMQ5K&export=download&confirm=t&uuid=347d7ce1-5c04-41ba-a0e6-7f81c2361868&at=AHV7M3dJrcBQajR0eB4XXi3ToLMg:1669399919802"} />
                </>
                :
                <>
                    <p className="content__paragraph">Esc&aacute;nea el siguiente c&oacute;digo QR para comenzar la descarga gratuita.</p>
                    <img src={QRImg} alt="qrImg" className="qr-img" />
                </>
            }
        </div>
  </section>
  )
}
