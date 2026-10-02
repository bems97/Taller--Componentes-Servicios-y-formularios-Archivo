import { useState, useEffect } from 'react';

function TablaArticulosOriginal() {
  const [articulos, setArticulos] = useState([]);
  const [recuperado, setRecuperado] = useState(false);

  useEffect(() => {
    // Petición directa a la URL oficial de la guía
    fetch('https://scratchya.com.ar/react/datos.php')
      .then((response) => {
        return response.json();
      })
      .then((articulos) => {
        setArticulos(articulos);
        setRecuperado(true);
      })
      .catch((error) => {
        console.error('Error de conexión / CORS con la URL de la guía:', error);
      });
  }, []);

  function mostrarTabla() {
    return (
      <table border="1" style={{ borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr>
            <th style={{ padding: '4px 10px' }}>Código</th>
            <th style={{ padding: '4px 10px' }}>Descripción</th>
            <th style={{ padding: '4px 10px' }}>Precio</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map((art) => (
            <tr key={art.codigo}>
              <td style={{ padding: '4px 10px' }}>{art.codigo}</td>
              <td style={{ padding: '4px 10px' }}>{art.descripcion}</td>
              <td style={{ padding: '4px 10px' }}>{art.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div style={{ marginTop: '30px', padding: '15px', border: '1px solid #ccc' }}>
      <h2>Punto 4 (Original de la guía - URL con bloqueo/CORS)</h2>
      <p style={{ color: '#666', fontSize: '14px' }}>
        Consultando directamente a <code>https://scratchya.com.ar/react/datos.php</code>:
      </p>
      {recuperado ? mostrarTabla() : <div>Recuperando datos...</div>}
    </div>
  );
}

export default TablaArticulosOriginal;