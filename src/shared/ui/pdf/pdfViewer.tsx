import React, { useState, useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

interface PDFViewerProps {
  fileUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ fileUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pdf, setPdf] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    // Set the worker source for pdf.js
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://unpkg.com/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs';

    const loadPdf = async () => {
      try {
        const loadedPdf = await pdfjsLib.getDocument(fileUrl).promise;
        setPdf(loadedPdf);
        setNumPages(loadedPdf.numPages);
        renderPage(loadedPdf, pageNumber);
      } catch (err) {
        console.error('Error loading the PDF:', err);
      }
    };

    loadPdf();
  }, [fileUrl]);

  useEffect(() => {
    if (pdf) {
      renderPage(pdf, pageNumber);
    }
  }, [pdf, pageNumber]);

  const renderPage = async (
    pdf: pdfjsLib.PDFDocumentProxy,
    pageNum: number,
  ) => {
    const page = await pdf.getPage(pageNum);
    const scale = 1.5;
    const viewport = page.getViewport({ scale });
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      if (context) {
        await page.render({ canvasContext: context, viewport }).promise;
      }
    }
  };

  const goToPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div>
      <canvas ref={canvasRef} />
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
          Previous
        </button>
        <span style={{ margin: '0 1rem' }}>
          {pageNumber} / {numPages}
        </span>
        <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PDFViewer;
