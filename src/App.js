import { useState } from 'react';
import FormularioNumeros from './FormularioNumeros';
import ListadoResultados from './ListadoResultados';

function App() {
  const [operaciones, setOperacion] = useState([]);

  // Función que se ejecuta cuando el hijo emite el evento onCalcular
  function calcularResultado(v1, v2, tipo) {
    let res = 0;
    let simbolo = '';

    switch (tipo) {
      case 'suma':
        res = v1 + v2;
        simbolo = '+';
        break;
      case 'resta':
        res = v1 - v2;
        simbolo = '-';
        break;
      case 'multiplicacion':
        res = v1 * v2;
        simbolo = '*';
        break;
      case 'division':
        res = v1 / v2;
        simbolo = '/';
        break;
      default:
        return;
    }

    const nuevo = {
      valor1: v1,
      valor2: v2,
      operacion: simbolo,
      resultado: res
    };

    // Agrega la nueva operación al inicio del historial
    setOperacion([nuevo, ...operaciones]);
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Calculadora Modular (Eventos entre Componentes)</h2>
      
      {/* Pasamos la función callback mediante la prop onCalcular */}
      <FormularioNumeros onCalcular={calcularResultado} />

      <hr />
      <h3>Historial de Operaciones</h3>
      <ListadoResultados resultados={operaciones} />
    </div>
  );
}

export default App;