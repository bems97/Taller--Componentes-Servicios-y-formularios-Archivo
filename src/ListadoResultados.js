function ListadoResultados(props) {
  return (
    <ul>
      {props.resultados.map((elemento, index) => (
        <li key={index}>
          {elemento.valor1} {elemento.operacion} {elemento.valor2} = {elemento.resultado}
        </li>
      ))}
    </ul>
  );
}

export default ListadoResultados;