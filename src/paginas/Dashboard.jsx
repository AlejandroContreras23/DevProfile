import { useContext } from "react";
import { CVContext } from "../contexto/CVContext";
import GraficaHabilidades from "../componentes/GraficaHabilidades";
import "../estilos/dashboard.css";

function Dashboard() {
  const { datosCV } = useContext(CVContext);

  const contarItems = (texto) => {
    if (!texto) return 0;

    return texto
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "").length;
  };

  const habilidadesTecnicas = [
    { nombre: "React", valor: Number(datosCV.reactNivel) || 0 },
    { nombre: "JavaScript", valor: Number(datosCV.javascriptNivel) || 0 },
    { nombre: "Node.js", valor: Number(datosCV.nodeNivel) || 0 },
    { nombre: "MySQL", valor: Number(datosCV.mysqlNivel) || 0 },
    { nombre: "MongoDB", valor: Number(datosCV.mongodbNivel) || 0 },
  ];

  const promedioTecnico =
    habilidadesTecnicas.reduce((total, skill) => total + skill.valor, 0) /
    habilidadesTecnicas.length;

  const mejorSkill = habilidadesTecnicas.reduce((mayor, actual) =>
    actual.valor > mayor.valor ? actual : mayor,
  );

  const camposCV = [
    datosCV.nombre,
    datosCV.profesion,
    datosCV.correo,
    datosCV.telefono,
    datosCV.perfil,
    datosCV.habilidades,
    datosCV.idiomas,
    datosCV.educacion,
    datosCV.certificaciones,
    datosCV.proyectos,
    datosCV.experiencia,
  ];

  const camposCompletados = camposCV.filter(
    (campo) => campo && campo.trim() !== "",
  ).length;

  const porcentajeCompletado = (camposCompletados / camposCV.length) * 100;

  return (
    <div className="dashboard-container">
      <h1>Dashboard Profesional</h1>

      <p className="dashboard-subtitle">
        Analiza el avance, habilidades y contenido de tu currículum.
      </p>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Habilidades</h3>
          <span>{contarItems(datosCV.habilidades)}</span>
        </div>

        <div className="stat-card">
          <h3>Idiomas</h3>
          <span>{contarItems(datosCV.idiomas)}</span>
        </div>

        <div className="stat-card">
          <h3>Proyectos</h3>
          <span>{contarItems(datosCV.proyectos)}</span>
        </div>

        <div className="stat-card">
          <h3>Certificaciones</h3>
          <span>{contarItems(datosCV.certificaciones)}</span>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card average-card">
          <h2>Nivel Técnico General</h2>
          <span>{promedioTecnico.toFixed(0)}%</span>
          <p>Promedio calculado con tus habilidades técnicas.</p>
        </div>

        <div className="dashboard-card best-skill">
          <h2>Fortaleza Principal</h2>
          <span>{mejorSkill.nombre}</span>
          <p>{mejorSkill.valor}% de dominio registrado.</p>
        </div>

        <div className="dashboard-card completion-card">
          <h2>CV Completado</h2>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${porcentajeCompletado}%` }}
            ></div>
          </div>

          <p>{porcentajeCompletado.toFixed(0)}% completado</p>
        </div>

        <div className="dashboard-card profile-summary">
          <h2>Resumen del Perfil</h2>

          <h3>{datosCV.nombre || "Nombre no registrado"}</h3>
          <p>{datosCV.profesion || "Profesión no registrada"}</p>
          <p>{datosCV.correo || "Correo no registrado"}</p>
          <p>{datosCV.telefono || "Teléfono no registrado"}</p>
        </div>
      </div>

      <div className="dashboard-card chart-card">
        <h2>Gráfica de Habilidades</h2>
        <GraficaHabilidades />
      </div>
    </div>
  );
}

export default Dashboard;
