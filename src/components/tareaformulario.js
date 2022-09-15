import React, { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import '../stylesheet/tareaformulario.css'
import { v4 as uuidv4 } from 'uuid'

function TareaFormulario() {
  const [input, setInput] = useState('')
  const { agregarTarea } = useContext(TaskContext)
  
  function manejarCambio(e) {
    const notNumber = 'Por Favor Ingrese Un Numero Correctamente'
    if (isNaN(e.target.value)){
      return alert(notNumber)
  } else {
    setInput(e.target.value)
  }
  }

  function manejarEnvio(e) {
    e.preventDefault()
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    agregarTarea(tareaNueva)
  }

  return (
    <form
      className='tarea-formulario'
      onSubmit={manejarEnvio}
    >
      <label htmlFor='word'>word</label>
      <input
        id='word' 
        type="text"
        className='tarea-input'
        placeholder='Escribe una tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>Agregar</button>
    </form>
  )
}
export default TareaFormulario;
