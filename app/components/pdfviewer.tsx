"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  pdf,
  Text,
  Document as RenderDocument,
  Page as RenderPage,
} from "@react-pdf/renderer";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { saveAs } from "file-saver";
import { ZoomIn, ZoomOut, Download } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.mjs`;

export default function PdfViewer() {
  const [loading, setLoading] = useState(true);
  const [scale, setScale] = useState(1.0);
  function onDocumentLoadSuccess(): void {
    setLoading(false);
  }

  const handleDownload = async (event: any) => {
    event.preventDefault(); // prevent page reload
    const blob = await pdf(
      <RenderDocument>
        <RenderPage>
          <Text>Hello, World!</Text>
        </RenderPage>
      </RenderDocument>
    ).toBlob();

    saveAs(blob, "richard_resume.pdf");
  };

  return (
    <div hidden={loading} className="flex items-center justify-center">
      <div className="flex flex-col justify-center mx-auto mt-20">
        <div className="text-white flex  gap-5">
          <ZoomIn
            className="cursor-pointer"
            onClick={() => setScale((prev) => Math.min(prev + 0.25, 2.5))}
          />
          <ZoomOut
            className="cursor-pointer"
            onClick={() => setScale((prev) => Math.max(prev - 0.25, 0.5))}
          />
          <Download onClick={handleDownload} className="cursor-pointer" />
        </div>
        <Document
          file="/resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={console.error}
        >
          <Page pageNumber={1} width={550} scale={scale} />
        </Document>
      </div>
    </div>
  );
}
