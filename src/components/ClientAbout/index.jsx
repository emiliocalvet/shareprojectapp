import React from 'react'
import './style.css'

export default function ClientAbout(props) {
  const { project } = props

  return (
    <div id="client-about">
      {project.name2 ?
        <>
          <p>Nome 1: {project.name1}</p>
          <p>Nome 2: {project.name2}</p>
        </> :
        <p>Nome: {project.name1}</p>}
      {project.phone2 ?
        <>
          <p>Contato 1: {project.phone1}</p>
          <p>Contato 2: {project.phone2}</p>
        </> :
        <p>Contato: {project.phone1}</p>}
      <p>Endereço: {project.address}</p>
      <p>Tipo: {project.type}</p>
      {project.type !== 'Residencial' ? <p>Ramo: {project.branch}</p> : null}
      <p>Área: {project.area}m²</p>
    </div>
  )
}
