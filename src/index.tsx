import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";

const root = createRoot(document.getElementsByTagName("div")[0]);

root.render(<App></App>)

/*
      store:
        currentlyLoadedPage: number

      side bar, which will have our documents as pages
        <PageSelector> <- Array<DocumentObj>
          <Page>
            - Image preview
            - document id
            - page number
            - clickOn -> update currentlyLoadedPage


      middle area, which contains the iframes
        <Editor>
          <iframe>


      bottom bar wich has the next page, previous page
        <Bottom>
          <button>
          <button>

*/