import { PublisherInterface } from "@chili-publish/publisher-interface";

type PublisherHandler = {
    ifDirtySave: () => Promise<void>,
    loadDocument: (docId:string) => Promise<void>
}


/**
 * 
 * @description Returns a a PublisherHandler object which has methods that allow you to interact with PublisherInterface in a limited sense. These methods are not time safe, meaning that you can put your document in a bad place. What needs to be done is add a queue type system or to block execution so that two isDirtySave cannot be called at the same time.
 */
export const createPublisherHandler = (publisherInterface: PublisherInterface, saveDocument: (b: string, c: string) => Promise<any>):PublisherHandler => {
    return {
        /**
         * @description Will check to see if the currently open document isDirty, and if it is, will save the document using the provide saveDocument function
         */
        ifDirtySave: async () => {
            const docId = await publisherInterface.getObject('document.id') as string;
            const isDirty = await publisherInterface.getObject('document.isDirty');
            if (isDirty == true) {
                const docXML = await publisherInterface.executeFunction("document", "GetTempXML") as string
                console.log("saving document with id " + docId);
                await saveDocument(docXML, docId);
            }
        },
         /**
         * @description Will load the passed document ID
         */
        loadDocument: async (docId: string) => {
            await publisherInterface.executeFunction("document", "OpenDocumentFromXml", docId);
        }
    }
}
