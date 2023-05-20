import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const ProductosAgregados = () => {
  const [medicamentos, setMedicamentos] = useState([]);
  const [nuevoMedicamento, setNuevoMedicamento] = useState({
    nombre: '',
    precio: ''
  });
  const [edicionMedicamento, setEdicionMedicamento] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNuevoMedicamento((prevMedicamento) => ({
      ...prevMedicamento,
      [name]: value
    }));
  };

  const agregarMedicamento = () => {
    setMedicamentos((prevMedicamentos) => [
      ...prevMedicamentos,
      nuevoMedicamento
    ]);
    setNuevoMedicamento({ nombre: '', precio: '' });
  };

  const editarMedicamento = (index) => {
    setEdicionMedicamento(index);
    setNuevoMedicamento(medicamentos[index]);
  };

  const guardarEdicion = () => {
    setMedicamentos((prevMedicamentos) => {
      const nuevosMedicamentos = [...prevMedicamentos];
      nuevosMedicamentos[edicionMedicamento] = nuevoMedicamento;
      return nuevosMedicamentos;
    });
    setEdicionMedicamento(null);
    setNuevoMedicamento({ nombre: '', precio: '' });
  };

  const eliminarMedicamento = (index) => {
    setMedicamentos((prevMedicamentos) => {
      const nuevosMedicamentos = [...prevMedicamentos];
      nuevosMedicamentos.splice(index, 1);
      return nuevosMedicamentos;
    });
  };

  return (
    <div className='wrapper'>
      <Link to={`/productos/`}></Link>

      <h3>Agregar Dulces</h3>
      <form className='col-5' id='Fb'>

        <div> 
          <input
          class='form-control form-control-sm'
          type="text"
          name="nombre"
          value={nuevoMedicamento.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          required
        /></div>
      <br></br>

        <div> 
          <input
          type="text"
          name="precio"
          value={nuevoMedicamento.precio}
          onChange={handleChange}
          placeholder="Precio"
          required
        /></div>
        <br></br>


       
        <button  type='sumbit' color='primary'  className='btn-logout'  onClick={agregarMedicamento}>
          Agregar
        </button>
      </form>

      <h2>Dulces</h2>
      <table className='table table-striped table-hover mt-5 shadow-lg' id='tablef'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {medicamentos.map((medicamento, index) => (
            <tr key={index}>
              <td>{medicamento.nombre}</td>
              <td>{medicamento.precio}</td>
              <td>
                {edicionMedicamento === index ? (
                  <button onClick={guardarEdicion}>Guardar</button>
                ) : (
                  <>
                    <button onClick={() => editarMedicamento(index)}>
                      Editar
                    </button>
                    <button onClick={() => eliminarMedicamento(index)}>
                      Eliminar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  );
};

export default ProductosAgregados;
