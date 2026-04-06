import "./Perfil.css";

function Perfil(props) {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-name">{props.nome}</h2>

        <div className="profile-item">
          <label className="profile-label">Curso:</label>
          <p className="profile-value">{props.curso}</p>
        </div>

        <div className="profile-item">
          <label className="profile-label">Status:</label>
          <p className="profile-status">{props.status}</p>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
