import LayoutCV from "../componentes/LayoutCV";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function VistaPrevia() {

  const descargarPDF = async () => {

    const elemento =
      document.getElementById("cv-pdf");

    const canvas =
      await html2canvas(elemento, {
        scale: 2,
      });

    const imgData =
      canvas.toDataURL("image/png");

    const pdf =
      new jsPDF(
        "p",
        "mm",
        "a4"
      );

    const anchoPDF = 210;

    const altoPDF =
      (canvas.height * anchoPDF) /
      canvas.width;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      anchoPDF,
      altoPDF
    );

    pdf.save("Curriculum.pdf");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <LayoutCV />

      <button
        className="btn-pdf"
        onClick={descargarPDF}
      >
        Descargar PDF
      </button>
    </div>
  );
}

export default VistaPrevia;