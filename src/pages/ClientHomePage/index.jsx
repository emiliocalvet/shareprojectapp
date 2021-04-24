import React from 'react';
import { Link } from 'react-router-dom';
import { RiAdminFill as LoginIcon } from 'react-icons/ri'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import logo from '../../images/logo.png'
import './style.css'

export default function ClientHomePageAdm() {
  return (
    <div id="client-page">
      <img src={logo} alt="Logomarca" />
      <div id="links">
        <a className="linkto" href={process.env.REACT_APP_GOOGLE_FORM_URL} target="_blank" rel="noreferrer"  >
          <button className="btn">
            Solicite seu orçamento
          </button>
        </a>
        <Link className="linkto" to="/search" >
          <button className="btn">
            Acompanhe seu projeto
          </button>
        </Link>
        <div id="contact" className="btn" type="button" >
          <a href={process.env.REACT_APP_WHATSAPP_URL} target="_blank" rel="noreferrer">
            <button className="btn-contact" >
              <AiOutlineWhatsApp size={30} color="black" />
            </button>
          </a>
          <div id="space" />
          <a href={`mailto:${process.env.REACT_APP_EMAIL_URL}`} target="_blank" rel="noreferrer">
            <button className="btn-contact" >
              <HiOutlineMail size={30} color="black" />
            </button>
          </a>
        </div>
      </div>
      <Link to="/login" >
        <LoginIcon color="black" size={25} />
      </Link>
    </div>
  );
}
