import { useState } from 'react';
import ListadoResultados from './ListadoResultados';

function App() {
  const [operaciones, setOperacion] = useState([]);

  function operar(tipo) {
    // Obtenemos los inputs a través de sus IDs
    const input1 = document.getElementById('valor1');
    const input2 = document.getElementById('valor2');

    const v1 = parseFloat(input1.value);
    const v2 = parseFloat(input2.value);

    // Validación básica de campos vacíos o no numéricos
    if (isNaN(v1) || isNaN(v2)) {
      alert('Por favor, ingrese ambos números.');
      return;
    }

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

    // Agrega el nuevo resultado al inicio de la lista
    setOperacion([nuevo, ...operaciones]);

    // Limpia los campos
    input1.value = '';
    input2.value = '';
    input1.focus();
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Calculadora con Historial</h2>
      <p>
        Ingrese primer valor: <input type="number" id="valor1" />
      </p>
      <p>
        Ingrese segundo valor: <input type="number" id="valor2" />
      </p>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
        <button onClick={() => operar('suma')}>Sumar</button>
        <button onClick={() => operar('resta')}>Restar</button>
        <button onClick={() => operar('multiplicacion')}>Multiplicar</button>
        <button onClick={() => operar('division')}>Dividir</button>
      </div>

      <hr />
      <h3>Historial de Operaciones</h3>
      <ListadoResultados resultados={operaciones} />
    </div>
  );
}

export default App;
