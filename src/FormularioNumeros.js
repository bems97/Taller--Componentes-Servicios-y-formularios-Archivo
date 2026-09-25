function FormularioNumeros(props) {
  function manejarOperacion(tipo) {
    const input1 = document.getElementById('num1');
    const input2 = document.getElementById('num2');

    const v1 = parseFloat(input1.value);
    const v2 = parseFloat(input2.value);

    // Validación básica de campos vacíos
    if (isNaN(v1) || isNaN(v2)) {
      alert('Por favor, ingrese ambos números.');
      return;
    }

    if (tipo === 'division' && v2 === 0) {
      alert('No es posible dividir por cero.');
      return;
    }

    // Emite el evento hacia el componente padre enviando los valores y la operación
    props.onCalcular(v1, v2, tipo);

    // Limpia los campos
    input1.value = '';
    input2.value = '';
    input1.focus();
  }

  return (
    <div>
      <p>
        Ingrese primer valor: <input type="number" id="num1" step="any" />
      </p>
      <p>
        Ingrese segundo valor: <input type="number" id="num2" step="any" />
      </p>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
        <button type="button" onClick={() => manejarOperacion('suma')}>Sumar</button>
        <button type="button" onClick={() => manejarOperacion('resta')}>Restar</button>
        <button type="button" onClick={() => manejarOperacion('multiplicacion')}>Multiplicar</button>
        <button type="button" onClick={() => manejarOperacion('division')}>Dividir</button>
      </div>
    </div>
  );
}

export default FormularioNumeros;