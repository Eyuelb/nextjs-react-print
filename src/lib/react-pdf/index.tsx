import React, {
  Fragment,
  FunctionComponent,
  PropsWithChildren,
  useEffect,
} from "react";
import ReactDOM from "react-dom/client";

export const createContainer = () => {
  const element: HTMLDivElement = document.createElement("div");
  element.className = "print-wrapper";
  const container = document.body.appendChild(element);
  return container;
};

type PromiseProps = {
  resolve: (value: HTMLDivElement) => void;
} & PropsWithChildren;

export const renderAsync = (element: JSX.Element): Promise<HTMLDivElement> => {
  return new Promise((resolve) => {
    const container = createContainer();

    const PromiseComponent: FunctionComponent<PromiseProps> = (props) => {
      useEffect(() => {
        props.resolve(container);
      });
      return <Fragment>{props.children}</Fragment>;
    };

    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <PromiseComponent resolve={resolve}>{element}</PromiseComponent>
      </React.StrictMode>
    );
  });
};

export const createPrintStyle = () => {
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = `@media screen {
    .print-wrapper {
      display: none;
    }

    
  }
  @media print {
    @page {
      margin: 0;
    }
    body * {
      visibility: hidden;
    }
    .print-wrapper,
    .print-wrapper * {
      visibility: visible !important;
    }
    .print-wrapper {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      margin: 1.6cm;
    }
  }`;
  return document.head.appendChild(style);
};

export const printComponent = async (element: JSX.Element) => {
  const style = createPrintStyle();
  
  const container = await renderAsync(element);
  window.print();
  container.parentNode!.removeChild(container);
  style.parentNode!.removeChild(style);
};

export const printHtml = (html: string) => {
  return printComponent(<div dangerouslySetInnerHTML={{ __html: html }} />);
};

export const printExistingElement = (selector: string) => {
  const html = document.querySelector(selector);
  if (html === null) {
    throw Error("no element selected ! please recheck your selector");
  }
  return printHtml(html.outerHTML);
};
