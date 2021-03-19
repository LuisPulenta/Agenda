import React, {useState} from 'react'
import { isEmpty,size } from 'lodash'
import shortid, { isValid } from 'shortid'

function App() {
  const [agenda, setAgenda] = useState("") 
  const [agendas, setAgendas] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState("")
  const [error, setError] = useState(null)

const validForm =() =>{
  let isValid=true
  setError(null)

  if(isEmpty(agenda)){
    setError("Debes ingresar una persona")
    isValid=false
  }
  return isValid
}


const addAgenda=(e)=>{
  e.preventDefault()
  
if(!validForm()){
  return
}

  const newAgenda={
    id:shortid.generate(),
    name:agenda
  }

  setAgendas([...agendas,newAgenda])
  setAgenda("")
}

const saveAgenda=(e)=>{
    e.preventDefault()
    if(!validForm()){
      return
    }
  const editedAgendas = agendas.map(item => item.id === id ? { id,name:agenda} : item)
  setAgendas(editedAgendas)
  setEditMode(false)
  setAgenda("")
  setId("")
}

const deleteAgenda=(id)=>{
  const filteredAgendas = agendas.filter(agenda =>agenda.id!==id)
  setAgendas(filteredAgendas)
}

const editAgenda=(theAgenda)=>{
  setAgenda(theAgenda.name)
  setEditMode(true)
  setId(theAgenda.id)
}

  return (
    <div className="container" mt-5>
      <h1>Agenda</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
        <h4 className="text-center">Lista de Personas</h4>
        {
          (size(agendas)===0) ? (
            <li className="list-group-item">Aún no hay Personas</li>
          ) : (
            <ul className="list-group">
            {
              agendas.map((agenda)=>(
                <li className="list-group-item" key={agenda.id}>
                <span className="lead">{agenda.name}
                </span>
                <button 
                  class="btn btn-danger btn-sm float-right mx-2"
                  onClick={()=>deleteAgenda(agenda.id)}
                >
                  Eliminar
                </button>
                <button 
                  class="btn btn-warning btn-sm float-right"
                  onClick={()=>editAgenda(agenda)}
                >
                  Editar
                </button>
              </li>
              ))
            }
          </ul>
          )
        }
        
        </div>
        <div className="col-4">
        <h4 className="text-center">
          {editMode ?"Editar Persona":"Agregar Persona"}
        </h4>
        <form onSubmit={editMode ? saveAgenda : addAgenda}>
        {error && <span className="text-danger mb-2">{error}</span>}
          <input type="text"
          className="form-control mb-2"
          placeholder="Ingrese la persona..."
          onChange={(text)=>setAgenda(text.target.value)}
          value={agenda}
          >
          </input>
          
          <button class={editMode ? "btn btn-warning btn-block":"btn btn-dark btn-block"}
          type="submit">{editMode ? "Guardar":"Agregar"}
          </button>
        </form>
        </div>
      </div>
    </div>
  )
}
export default App