import React, { Component } from "react";
import "./App.css";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
    state = {
        peliculas: []
    }
    componentDidMount() {
        axios
            .get("http://backend.localhost/")
            .then((response) => {
                console.log(response);
                this.setState({ peliculas: response.data.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                {this.state.peliculas.map(elemento => (
                    <>
                        <img src={elemento.displayIcon} />
                        <p key={elemento.uuid}>{elemento.displayName}</p>
                        <p>{elemento.description}</p>
                    </>
                )
                )}
            </div>
        );
    }
}
export default App;