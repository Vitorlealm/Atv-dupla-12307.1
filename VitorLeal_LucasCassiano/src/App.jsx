import { useState } from "react";
import "./App.css";
import Perfil from "./components/Perfil";
import Acao from "./components/Acao";

const STATUS = [
  { cd: 0, desc: "Atividade em Progresso" },
  { cd: 1, desc: "Atividade Concluída!" },
];

function App() {
  const [statusCode, setStatusCode] = useState(0);

  const handleClick = () => {
    statusCode === 0 ? setStatusCode(1) : setStatusCode(0);
  };

  const currentStatus = STATUS.find((s) => s.cd === statusCode);

  const studentData = {
    nome: "Vitor Leal de Oliveira Martins",
    curso: "2026/1 - BSI0309NA - Desenvolvimento Web Front End",
    status: currentStatus.desc,
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Painel Interativo do Aluno</h1>

        <Perfil
          nome={studentData.nome}
          curso={studentData.curso}
          status={studentData.status}
        />

        <Acao onClick={handleClick} status={currentStatus.desc} />
      </div>
    </div>
  );
}

export default App;
