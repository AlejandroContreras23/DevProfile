import "../estilos/inicio.css";
import { useNavigate } from "react-router-dom";

function Inicio() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>DevProfile CV Builder</h1>

        <p>
          Crea currículums profesionales de forma rápida, moderna y sencilla.
          Diseña tu perfil, visualízalo en tiempo real y expórtalo a PDF.
        </p>

        <div className="features">
          <div className="feature-card">
            <h3>📄 Currículum Profesional</h3>
            <p>Genera CVs modernos con un diseño atractivo.</p>
          </div>

          <div className="feature-card">
            <h3>⚡ Vista en Tiempo Real</h3>
            <p>Observa los cambios mientras editas.</p>
          </div>

          <div className="feature-card">
            <h3>📊 Dashboard</h3>
            <p>Analiza tus habilidades y experiencia.</p>
          </div>
        </div>

        <button className="btn-start" onClick={() => navigate("/editor")}>
          Comienza a crear tu CV
        </button>
      </div>
    </section>
  );
}

export default Inicio;