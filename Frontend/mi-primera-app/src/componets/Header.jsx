import "../App.scss";

const Header = ()=> {
    return (
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
        </header>
    );
}
export default Header;