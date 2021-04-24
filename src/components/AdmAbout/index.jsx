import React from 'react'
import { MdEdit } from 'react-icons/md'
import './style.css'

export default function AdmAbout(props) {
  const { project, showEdit } = props

  return (
    <div id="about">
      {project.name2 ?
        <>
          <p>Nome 1: {project.name1}</p>
          <p>Nome 2: {project.name2}</p>
        </> :
        <p>Nome: {project.name1}</p>
      }

      {project.phone2 ?
        <>
          <p>Contato 1: <a href={`tel:${project.phone1}`}>{project.phone1}</a></p>
          <p>Contato 2: <a href={`tel:${project.phone2}`}>{project.phone2}</a></p>
        </> :
        <p>Contato: <a href={`tel:${project.phone1}`}>{project.phone1}</a></p>
      }

      <p>Endereço: {project.address}</p>
      <p>Chave de acesso: {project.key}</p>
      <p>Tipo: {project.type}</p>
      {project.type !== 'Residencial' ? <p>Ramo: {project.branch}</p> : null}
      <p>Área: {project.area}m²</p>
      <p>Número RRT: {project.rrtNumber}</p>
      <button id="edit" type="button" onClick={showEdit}>
        <MdEdit size={22} color="black" alt="Editar Projeto" />
      </button>

    </div>
  )
}
