interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  return (
    <div className="relative w-full h-screen">
      <iframe
        src={`/pdfjs-4.4.168-dist/web/viewer.html?file=${pdfUrl}`}
        className="absolute top-0 left-0 w-full h-full border-none"
      />
    </div>
  );
};

export default PdfViewer;
