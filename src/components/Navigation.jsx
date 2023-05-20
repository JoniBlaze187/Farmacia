import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <>
    <header>
      <h1>FARMACIAS DEL AHORRO</h1>
    <nav>
          <Link to="/agregar">Bebidas</Link>
          <Link to="/editar"> Dulces</Link>
          <Link to="/productos"> Medicamentos</Link>  
    </nav>
    </header>
    </>
  );
}

export default Navigation;
