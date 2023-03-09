import React from "react";
import {DocumentObj} from "./types"
import { Page } from "./Page";

export function PageSelector({documents}:{documents:DocumentObj[]}) {
  return <div>{documents.map(d => <Page key={d.id} document={d} />)}</div>
}