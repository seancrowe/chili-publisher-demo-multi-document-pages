import React from "react";
import { saveDocument } from "./mockServerSideStuff";

export function SaveButton({ apikey, publisherInterface }) {
    
    const save = async () => {
        //Check if doc is dirty
        if (await publisherInterface.getObject('document.isDirty') == true) {
            console.log("saving...");
            const docXML = await publisherInterface?.executeFunction("document", "GetTempXML");
            const docID = await publisherInterface?.getObject("document.id");
            await saveDocument(apikey, docXML, docID);
        }
    }

    return <div>
        <button onClick={save}>Save</button>
    </div>
}