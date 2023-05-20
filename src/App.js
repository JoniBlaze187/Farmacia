import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import { useState } from 'react';
import AgregarBebida from './components/AgregarBebida';
import AgregarMedicamentos from './components/ProductosAgregados';
import AgregarDulces from './components/PharmacyComponent';
import './App.css'



function App() {
  const [productos, setProductos] = useState([]);

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/agregar"><AgregarBebida /></Route>
          <Route path="/productos">
            < AgregarDulces onProductoAgregado={agregarProducto} />
          </Route>
          <Route path="/editar">
            <AgregarMedicamentos productos={productos} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
