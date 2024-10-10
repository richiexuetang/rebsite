"use client";
import { Navigation } from "../components/nav";
import PdfViewer from "../components/pdfviewer";

export default function ResumePage() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <PdfViewer />
      </div>
    </div>
  );
}
