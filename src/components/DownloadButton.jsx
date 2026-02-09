import html2pdf from "html2pdf.js";

const DownloadButton = () => {
  const download = () => {
    const el = document.getElementById("resume-preview");
    if (!el) {
      alert("Resume not found");
      return;
    }

    html2pdf()
      .set({
        margin: [10, 10, 10, 10], // top, left, bottom, right (mm)
        filename: "Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          scrollX: 0,
          scrollY: 0,
          useCORS: true
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait"
        }
      })
      .from(el)
      .save();
  };

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <button onClick={download}>Download Resume</button>
    </div>
  );
};

export default DownloadButton;
