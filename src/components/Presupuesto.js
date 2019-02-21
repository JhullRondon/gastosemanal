import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Presupuesto extends Component {
  render() {
    const presupuesto = this.props.presupuesto;
    return (
      <div className='alert alert-primary'>
        Presupuesto: {presupuesto}
      </div>
    );
  }
}

Presupuesto.propTypes = {
  presupuesto: PropTypes.string.isRequired
}

export default Presupuesto;