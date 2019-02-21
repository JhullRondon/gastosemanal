import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gasto extends Component {
  render() {
    if (this.props.gasto !== undefined){
      const {cantidadGasto, nombreGasto} = this.props.gasto;
      return (
        <div className='gastos-realizados'>
          <li>
            <p>
              {nombreGasto}
              <span className='gasto'>$ {cantidadGasto}</span>
            </p>
          </li>
        </div>
      )
    }else {
      return(<p></p>);
    }
  }
}

Gasto.propType = {
  gasto: PropTypes.object.isRequired
}

export default Gasto;