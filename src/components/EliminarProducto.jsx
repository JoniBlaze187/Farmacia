import React from 'react';
import { Link } from 'react-router-dom';

function EliminarProducto() {
  return (
    <div>
      <Link to={`/eliminar/`}></Link>

      <h2>Eliminar Producto</h2>
      <p>Selecciona un producto para eliminar.</p>
      
    </div>
  );
}

export default EliminarProducto;
