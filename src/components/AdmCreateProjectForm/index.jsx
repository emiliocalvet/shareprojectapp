import React from 'react'
import InputBlock from '../InputBlock'
import DoubleInputBlock from '../DoubleInputBlock'
import RadioInputBlock from '../RadioInputBlock'

export default function AdmCreateProjectForm(props) {
  const {
    type,
    setName1,
    setName2,
    setPhone1,
    setPhone2,
    setAddress,
    setKey,
    setType,
    setBranch,
    setArea,
    setRrtNumber
  } = props

  return (
    <>
      {/* <InputBlock name="Nome 1" handleChange={setName1} />
      <InputBlock name="Nome 2" handleChange={setName2} /> */}
      <DoubleInputBlock
        name="Nome"
        handleChange1={setName1}
        handleChange2={setName2}
      />
      {/* <InputBlock name="Contato 1" format="number" handleChange={setPhone1} />
      <InputBlock name="Contato 2" format="number" handleChange={setPhone2} /> */}
      <DoubleInputBlock
        name="Contato"
        handleChange1={setPhone1}
        handleChange2={setPhone2}
        format="number"
      />
      <InputBlock name="Endereço" handleChange={setAddress} />
      <InputBlock name="Chave de acesso" handleChange={setKey} />
      <RadioInputBlock value={type} handleChange={setType} />
      {type !== 'Residencial' ? <InputBlock name="Ramo" handleChange={setBranch} /> : null}
      <InputBlock name="Área" format="number" handleChange={setArea} />
      <InputBlock name="Número RRT" format="number" handleChange={setRrtNumber} />
    </>
  )
}
