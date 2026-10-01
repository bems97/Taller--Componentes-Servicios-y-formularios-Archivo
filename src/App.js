import { useState } from 'react';
import FormularioNumeros from './FormularioNumeros';
import ListadoResultados from './ListadoResultados';
import CambioTitulo from './CambioTitulo';

function App() {
  const [operaciones, setOperacion] = useState([]);

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
        if (v2 === 0) {
          alert('No es posible dividir por cero.');
          return;
        }
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

    setOperacion([nuevo, ...operaciones]);
  }

  return (
    <div style={{ padding: '20px' }}>
      {/* Ejercicio anterior de Calculadora */}
      <h2>Calculadora Modular (Eventos entre Componentes)</h2>
      <FormularioNumeros onCalcular={calcularResultado} />

      <hr />
      <h3>Historial de Operaciones</h3>
      <ListadoResultados resultados={operaciones} />

      {/* Ejemplo 2 del taller */}
      <CambioTitulo />
    </div>
  );
}

export default App;