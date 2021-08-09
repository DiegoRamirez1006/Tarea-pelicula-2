import React from 'react';
import './App.scss';

function App() {
  //document.getelementbyid("agregar").style.display="block";
  return (
    <div className="App">
      <header>
        <div>
          <h1>Api Peliculas</h1>
          <button id="agregar">agregar</button>
          <button id="mostrar">mostrar todas las Peliculas</button>
          <button id="filtar">Filtrar Peliculas por id</button>
        </div>
      </header>
    </div>
  );
}


export default App;
