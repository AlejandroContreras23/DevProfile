import "../estilos/layoutcv.css";

function LayoutCV() {
  return (
    <div className="cv-container">

      <div className="cv-sidebar">

        <div className="cv-photo">
          FOTO
        </div>

        <div className="cv-section">
          <h3>Contacto</h3>
          <p>correo@email.com</p>
          <p>+52 312 123 4567</p>
        </div>

        <div className="cv-section">
          <h3>Habilidades</h3>
          <p>React</p>
          <p>JavaScript</p>
          <p>CSS</p>
        </div>

        <div className="cv-section">
          <h3>Idiomas</h3>
          <p>Español</p>
          <p>Inglés</p>
        </div>

      </div>

      <div className="cv-main">

        <div className="cv-header">
          <h1>Alejandro Contreras</h1>
          <h2>Desarrollador Web Full Stack</h2>
        </div>

        <div className="cv-section-main">
          <h3>Perfil Profesional</h3>
          <p>
            Profesional enfocado en desarrollo web moderno
            con experiencia en aplicaciones React.
          </p>
        </div>

        <div className="cv-section-main">
          <h3>Proyectos</h3>
          <p>Sistema de Gestión Escolar</p>
          <p>Tienda Online React</p>
        </div>

        <div className="cv-section-main">
          <h3>Educación</h3>
          <p>Ingeniería en Sistemas Computacionales</p>
        </div>

        <div className="cv-section-main">
          <h3>Certificaciones</h3>
          <p>React Fundamentals</p>
        </div>

      </div>

    </div>
  );
}

export default LayoutCV;