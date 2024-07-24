import PdfViewer from "@/components/pdf-viewer";

const Home: React.FC = () => {
  const pdfUrl = "/sample.pdf"; // 공개된 PDF 파일 경로

  return (
    <div>
      <h1>PDF.js와 Next.js</h1>
      <PdfViewer pdfUrl={pdfUrl} />
    </div>
  );
};

export default Home;
