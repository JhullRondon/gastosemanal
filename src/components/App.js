import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Form from './Form';
import Listado from './Listado';
import { validarPresupuesto } from '../helpers';
import ControlPresupuesto from './ControlPresupuesto';

class App extends Component {

  state = {
    presupuesto: '',
    restante: '',
    gastos: {}
  }

  componentDidMount() {
    this.getPresupuesto();
  }

  getPresupuesto() {
    let presupuesto = prompt('Cual es el presupuesto?');

    let validado = validarPresupuesto(presupuesto);

    if (validado) {
      this.setState({
        presupuesto: String(validado),
        restante: String(validado)
      })
    } else {
      this.getPresupuesto();
    }

  }
  
   // restar gastos
  actualizarRestante = gasto => {

    const resta = Number(gasto.cantidadGasto);
    let restante = Number(this.state.restante);

    restante -= resta;

    restante = String(restante);

    this.setState({
      restante
    })
  }
  
  //agregar gasto al this.state

  agregarGasto = gasto => {
    //tomar una copia del state
    const gastos = {...this.state.gastos};
    // agregar el gasto al objeto del state
    gastos[`gasto${Date.now()}`] = gasto;
    // actualizar el state
    this.setState({
      gastos
    });

    // restar de restante
    if (gasto){
      this.actualizarRestante(gasto);
    }
  }

 
  
  render() {
    return (
      <div className='App container'>
        <Header 
          titulo='Gasto Semanal'
        />
        <div className='contenido-principal contenido'>
          <div className='row'>
              <div className='one-half column'>
                <Form 
                  agregarGasto={this.agregarGasto}
                />
              </div>
              <div className='one-half column'>
                <Listado 
                  gastos={this.state.gastos}
                />
                <ControlPresupuesto
                  presupuesto={this.state.presupuesto}
                  restante={this.state.restante}
                />
              </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
