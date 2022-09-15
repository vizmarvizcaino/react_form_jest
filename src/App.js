import './App.css';
import ListaDeTareas from './components/listadetareas';
import { TaskContextProvider } from './context/TaskContext'


function App() {
  return (
    <TaskContextProvider>
    <div className="aplicacion-tareas">
      <div className="logo-contenedor">
        <h2 className='logo'>Lista de Gastos, Vizmar Vizcaino</h2>
      </div>
      <div className="tareas-lista-principal">
        <h1>Listas De Gastos</h1>
        <ListaDeTareas />
      </div>
    </div>
    </TaskContextProvider>
  );
}

export default App;
