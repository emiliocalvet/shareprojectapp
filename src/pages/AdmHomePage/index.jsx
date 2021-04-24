import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi'
import { Context } from '../../context/AuthContext'
import logo from '../../images/logo.png'
import './style.css'

export default function AdmHomePageAdm() {
  const auth = useContext(Context)

  return (
    <div id="adm-page">

      <img src={logo} alt="Logomarca Estudio Lar" />

      <div>
        <Link className="linkto" to={`/adm/project/create`} >
          <button className="btn">
            Criar Projeto
          </button>
        </Link>
        <Link className="linkto" to={`/adm/project/list`} >
          <button className="btn">
            Listar Projetos
          </button>
        </Link>
        <Link className="logout" to={'/'} onClick={ () => auth.signOut() }>
          <BiLogOut color="black" size={25} />
        </Link>
      </div>
    </div>
  );
}
