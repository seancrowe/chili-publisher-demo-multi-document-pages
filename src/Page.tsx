import React, { useEffect, useState } from "react";
import { DocumentObj } from "./types";
import { getBaseUrl } from "./mockServerSideStuff";
import { PublisherInterface } from "@chili-publish/publisher-interface";
import { saveDocument } from "./mockServerSideStuff";
import { ifDirtySave } from "./publisherHandler";

export function Page({ document, apikey, setPageNum, publisherHandler }: { document: DocumentObj, apikey: string, setPageNum:any, publisherHandler:any }) {

  const [downloadedPreview, setDownloadedPreview] = useState(false)
  const [imgUrl, setImgUrl] = useState("https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg")

  useEffect(() => {
    const asyncFunc = async () => {
      const imageResult = await fetch(`${await getBaseUrl()}/rest-api/v1.2/resources/Documents/download?&type=medium&page=1&async=false&id=${document.id}`, {
        headers: { "api-key": apikey }
      });

      const localImgURL = URL.createObjectURL(await imageResult.blob());

      //run checkdoc here?

      setImgUrl(localImgURL);
      setDownloadedPreview(true);
    }
    asyncFunc();
  }, [downloadedPreview]);

  //https://ft-nostress.chili-publish.online/rest-api/v1.2/resources/Documents/download?path=zSean%5CChange+frame+autogrow+max+size+based+on+font+size.xml&type=medium&page=1&async=true&taskPriority=5&id=76f6de5c-449a-41b3-b7dd-6ee0f067d345&name=Change+frame+autogrow+max+size+based+on+font+size&client_app=CHILI_Editor


  // Get Preview of document
  //const imgUrl = `https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg`


  const updateCurrentEditor = async () => {

    await publisherHandler.ifDirtySave();
    await publisherHandler.loadDocument(document.id);
    // Could use GetPNGSnapshot to avoid server calls
    setDownloadedPreview(false);
    setPageNum(document.page);
  }


  return <div style={{ width: "200px", display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img style={{ width: "100px", height: "100px" }} src={imgUrl} onClick={updateCurrentEditor}></img>
    <br />
    <div style={{ fontSize: "14pt", textAlign: "center" }} >Page Number: {document.page}</div>
    <br />
  </div>
}