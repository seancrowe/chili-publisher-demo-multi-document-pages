import React from "react";
import { DocumentObj } from "./types"
import { Page } from "./Page";

/**
 * 
 * @description Loops through all the documents "pages" and returns a Page component for each of document
 */
export function PageSelector({ documents, apikey, setPageNum, publisherHandler }: { documents: DocumentObj[], apikey: string, publisherHandler: any, setPageNum: any }) {
  return <div>{documents.map(d => <Page publisherHandler={publisherHandler} apikey={apikey} key={d.id} document={d} setPageNum={setPageNum} />)}</div>
}