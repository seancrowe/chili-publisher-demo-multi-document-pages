import React from "react";
import { DocumentObj } from "./types";

export function Page({document}:{document:DocumentObj}) {
  return <h3>{document.id}</h3>
}