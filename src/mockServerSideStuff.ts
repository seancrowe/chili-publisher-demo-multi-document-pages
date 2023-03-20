import { DocumentObj } from "./types";

export function getDocumentsToLoad(): DocumentObj[] {
  return [
    { id: "be093c23-60e9-4d63-8b50-f524529f4501", page: 1 },
    { id: "69058481-60ee-4971-8081-7f62ca056bf1", page: 2 },
    { id: "62b17f83-de00-4276-90aa-9c526702ac40", page: 3 },
  ]
}

export const getBaseUrl = async () => "https://ft-nostress.chili-publish.online/"

export const getEditorUrl = async (apikey: string, defaultId: string) => `https://ft-nostress.chili-publish.online/ft-nostress/editor_html.aspx?doc=${defaultId}&apiKey=${apikey}&fullWS=false`

export const saveDocument = async (apikey: string, docXML: string, docId: string) => {
  const data = { xml: docXML };
  await fetch(`https://ft-nostress.chili-publish.online/rest-api/v1.2/resources/documents/items/${docId}/save`, {
    method: "PUT",
    headers: {
      "api-key": apikey,
      "content-type": "application/json"
    },
    body: JSON.stringify(data)
  });
  console.log("saved");
}