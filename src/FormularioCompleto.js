import { useState } from 'react';

function FormularioCompleto() {
  // 1. Caja de texto (input text)
  const [responsable, setResponsable] = useState('');

  // 2. Control de calendario (input date)
  const [fechaIncidente, setFechaIncidente] = useState('');

  // 3. Menú de selección (select)
  const [nivelSeveridad, setNivelSeveridad] = useState('Media');

  // 4. Checklist con casillas de verificación múltiples
  const [sistemasAfectados, setSistemasAfectados] = useState({
    servidores: false,
    baseDatos: false,
    redLocal: false,
    estacionesTrabajo: false
  });

  // 5. Área de texto (textarea)
  const [descripcion, setDescripcion] = useState('');

  // Estado para capturar y renderizar la información al enviar
  const [registroExitoso, setRegistroExitoso] = useState(null);

  function manejarChecklist(e) {
    const { name, checked } = e.target;
    setSistemasAfectados({
      ...sistemasAfectados,
      [name]: checked
    });
  }

  function enviarFormulario(e) {
    e.preventDefault();

    // Filtramos los sistemas marcados en el checklist
    const seleccionados = Object.keys(sistemasAfectados)
      .filter((item) => sistemasAfectados[item])
      .map((item) => {
        if (item === 'servidores') return 'Servidores Cloud/On-Premise';
        if (item === 'baseDatos') return 'Base de Datos';
        if (item === 'redLocal') return 'Infraestructura de Red';
        if (item === 'estacionesTrabajo') return 'Equipos de Usuario';
        return item;
      });

    // Guardamos los datos para mostrarlos inmediatamente en pantalla
    setRegistroExitoso({
      responsable,
      fechaIncidente,
      nivelSeveridad,
      sistemas: seleccionados.length > 0 ? seleccionados.join(', ') : 'Ninguno seleccionado',
      descripcion: descripcion.trim() || 'Sin descripción detallada'
    });
  }

  return (
    <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #0284c7', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
      <h2 style={{ color: '#0369a1', marginTop: 0 }}>
        Registro de Incidentes de Ciberseguridad e Infraestructura TI
      </h2>
      <p style={{ color: '#475569', fontSize: '14px' }}>
        Complete el formulario con los detalles técnicos del evento reportado.
      </p>

      <form onSubmit={enviarFormulario} style={{ display: 'grid', gap: '15px' }}>
        {/* 1. Caja de texto */}
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
            Analista / Responsable del reporte:
          </label>
          <input
            type="text"
            value={responsable}
            onChange={(e) => setResponsable(e.target.value)}
            placeholder="Ej: Brayan Morales"
            required
            style={{ width: '100%', maxWidth: '400px', padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
        </div>

        {/* 2. Calendario */}
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
            Fecha de detección del incidente:
          </label>
          <input
            type="date"
            value={fechaIncidente}
            onChange={(e) => setFechaIncidente(e.target.value)}
            required
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
        </div>

        {/* 3. Menú desplegable */}
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
            Nivel de criticidad / severidad:
          </label>
          <select
            value={nivelSeveridad}
            onChange={(e) => setNivelSeveridad(e.target.value)}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          >
            <option value="Baja">Baja (Rendimiento o evento menor)</option>
            <option value="Media">Media (Afectación parcial de servicios)</option>
            <option value="Alta">Alta (Indisponibilidad de servicios críticos)</option>
            <option value="Crítica">Crítica (Fuga de datos o compromiso de seguridad)</option>
          </select>
        </div>

        {/* 4. Checklist */}
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
            Activos y sistemas impactados (Checklist):
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label>
              <input
                type="checkbox"
                name="servidores"
                checked={sistemasAfectados.servidores}
                onChange={manejarChecklist}
              /> Servidores Cloud / On-Premise
            </label>
            <label>
              <input
                type="checkbox"
                name="baseDatos"
                checked={sistemasAfectados.baseDatos}
                onChange={manejarChecklist}
              /> Base de Datos (SQL / NoSQL)
            </label>
            <label>
              <input
                type="checkbox"
                name="redLocal"
                checked={sistemasAfectados.redLocal}
                onChange={manejarChecklist}
              /> Infraestructura de Red (Switches, Routers, VPN)
            </label>
            <label>
              <input
                type="checkbox"
                name="estacionesTrabajo"
                checked={sistemasAfectados.estacionesTrabajo}
                onChange={manejarChecklist}
              /> Estaciones de trabajo / Equipos locales
            </label>
          </div>
        </div>

        {/* 5. Área de texto */}
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
            Diagnóstico técnico y descripción de la falla:
          </label>
          <textarea
            rows="4"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Describa el comportamiento anómalo, logs identificados y acciones de contención inicial..."
            required
            style={{ width: '100%', maxWidth: '600px', padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
        </div>

        <div>
          <button
            type="submit"
            style={{
              backgroundColor: '#0284c7',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Enviar y Registrar Incidencia
          </button>
        </div>
      </form>

      {/* Resumen dinámico que se despliega al dar Enviar */}
      {registroExitoso && (
        <div
          style={{
            marginTop: '25px',
            padding: '15px',
            backgroundColor: '#f0fdf4',
            border: '2px solid #22c55e',
            borderRadius: '6px'
          }}
        >
          <h3 style={{ color: '#15803d', marginTop: 0 }}>
            Reporte Generado Exitosamente
          </h3>
          <p><strong>Responsable:</strong> {registroExitoso.responsable}</p>
          <p><strong>Fecha del Incidente:</strong> {registroExitoso.fechaIncidente}</p>
          <p><strong>Nivel de Criticidad:</strong> {registroExitoso.nivelSeveridad}</p>
          <p><strong>Sistemas Afectados:</strong> {registroExitoso.sistemas}</p>
          <p><strong>Diagnóstico / Observaciones:</strong> {registroExitoso.descripcion}</p>
        </div>
      )}
    </div>
  );
}

export default FormularioCompleto;