import React from "react";
import { getDocumentsToLoad } from "./mockServerSideStuff";

/**
 * 
 * @description Returns the NavButton component to be rendered, which is a child of the Bottom component. Takes a "buttonType" of "NEXT" or "PREVIOUS" that determines if the button press increments or decrements the pageNum state
 */
export function NavButton({ buttonType, pageNum, setPageNum, publisherHandler }: { buttonType: string, pageNum: number, setPageNum: any, publisherHandler: any }) {
    // Function to be called on returned button's onClick event
    const navigate = async () => {
        // Storing the current pageNum in a temp variable (state updates are asynchronous, this ensures that loadDocument() has the updated page number to navigate to)
        let tempPageNum = pageNum;
        // Increment tempPageNum if buttonType is "NEXT", otherwise decrement
        if (buttonType == "NEXT") {
            tempPageNum = pageNum + 1;
        }
        else {
            tempPageNum = pageNum - 1;
        }
        // Update pageNum state with the updated tempPageNum value
        setPageNum(tempPageNum);
        // publisherHandler function to save current document if document is "dirty" (i.e. document has been modified)
        await publisherHandler.ifDirtySave();
        // publisherHandler function to load a new document, finds document from getDocumentsToLoad() with page attirbute == tempPageNum to load
        await publisherHandler.loadDocument(getDocumentsToLoad().filter(d => d.page == tempPageNum)[0].id);
    }

    return <div>
        <button onClick={navigate}>{buttonType}</button>
    </div>
}