import React, { useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

const PDFViewer: React.FC<PDFViewerProps> = ({ fileUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  console.log('fileUrl', fileUrl);
  useEffect(() => {
    // Set the worker source to the correct URL for pdf.js
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://unpkg.com/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs';

    // Load the PDF document
    const loadPdf = async () => {
      try {
        const pdf = await pdfjsLib.getDocument(fileUrl).promise; // Load the PDF
        const page = await pdf.getPage(1); // Get the first page
        const viewport = page.getViewport({ scale: 1.0 });
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        if (canvas && context) {
          // Set the canvas dimensions to match the PDF page
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          // Render the page onto the canvas
          page.render({
            canvasContext: context,
            viewport: viewport,
          });
        }
      } catch (err) {
        console.error('Error loading the PDF:', err);
      }
    };

    loadPdf(); // Call the function to load and render the PDF
  }, [fileUrl]); // Re-run the effect if the fileUrl changes

  return <canvas ref={canvasRef} />;
};

export default PDFViewer;
