import {React, createContext, useState} from 'react'


export const TaskContext = createContext()

export const TaskContextProvider = (props) => {
  const [tareas, setTareas] = useState([])

  function agregarTarea(tarea) {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareaActualizadas = [tarea, ...tareas]
      setTareas(tareaActualizadas)
    }
  }

  function eliminarTarea(id) {
    const tareaActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareaActualizadas)
  }

  function completarTarea(id) {
    const tareaActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada
      }
      return tarea;
    })
    setTareas(tareaActualizadas)
  }
  return (
    <TaskContext.Provider value={{
      tareas,
      agregarTarea,
      eliminarTarea,
      completarTarea
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}
