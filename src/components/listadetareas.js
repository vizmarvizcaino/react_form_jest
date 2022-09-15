import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext';
import TareaFormulario from './tareaformulario';
import Tarea from './tarea'
import '../stylesheet/listadetarea.css'

function ListaDeTareas() {
  const { tareas, completarTarea, eliminarTarea } = useContext(TaskContext)
  
  return (
    <>
      <TareaFormulario />
      <div className="tarea-lista-contenedor">
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          )
        }
      </div>


    </>
  )
}
export default ListaDeTareas;