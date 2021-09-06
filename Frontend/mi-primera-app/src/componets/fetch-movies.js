import axios from 'axios'
import { useEffect } from 'react';

const FetchMovies = async ({ type, data }) => {

  if (type === 'GETALL') {
    const response = await axios.get('http://backend.localhost/api/pelicula');

    if (response.status !== 200) {
      return 'error';
    }

    return response;
  }

  if (type === 'GETBYID') {
    const response = await axios.get('http://backend.localhost/api/pelicula/', { params: { idPelicula: data.id } });

    if (response.status !== 200) {
      return 'error';
    }

    return response;
  }

  if (type === 'ADD') {
    const response = await axios.post('http://backend.localhost/api/pelicula', { nombre: data.nombre, img: data.img });

    if (response.status !== 200) {
      return 'error';
    }

    return response;
  }

}

export default FetchMovies;