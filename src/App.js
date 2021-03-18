import { isEmpty } from 'lodash'
import React, {useState} from 'react'
import shortid from 'shortid'

function App() {
  const [agenda, setAgenda] = useState("") 
  const [agendas, setAgendas] = useState([])


const addAgenda=(e)=>{
  e.preventDefault()
  if(isEmpty(agenda)){
    console.log("Agenda vacía")
    return
  }
  const newAgenda={
    id:shortid.generate(),
    name:agenda
  }

  setAgendas([...agendas,newAgenda])
  setAgenda("")
}

  return (
    <div className="container" mt-5>
      <h1>Agenda</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
        <h4 className="text-center">Lista de Personas</h4>
        <ul className="list-group">
          {
            
            agendas.map((agenda)=>(
              <li className="list-group-item" key={agenda.id}>
              <span className="lead">{agenda.name}
              </span>
              <button class="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
              <button class="btn btn-warning btn-sm float-right">Editar</button>
            </li>
            ))
          }
        </ul>
        </div>
        <div className="col-4">
        <h4 className="text-center">Formulario</h4>
        <form onSubmit={addAgenda}>
          <input type="text"
          className="form-control mb-2"
          placeholder="Ingrese la persona..."
          onChange={(text)=>setAgenda(text.target.value)}
          value={agenda}
          >
          </input>
          <button class="btn btn-dark btn-block"
          type="submit">Agregar</button>
        </form>
        </div>
      </div>
    </div>
  )
}
export default App