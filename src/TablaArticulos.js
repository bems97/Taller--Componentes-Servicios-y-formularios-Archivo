import { useState, useEffect } from 'react';

// Al definir los datos estáticos fuera del componente, se elimina la advertencia de ESLint
const DATOS_EJEMPLO = [
  { codigo: 1, descripcion: 'papas', precio: 34 },
  { codigo: 2, descripcion: 'manzanas', precio: 23.5 },
  { codigo: 3, descripcion: 'sandia', precio: 31 }
];

function TablaArticulos() {
  const [articulos, setArticulos] = useState([]);
  const [recuperado, setRecuperado] = useState(false);

  useEffect(() => {
    fetch('https://scratchya.com.ar/react/datos.php')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Respuesta no válida del servidor');
        }
        return response.json();
      })
      .then((datos) => {
        setArticulos(datos);
        setRecuperado(true);
      })
      .catch((error) => {
        console.warn('Servidor externo no disponible o error de CORS. Cargando datos de respaldo...', error);
        setArticulos(DATOS_EJEMPLO);
        setRecuperado(true);
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
      <h2>Punto 4: Peticiones con la API fetch</h2>
      {recuperado ? mostrarTabla() : <div>Recuperando datos...</div>}
    </div>
  );
}

export default TablaArticulos;