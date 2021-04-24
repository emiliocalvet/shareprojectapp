import React, { useState } from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify'
import InputBlock from '../../components/InputBlock'
import DoubleInputBlock from '../../components/DoubleInputBlock'
import RadioInputBlock from '../../components/RadioInputBlock'
import api from '../../services/api'
import './style.css'

export default function AdmEditProjectPage(props) {
  const { project, handleEdit, leftEdit, currentKey } = props

  const [name1, setName1] = useState(project.name1)
  const [name2, setName2] = useState(project.name2)
  const [phone1, setPhone1] = useState(project.phone1)
  const [phone2, setPhone2] = useState(project.phone2)
  const [key, setKey] = useState(project.key)
  const [address, setAddress] = useState(project.address)
  const [type, setType] = useState(project.type)
  const [branch, setBranch] = useState(project.branch)
  const [area, setArea] = useState(project.area)
  const [rrtNumber, setRrtNumber] = useState(project.rrtNumber)

  function editInfo(event) {
    event.preventDefault()

    const newProject = {
      name1,
      name2,
      phone1,
      phone2,
      key,
      address,
      type,
      branch,
      area,
      rrtNumber
    }

    try {
      if (key && name1) {
        if (currentKey !== key) {
          api.get(`projects/key/${key}`).then(response => {
            if (!response.data) {
              handleEdit(newProject)
            } else {
              toast.warn('Esta chave já está cadastrada!')
            }
          })
        } else {
          handleEdit(newProject)
        }
      } else if (name1) {
        toast.warn('Insira uma chave de acesso!')
      } else {
        toast.warn('Você deve inserir um nome!')
      }
    } catch (error) {
      toast.error('Erro ao editar!', {
        hideProgressBar: true,
        autoClose: 2000
      })
    }
  }

  return (
    <div id="edit-project-page">
      <ToastContainer closeButton={false} autoClose={2500} transition={Slide} position="top-center" />
      <form onSubmit={editInfo}>
        <DoubleInputBlock
          name="Nome"
          handleChange1={setName1}
          handleChange2={setName2}
          value1={name1}
          value2={name2}
        />
        <DoubleInputBlock
          name="Contato"
          handleChange1={setPhone1}
          handleChange2={setPhone2}
          format="number"
          value1={phone1}
          value2={phone2}
        />
        <InputBlock name="Endereço" value={address} handleChange={setAddress} />
        <InputBlock name="Chave de Acesso" value={key} handleChange={setKey} />
        <RadioInputBlock value={type} handleChange={setType} />
        {type !== 'Residencial' ?
          <InputBlock name="Ramo" value={branch} handleChange={setBranch} /> :
          null
        }
        <InputBlock name="Área" value={area} format="number" handleChange={setArea} />
        <InputBlock name="Número RRT" value={rrtNumber} format="number" handleChange={setRrtNumber} />
        <div id="edit-buttons">
          <button type="button" onClick={e => leftEdit(e)}>Voltar</button>
          <div></div>{/*usada para separar os botões*/}
          <button type="submit">Editar</button>
        </div>
      </form>
    </div>
  );
}
