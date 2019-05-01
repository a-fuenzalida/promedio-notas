import React, { Component } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import Header from '../components/Header/Header';
import ListaNotas from '../components/ListaNotas/ListaNotas';
import Footer from '../components/Footer/Footer';

class App extends Component {
  state = {
    notas: [
      {nota: 0, porcentaje: 0},
      {nota: 0, porcentaje: 0},
      {nota: 0, porcentaje: 0},
      {nota: 0, porcentaje: 0},
      {nota: 0, porcentaje: 0},
    ],
    promedio: 0
  };

  scoreChangedHandler = (event, index) => {
    const nota = {
      ...this.state.notas[index]
    };
    let target = event.target.id;
    nota[target] = Number(event.target.value);
    const notas = [...this.state.notas];
    notas[index] = nota;
    console.log(notas);
    this.setState({
      notas
    }, () => {
      this.averageHandler();
    });
  }

  averageHandler = () => {
    const notas = this.state.notas.map(n => n.nota);
    const porcentaje = this.state.notas.map(p => p.porcentaje);
    let promedio = 0;
    notas.forEach((nota, i) => {
      promedio += nota * Number([porcentaje[i]]) / 100;
    });
    console.log(promedio);
    this.setState({
      promedio
    });
  }

  addScoreHandler = (index) => {
    const nuevaNota = {nota: 0, porcentaje: 0};
    this.setState({
      notas: [
        ...this.state.notas,
        nuevaNota
      ]
    });
  }

  deleteScoreHandler = (index) => {
    const notas = [...this.state.notas];
    notas.pop();
    this.setState({
      notas
    }, () => {
      this.averageHandler();
    });
  }

  showInfoHandler = () => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      onOpen: () => {
        MySwal.clickConfirm()
      }
    }).then(() => {
      return MySwal.fire({
        type: 'info',
        html:
          '<button class="btn btn-success btn-sm" disabled><i class="fas fa-plus"></i></button> Agregar nueva nota.<br>' +
          '<button class="btn btn-danger btn-sm mt-1" disabled><i class="far fa-trash-alt"></i></button> Eliminar la última nota.' +
          '<hr>' +
          '<div class="text-center">' +
          '<small class="text-muted">Creado por <a target="_blank" href="https://github.com/a-fuenzalida">Andrés Fuenzalida</a></small>' +
          '</div>'
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ListaNotas notas={this.state.notas} changed={this.scoreChangedHandler} />
        <Footer 
          addScore={this.addScoreHandler} 
          deleteScore={this.deleteScoreHandler} 
          promedio={this.state.promedio}
          showInfo={this.showInfoHandler}
        />
      </div>
    );
  }
}

export default App;
