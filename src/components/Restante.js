import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Restante extends Component {
  render() {
    const restante = this.props.restante;
    const clase = this.props.clase;
    return (
      <div className={clase}>
        Restante: {restante}
      </div>
    );
  }
}

Restante.propTypes = {
  restante: PropTypes.string.isRequired
}

export default Restante;