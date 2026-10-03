import { useState } from 'react';

function ListaArticulosBorrado() {
  const [articulos, setArticulos] = useState([
    { codigo: 1, descripcion: 'papas', precio: 12.52 },
    { codigo: 2, descripcion: 'naranjas', precio: 21 },
    { codigo: 3, descripcion: 'peras', precio: 18.2 }
  ]);

  function borrar(cod) {
    // Filtra la lista dejando solo los artículos cuyo código sea diferente al seleccionado
    const temp = articulos.filter((art) => art.codigo !== cod);
    setArticulos(temp);
  }

  return (
    <div style={{ marginTop: '30px', padding: '15px', border: '1px solid #ccc' }}>
      <h2>Punto 5: Propiedad key en listas de datos (Borrado dinámico)</h2>
      
      {articulos.length === 0 ? (
        <p>No quedan artículos en la lista.</p>
      ) : (
        <table border="1" style={{ borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ padding: '4px 10px' }}>Código</th>
              <th style={{ padding: '4px 10px' }}>Descripción</th>
              <th style={{ padding: '4px 10px' }}>Precio</th>
              <th style={{ padding: '4px 10px' }}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {articulos.map((art) => (
              <tr key={art.codigo}>
                <td style={{ padding: '4px 10px', textAlign: 'center' }}>{art.codigo}</td>
                <td style={{ padding: '4px 10px' }}>{art.descripcion}</td>
                <td style={{ padding: '4px 10px' }}>{art.precio}</td>
                <td style={{ padding: '4px 10px', textAlign: 'center' }}>
                  <button type="button" onClick={() => borrar(art.codigo)}>
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListaArticulosBorrado;