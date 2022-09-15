import { render, screen } from '@testing-library/react'
import TareaFormulario from '../components/tareaformulario'

test(' renders todo list ', ()=>{
    render(<TareaFormulario/>)
    const tittle = screen.getByText(/Por Favor Ingrese Un Numero Correctamente/i)
    expect (tittle).toBeInTheDocument()
})

test(' renders todo list ', ()=>{
    render(<TareaFormulario/>)
    const inputEl = screen.getByLabelText(/word/i)
    expect (inputEl).toBeInTheDocument()
    const btnEl = screen.getByRole('button', {name: /Agregar/i})
    expect (btnEl).toBeInTheDocument()
})