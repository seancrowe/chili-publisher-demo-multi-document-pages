import React, { useEffect } from "react";
import { getDocumentsToLoad } from "./mockServerSideStuff";
import { saveDocument } from "./mockServerSideStuff";

export function NavButton({ buttonType, pageNum, setPageNum, publisherInterface, apikey, setClicked, clicked }) {
    //split this to NextButton and PrevButton?

    const navigate = async () => {
        if (buttonType == "NEXT") {
            setPageNum(pageNum + 1);
        }
        else {
            setPageNum(pageNum - 1);
        }
        setClicked(true);
        console.log(pageNum);
    }

    const checkDoc = async () => {
        const docId = await publisherInterface?.getObject('document.id');
        const isDirty = await publisherInterface?.getObject('document.isDirty');
        if (isDirty == true) {
            const docXML = await publisherInterface?.executeFunction("document", "GetTempXML")
            const currentDocId = await publisherInterface?.getObject('document.id');
            console.log("saving document with id " + await publisherInterface?.getObject('document.id'));
            await saveDocument(apikey, docXML, docId);
        }
        // if (publisherInterface == null) {
        //     return;
        // }
        // //console.log(pageNum);

        // //Check if document is "dirty", perform a save if it is
        // console.log(pageNum);
        // await publisherInterface.executeFunction("document", "OpenDocumentFromXml", getDocumentsToLoad().filter(d => d.page == pageNum)[0].id)
        // console.log(pageNum);
    }

    useEffect(() => {
        const asyncfunc = async () => {
            await checkDoc();
            if (publisherInterface == null) {
                return;
            }
            console.log(pageNum);
            publisherInterface.executeFunction("document", "OpenDocumentFromXml", getDocumentsToLoad().filter(d => d.page == pageNum)[0].id)
        }
        asyncfunc();
        setClicked(false);
        console.log("I ran!");

    }, [clicked]);

    return <div>
        <button onClick={navigate}>{buttonType}</button>
    </div>
}