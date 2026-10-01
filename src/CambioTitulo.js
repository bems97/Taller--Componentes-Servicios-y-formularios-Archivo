import { useState, useEffect } from 'react';

function CambioTitulo() {
  const [texto, setTexto] = useState('');

  // Actualiza en tiempo real el título de la pestaña del navegador
  useEffect(() => {
    document.title = texto;
  }, [texto]);

  function cambiar(e) {
    setTexto(e.target.value);
  }

  return (
    <div style={{ marginTop: '30px', padding: '15px', border: '1px solid #ccc' }}>
      <h2>Ejemplo 2: Actualizar Título del Navegador</h2>
      <p>
        Ingrese texto para el título: <input type="text" onChange={cambiar} placeholder="Escribe aquí..." />
      </p>
      <p>Texto actual: {texto}</p>
    </div>
  );
}

export default CambioTitulo;