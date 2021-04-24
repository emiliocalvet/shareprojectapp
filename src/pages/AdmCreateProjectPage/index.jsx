import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AdmCreateProjectForm from '../../components/AdmCreateProjectForm'
import { Slide, ToastContainer, toast } from 'react-toastify'
import api from '../../services/api'
import 'react-toastify/dist/ReactToastify.css'
import './style.css'

export default function AdmCreateProjectPage() {
  const { goBack, push } = useHistory()

  const [name1, setName1] = useState('')
  const [name2, setName2] = useState('')
  const [phone1, setPhone1] = useState('')
  const [phone2, setPhone2] = useState('')
  const [key, setKey] = useState('')
  const [address, setAddress] = useState('')
  const [type, setType] = useState('Residencial')
  const [branch, setBranch] = useState('')
  const [area, setArea] = useState('')
  const [rrtNumber, setRrtNumber] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const data = {
      "name1": name1,
      "name2": name2,
      "phone1": phone1,
      "phone2": phone2,
      "address": address,
      "key": key,
      "type": type,
      "branch": branch,
      "area": Number(area),
      "rrtNumber": rrtNumber
    }

    if (key && name1) {
      api.get(`/projects/key/${key}`).then(response => {
        if (!response.data) {
          api.post('projects', data).then(_ => {
            toast.success('Cadastro realizado com sucesso!', {
              hideProgressBar: true,
              autoClose: 2000,
              onClose: () => push(`/adm`)
            })
          }).catch(_ => { toast.error('Falha ao salvar!') })
        } else {
          toast.warn('Esta chave de acesso já está cadastrada!')
        }
      }).catch(_ => {
        toast.error('Falha ao realizar o cadastro!', {
          autoClose: 2000,
          hideProgressBar: true,
          onClose: () => push(`/adm`)
        })
      })
    } else if (name1) {
      toast.warn('Insira uma chave de acesso!')
    } else {
      toast.warn('Você deve inserir um nome!')
    }
  }

  return (
    <div id="create-project-page">
      <ToastContainer closeButton={false} transition={Slide} autoClose={3000} position="top-center" />
      <form id="project-form" onSubmit={handleSubmit}>
        <AdmCreateProjectForm
          type={type}
          setName1={setName1}
          setName2={setName2}
          setPhone1={setPhone1}
          setPhone2={setPhone2}
          setAddress={setAddress}
          setKey={setKey}
          setType={setType}
          setBranch={setBranch}
          setArea={setArea}
          setRrtNumber={setRrtNumber}
        />
        <div id="create-buttons">
          <button type="button" onClick={goBack}>Voltar</button>
          <div></div>{/*usada para separar os botões*/}
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
}
