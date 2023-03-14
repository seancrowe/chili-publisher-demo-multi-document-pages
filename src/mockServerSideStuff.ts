import { DocumentObj } from "./types";

export function getDocumentsToLoad():DocumentObj[] {
  return [
    {id: "be093c23-60e9-4d63-8b50-f524529f4501", page:1},
    {id: "69058481-60ee-4971-8081-7f62ca056bf1", page:2},
    {id: "62b17f83-de00-4276-90aa-9c526702ac40", page:3},
  ]
}

export const getBaseUrl = async () => "https://ft-nostress.chili-publish.online/"

export const getEditorUrl = async (apikey:string) => `https://ft-nostress.chili-publish.online/ft-nostress/editor_html.aspx?apiKey=${apikey}`