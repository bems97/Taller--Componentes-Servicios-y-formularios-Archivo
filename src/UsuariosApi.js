import { useState, useEffect } from 'react';

function UsuariosApi() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('Error en la petición a la API');
        }
        return respuesta.json();
      })
      .then((datos) => {
        setUsuarios(datos);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return (
      <div style={{ marginTop: '30px', padding: '15px', border: '1px solid #ccc' }}>
        <h2>Consumo de API Externa en Vivo (JSONPlaceholder)</h2>
        <p>Cargando datos en tiempo real desde la API...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ marginTop: '30px', padding: '15px', border: '1px solid #ccc' }}>
        <h2>Consumo de API Externa en Vivo (JSONPlaceholder)</h2>
        <p style={{ color: 'red' }}>Error: {error}</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '30px', padding: '15px', border: '1px solid #ccc' }}>
      <h2>Consumo de API Externa en Vivo (JSONPlaceholder)</h2>
      <p>Datos recuperados en tiempo real mediante <code>fetch</code>:</p>
      
      <table border="1" style={{ borderCollapse: 'collapse', width: '100%', marginTop: '10px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '6px 10px', textAlign: 'left' }}>ID</th>
            <th style={{ padding: '6px 10px', textAlign: 'left' }}>Nombre</th>
            <th style={{ padding: '6px 10px', textAlign: 'left' }}>Usuario</th>
            <th style={{ padding: '6px 10px', textAlign: 'left' }}>Correo</th>
            <th style={{ padding: '6px 10px', textAlign: 'left' }}>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td style={{ padding: '6px 10px' }}>{u.id}</td>
              <td style={{ padding: '6px 10px' }}>{u.name}</td>
              <td style={{ padding: '6px 10px' }}>{u.username}</td>
              <td style={{ padding: '6px 10px' }}>{u.email}</td>
              <td style={{ padding: '6px 10px' }}>{u.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsuariosApi;