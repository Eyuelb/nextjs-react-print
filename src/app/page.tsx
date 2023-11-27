"use client";

import {
  printComponent,
  printExistingElement,
  printHtml,
} from "../lib/react-pdf";
import TestComponent from "./test-component";
import React from "react";

export default function Home() {
  const handlePrintComponent = async () => {
    await printComponent(<TestComponent />);
    return;
  };
  const handlePrintHtml = async () => {
    // use html in a string
    await printHtml("<div>Hello world</div>");
    return;
  };
  const handlePrintExistingElement = async () => {
    // use selector to print an existing html element
    await printExistingElement("div.elementClass #elementID");
    return;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4 bg-gray-100">
      <div className="elementClass">
        <div id="elementID">
          <h1>Hello, this is your Existing Element!</h1>
        </div>
      </div>
      <button
        className="border shadow-md p-2 rounded-md"
        onClick={handlePrintComponent}
      >
        Print Component
      </button>
      <button className="border shadow-md p-2 rounded-md" onClick={handlePrintHtml}>
        Print Html
      </button>
      <button
        className="border shadow-md p-2 rounded-md"
        onClick={handlePrintExistingElement}
      >
        Print Existing Element
      </button>
    </main>
  );
}
