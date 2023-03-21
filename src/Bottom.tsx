import React, { useState } from "react";
import { NavButton } from "./NavButton";
import { SaveButton } from "./SaveButton";

/**
 * 
 * @description Returns Bottom component to be rendered, which is a child of the App component. Holds navigation and save buttons. Appropriately hides or shows previous/next NavButtons based on the current page number.
 */
export function Bottom({ pageNum, setPageNum, publisherHandler, maxPages, apikey }: { pageNum: number, setPageNum: any, publisherHandler: any, maxPages: number, apikey: string }) {
    const [clicked, setClicked] = useState(false);

    if (pageNum >= maxPages) {
        return <div style={{ display: "flex", flexDirection: "row" }}>
            <NavButton buttonType={"PREVIOUS"} pageNum={pageNum} setPageNum={setPageNum} publisherHandler={publisherHandler} />
            <SaveButton apikey={apikey} publisherHandler={publisherHandler} />
        </div>
    }
    else if (pageNum == 1) {
        return <div style={{ display: "flex", flexDirection: "row" }}>
            <NavButton buttonType={"NEXT"} pageNum={pageNum} setPageNum={setPageNum} publisherHandler={publisherHandler} />
            <SaveButton apikey={apikey} publisherHandler={publisherHandler} />
        </div>
    }
    else {
        return <div style={{ display: "flex", flexDirection: "row" }}>
            <NavButton buttonType={"PREVIOUS"} pageNum={pageNum} setPageNum={setPageNum} publisherHandler={publisherHandler} />
            <NavButton buttonType={"NEXT"} pageNum={pageNum} setPageNum={setPageNum} publisherHandler={publisherHandler} />
            <SaveButton apikey={apikey} publisherHandler={publisherHandler} />
        </div>
    }
}