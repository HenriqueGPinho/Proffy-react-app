import React from 'react';
import './styles.css';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveclassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import { Link } from 'react-router-dom';




function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img 
          src={landingImg}
          alt="Plataforma de estudos"
          className='hero-image'
        />

        <div className="buttons-container">
          <Link to="/study" className='study'>
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="/give-classes" className='give-classes'>
            <img src={giveclassesIcon} alt="dar aulas"/>
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexões realizadas! <img src={purpleHeartIcon} alt="coração roxo"/>
        </span>
      </div>
    </div>
  )
}

export default Landing;