import { PublisherInterface } from "@chili-publish/publisher-interface";

export const createPublisherHandler = (publisherInterface: PublisherInterface, saveDocument:(b:string, c:string)=>Promise<any>) => {
    
    let currentlyRunning = false;

    return {
        ifDirtySave: async () => {

            if (currentlyRunning) {
                return
            }

            currentlyRunning = true;
            const docId = await publisherInterface.getObject('document.id') as string;
            const isDirty = await publisherInterface.getObject('document.isDirty');
            if (isDirty == true) {
              const docXML = await publisherInterface.executeFunction("document", "GetTempXML") as string
              console.log("saving document with id " + docId);
              await saveDocument(docXML, docId);
            }
            currentlyRunning = false;
          },

        loadDocument: async (docId:string) => {
            if (currentlyRunning) {
                return
            }

            currentlyRunning = true;
            await publisherInterface.executeFunction("document", "OpenDocumentFromXml", docId);
            currentlyRunning = false;
        } 
    }


}
