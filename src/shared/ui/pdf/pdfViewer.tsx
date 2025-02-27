// src/components/PDFTronViewer.tsx
import React, { useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer';

type PDFTronViewerProps = {
  fileUrl: string;
};

const PDFTronViewer: React.FC<PDFTronViewerProps> = ({ fileUrl }) => {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Configure the WebViewer.
    // Adjust the 'path' property below to point to your WebViewer assets (e.g., in public/webviewer)
    WebViewer(
      {
        path: '/webviewer/lib', // Path to WebViewer's 'lib' folder in your public folder
        initialDoc: fileUrl,
      },
      viewerRef.current as HTMLDivElement,
    ).then((instance) => {
      // You can get a reference to the instance here
      console.log('PDFTron WebViewer loaded', instance);
    });
  }, [fileUrl]);

  return <div ref={viewerRef} style={{ height: '750px', width: '100%' }} />;
};

export default PDFTronViewer;
