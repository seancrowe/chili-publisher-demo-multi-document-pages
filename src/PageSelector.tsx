import React from "react";
import {DocumentObj} from "./types"
import { Page } from "./Page";
import { PublisherInterface } from "@chili-publish/publisher-interface";

export function PageSelector({documents, apikey, publisherInterface}:{documents:DocumentObj[], apikey:string, publisherInterface:PublisherInterface|null}) {
  return <div>{documents.map(d => <Page publisherInterface={publisherInterface} apikey={apikey} key={d.id} document={d} />)}</div>
}