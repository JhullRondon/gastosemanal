import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

  // refs para leer los campos del formulario

  nombreGastoRef = React.createRef();
  cantidadGastoRef = React.createRef();

  verificarInputs = gasto => {

    const nombre = gasto.nombreGasto;
    const cantidad = gasto.cantidadGasto;

    const regex = new RegExp(/^[A-Za-z]+$/);

    if (!regex.test(nombre)) {
      return false;
    }

    if (isNaN(cantidad)) {
      return false;
    }

    return true;

  }
  crearGasto = (e) => {
    // prevenir el default
      e.preventDefault();
    // crear el objeto
    const gasto = {
      nombreGasto: this.nombreGastoRef.current.value,
      cantidadGasto: this.cantidadGastoRef.current.value
    }

    if (!this.verificarInputs(gasto)) {
      alert('Debe ingresar texto para el nombre del gasto, y numeros para la cantidad')
      e.currentTarget.reset();
      return false;
    }
    
    // agregarlo y enviar por props
    this.props.agregarGasto(gasto);
    // resetear el formulario
    e.currentTarget.reset();
  }
  render() {
    return (
      <form onSubmit={this.crearGasto}>
        <h2>Agrega tus gastos aqui</h2>
        <div className="campo">
            <label>Nombre Gasto</label>
            <input ref={this.nombreGastoRef} className="u-full-width" type="text" placeholder="Ej. Transporte" />
        </div>

        <div className="campo">
            <label>Cantidad</label>
            <input ref={this.cantidadGastoRef} className="u-full-width" type="text" placeholder="Ej. 300" />
        </div>

        <input className="button-primary u-full-width" type="submit" value="Agregar" />
      </form>
    );
  }
}

Form.propTypes = {
  agregarGasto: PropTypes.func.isRequired
}

export default Form;