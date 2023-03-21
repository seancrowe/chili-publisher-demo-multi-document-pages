import React, { useEffect, useState } from "react";
import { DocumentObj } from "./types";
import { getBaseUrl } from "./mockServerSideStuff";

/**
 * 
 * @description Returns the Page component to be rendered, which is a child of the PageSelector component. Page's are rendered in the PageSelctor sidebar as generated png previews of the document associated with the Page.
 */
export function Page({ document, apikey, setPageNum, publisherHandler }: { document: DocumentObj, apikey: string, setPageNum: any, publisherHandler: any }) {

  // Used only to trigger Effect hook to generate a new document preview
  const [downloadedPreview, setDownloadedPreview] = useState(false)
  // Used to store and set document preview URL
  const [imgUrl, setImgUrl] = useState("https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg")

  // Effect hook to call CHILI Download Assets API endpoint to generate a document preview
  useEffect(() => {
    // asyncFunc exists within Effect hook because React doesn't allow async function values for effects
    const asyncFunc = async () => {
      const imageResult = await fetch(`${await getBaseUrl()}/rest-api/v1.2/resources/Documents/download?&type=medium&page=1&async=false&id=${document.id}`, {
        headers: { "api-key": apikey }
      });

      // Create image URL from the response blob
      const localImgURL = URL.createObjectURL(await imageResult.blob());

      setImgUrl(localImgURL);
      setDownloadedPreview(true);
    }
    asyncFunc();
  }, [downloadedPreview]);

  // Called on img tag's onClick event
  const updateCurrentEditor = async () => {
    // publisherHandler function to save document if document is "dirty" (i.e. document has been modified)
    await publisherHandler.ifDirtySave();
    // publihserHandler function to load document connected to this Page component
    await publisherHandler.loadDocument(document.id);
    // Could use GetPNGSnapshot to avoid server calls

    // Change downloadedPreview state to trigger Effect hook again in order to update document preview
    setDownloadedPreview(false);
    // Update pageNum value to reflect currently selected page
    setPageNum(document.page);
  }


  return <div style={{ width: "200px", display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img style={{ width: "100px", height: "100px" }} src={imgUrl} onClick={updateCurrentEditor}></img>
    <br />
    <div style={{ fontSize: "14pt", textAlign: "center" }} >Page Number: {document.page}</div>
    <br />
  </div>
}