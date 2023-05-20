import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const AgregarBebida = () => {
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
      <Link to={`/agregar/`}></Link>

      <h3>Agregar Bebidas</h3>
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
          />
        </div>

        <br></br>
        <div>
          <input
            class='form-control form-control-sm'
            type="text"
            name="precio"
            value={nuevoMedicamento.precio}
            required
            onChange={handleChange}
            placeholder="Precio"

          />
        </div>
        <br></br>
        <br />
        <button type='sumbit' color='primary'  className='btn-logout'  onClick={agregarMedicamento}>
          Agregar
        </button>
      </form>
      <h2>Bebidas</h2>
      
      <table className='table table-striped table-hover mt-7 shadow-lg' id='tablef'>
        <thead id='headertable'>
          <tr className='bg-curso text-Black'>
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
                  <button type='sumbit' color='primary' onClick={guardarEdicion}>Guardar</button>
                ) : (
                  <>
                    <button color="primary" onClick={() => editarMedicamento(index)}>
                      Editar
                    </button>
                    <button color="danger" onClick={() => eliminarMedicamento(index)}>
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

export default AgregarBebida;
