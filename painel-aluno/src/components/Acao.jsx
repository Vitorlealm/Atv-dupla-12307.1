import "./Acao.css";

function Acao(props) {
  const buttonText =
    props.status.cd === 1
      ? "Definir atividade em progresso"
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
