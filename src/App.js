import React, { useState } from "react";
import { BaseColaboradores } from "./basecolaboradores";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [buscar, setBuscar] = useState("")
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)

  const agregar = (e) => {
    e.preventDefault()
    setColaboradores([...colaboradores, { id: colaboradores.length + 1, nombre, correo }])
  }

  const renderColaboradores = () => {
    return colaboradores.filter((colaborador) => {
      if (buscar === '') {
        return colaborador
      } else if (
        colaborador.nombre.toLocaleLowerCase().includes(buscar.toLocaleLowerCase())
      ) {
        return colaborador
      }
    })
      .map((colaborador) => (
        <li key={colaborador.nombre}>
          {colaborador.nombre} - {colaborador.correo}
        </li>
      ));
  };

  return (
    <div>
      <div>
        <nav class="navbar bg-dark bg-body-tertiary navbar-dark">
          <div class="container-fluid">
            <a class="navbar-brand">Buscador de colaboradores</a>
            <form class="d-flex" role="search">
              <input
                class="form-control me-5"
                type="search"
                placeholder="Busca un colaborador"
                onChange={(e) => setBuscar(e.target.value)} />
            </form>
          </div>
        </nav>
      </div>

      <form class="ms-3 mt-5 w-75">
        <label class="form-label">
          Nombre del colaborador
        </label>
        <input
          className="form-control"
          name="nombreTarea"
          placeholder="Ingresa nombre del colaborador"
          onChange={(e) => setNombre(e.target.value)} />
        <label class="form-label mt-3">
          Correo del colaborador
        </label>
        <input
          className="form-control"
          name="nombreTarea"
          placeholder="Ingresa email del colaborador"
          onChange={(e) => setCorreo(e.target.value)} />
        <button className="btn btn-primary mt-4 mb-3" onClick={agregar}>
          Agregar colaborador
        </button>
        <hr></hr>
        <h2>Listado de Colaboradores</h2>
      </form>

      <div>
        <ul class="mt-3">{renderColaboradores()}</ul>
      </div>
    </div>
  );
};

export default App;
