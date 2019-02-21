import React, { Component } from 'react';
import Presupuesto from './Presupuesto';
import Restante from './Restante';
import { revisarPresupuesto } from '../helpers';
import PropTypes from 'prop-types';


class ControlPresupuesto extends Component {
  render() {
    const presupuesto = this.props.presupuesto;
    const restante = this.props.restante;

    const clase = revisarPresupuesto(presupuesto, restante);
    return (
      <div>
        <Presupuesto presupuesto={presupuesto} />
        <Restante restante={restante} clase={clase} />
      </div>
    );
  }
}

ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.string.isRequired,
  restante: PropTypes.string.isRequired
}

export default ControlPresupuesto;