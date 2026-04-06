import "./Acao.css";

function Acao(props) {
  const buttonText =
    props.status === "Atividade Concluída!"
      ? "Em andamento"
      : "Concluir Atividade";

  return (
    <div className="action-container">
      <button className="action-button" onClick={props.onClick}>
        {buttonText}
      </button>
    </div>
  );
}

export default Acao;
