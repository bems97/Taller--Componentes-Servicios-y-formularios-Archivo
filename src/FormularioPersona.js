import { useState } from 'react';

function FormularioPersona() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [estudios, setEstudios] = useState(false);
  const [datosEnviados, setDatosEnviados] = useState(null);

  function cambiarNombre(e) {
    setNombre(e.target.value);
  }

  function cambiarEdad(e) {
    setEdad(e.target.value);
  }

  function cambiarEstudios(e) {
    setEstudios(e.target.checked);
  }

  function procesarFormulario(e) {
    e.preventDefault();
    setDatosEnviados({
      nombre: nombre,
      edad: edad,
      estudios: estudios ? 'Sí tiene estudios' : 'No tiene estudios'
    });
  }

  return (
    <div style={{ marginTop: '30px', padding: '15px', border: '1px solid #ccc' }}>
      <h2>6.1) Formularios: Enlace de Controles con Hooks de Estado</h2>
      
      <form onSubmit={procesarFormulario}>
        <p>
          Ingrese nombre: <input type="text" value={nombre} onChange={cambiarNombre} required />
        </p>
        <p>
          Ingrese edad: <input type="number" min="0" max="120" value={edad} onChange={cambiarEdad} required />
        </p>
        <p>
          <label>
            <input type="checkbox" checked={estudios} onChange={cambiarEstudios} /> ¿Tiene estudios?
          </label>
        </p>
        <button type="submit">Confirmar</button>
      </form>

      {datosEnviados && (
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f0f4f8' }}>
          <h4>Datos ingresados:</h4>
          <p><strong>Nombre:</strong> {datosEnviados.nombre}</p>
          <p><strong>Edad:</strong> {datosEnviados.edad}</p>
          <p><strong>Estudios:</strong> {datosEnviados.estudios}</p>
        </div>
      )}
    </div>
  );
}

export default FormularioPersona;