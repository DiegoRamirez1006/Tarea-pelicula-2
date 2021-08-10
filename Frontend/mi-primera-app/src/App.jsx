import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //document.getelementbyid("agregar").style.display="block";
  return (
    <div className="App">
      <header id="main-header">
        <div className="contenedor-menu">
          <h1 id="titulo">Api Peliculas</h1>
          <button id="agregar" type="submit">
            agregar
          </button>
          <button id="mostrar" type="submit">
            mostrar todas las Peliculas
          </button>
          <button id="filtar" type="submit">
            Filtrar Peliculas por id
          </button>
        </div>
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
      </header>
    </div>
  );
}

export default App;
