function DownloadImage() {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = "/public/CV.pdf"; // rasm manzili
    link.download = "CV.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleClick}>
      Download CV
    </button>
  );
}

export default DownloadImage;
