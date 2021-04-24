import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify'
import { Context } from '../../context/AuthContext'
import logo from '../../images/logo.png'
import 'react-toastify/dist/ReactToastify.css'
import './style.css'

export default function Login() {
  const history = useHistory()
  const { goBack } = useHistory()
  const [password, setPassword] = useState('')
  const auth = useContext(Context)

  function handleSignIn() {
    auth.signIn({ username: process.env.REACT_APP_USERNAME, password }).then(() => {
      history.push('/adm')
    }).catch((error) => {
      if (error.response) {
        const data = error.response.data
        if (data.statusCode === 401) {
          toast.warn('Chave incorreta!', {
            onOpen: () => setPassword('')
          })
        } else if (data.statusCode === 400) {
          toast.warn('A chave precisa ter no mínimo 6 caracteres!')
        } else {
          toast.error('Serviço indisponível!')
        }
      }
    })
  }

  return (
    <div id="login-page">
      <ToastContainer position="top-center" autoClose={3000} transition={Slide} closeButton={false} />
      <img src={logo} alt="Logomarca Estudio Lar" />
      <div className="options-box">
        <div className="key-input">
          <label htmlFor="project-password">Chave de Administrador</label>
          <input id="project-password" type="password" autoComplete="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button className="btn" type="submit" onClick={handleSignIn}>
          Acessar
        </button>
        <button className="btn" type="button" onClick={goBack}>
          Voltar
        </button>
      </div>
    </div>
  )
}
