import "../estilos/acercade.css";

function AcercaDe() {
  return (
    <div className="acerca-container">

      <h1>Acerca de DevProfile CV</h1>

      <p>
        DevProfile CV es una aplicación web desarrollada para facilitar
        la creación de currículums profesionales de manera rápida,
        intuitiva y visual.
      </p>

      <h2>Objetivo del Proyecto</h2>

      <p>
        Permitir a los usuarios crear, personalizar y exportar
        currículums profesionales mediante una interfaz amigable,
        incorporando elementos visuales como fotografía de perfil,
        habilidades técnicas y generación automática de PDF.
      </p>

      <h2>Características Principales</h2>

      <ul>
        <li>✔ Edición de información en tiempo real.</li>
        <li>✔ Carga de fotografía de perfil.</li>
        <li>✔ Visualización instantánea del currículum.</li>
        <li>✔ Gráfica de habilidades técnicas.</li>
        <li>✔ Exportación del CV a PDF.</li>
      </ul>

      <h2>Tecnologías Utilizadas</h2>

      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>React Router DOM</li>
        <li>Chart.js</li>
        <li>html2canvas</li>
        <li>jsPDF</li>
        <li>LocalStorage</li>
      </ul>

        <h2>Desarrolladores</h2>

        <div className="dev-info">
        <p><strong>Nombres:</strong> José Alejandro Contreras Becerra</p>
        <p>Emiliano de Jesus Esparza Ramirez</p>
        <p>David Alejandro Diaz de Leon Anguiano</p>

        <p><strong>Carrera:</strong> Ingeniería en Sistemas Computacionales</p>

        <p><strong>Institución:</strong> Universidad Autónoma de Aguascalientes</p>
      </div>

      <h2>Versión</h2>

      <p>DevProfile CV v1.0</p>

    </div>
  );
}

export default AcercaDe;