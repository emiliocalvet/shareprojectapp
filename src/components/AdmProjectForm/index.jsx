import React from 'react'
import AdmUploadPart from '../AdmUploadPart'

export default function AdmProjectForm(props) {
  const {
    handleInput,
    handleDelete,
    existentData,
    data
  } = props

  return (
    <>
      <AdmUploadPart
        name="1. Levantamento"
        type="levant"
        handleInput={handleInput}
        handleDelete={handleDelete}
        existentData={existentData}
        data={data}
      />

      <AdmUploadPart
        name="2. Estudo Preliminar"
        type="estPrel"
        handleInput={handleInput}
        handleDelete={handleDelete}
        existentData={existentData}
        data={data}
      />

      <AdmUploadPart
        name="3. Anteprojeto"
        type="anteproj"
        handleInput={handleInput}
        handleDelete={handleDelete}
        existentData={existentData}
        data={data}
      />

      <AdmUploadPart
        name="4. Projeto Executivo Obra Civil"
        type="exeObraCiv"
        handleInput={handleInput}
        handleDelete={handleDelete}
        existentData={existentData}
        data={data}
      />

      <AdmUploadPart
        name="5. Projeto Executivo Marcenaria"
        type="exeMarc"
        handleInput={handleInput}
        handleDelete={handleDelete}
        existentData={existentData}
        data={data}
      />

      <AdmUploadPart
        name="6. Relatório de Compras"
        type="relComp"
        handleInput={handleInput}
        handleDelete={handleDelete}
        existentData={existentData}
        data={data}
      />

      <AdmUploadPart
        name="7. Orçamentos"
        type="orcamento"
        handleInput={handleInput}
        handleDelete={handleDelete}
        existentData={existentData}
        data={data}
      />

      <AdmUploadPart
        name="8. Relatório de obra"
        type="relObra"
        handleInput={handleInput}
        handleDelete={handleDelete}
        existentData={existentData}
        data={data}
      />

      <AdmUploadPart
        name="9. Documentos"
        type="docs"
        handleInput={handleInput}
        handleDelete={handleDelete}
        existentData={existentData}
        data={data}
      />
    </>
  )
}
