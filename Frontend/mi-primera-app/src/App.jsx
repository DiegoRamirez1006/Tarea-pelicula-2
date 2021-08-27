import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './componets/Header'

function App() {
  //document.getelementbyid("agregar").style.display="block";
  return (
    <div className="App">
      <Header/>
        <form id="form-agendaa" action="">
          <h3>Titulo de la Pelicula</h3>
          <input type="text" />
          <h3>link de la imagen</h3>
          <input type="text" />
          <button id="botons" type="submit">
            Agregar
          </button>
        </form>
        <form id="form-agendaaa" action="">
          <h3>Filtrado por id</h3>
          <input type="text" />
          <button id="botonss" type="submit">
            Agregar
          </button>
        </form>
    </div>
  );
}

export default App;
