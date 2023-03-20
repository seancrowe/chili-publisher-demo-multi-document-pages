import React, { useState } from "react";
import { NavButton } from "./NavButton";
import { SaveButton } from "./SaveButton";

export function Bottom({ pageNum, setPageNum, publisherInterface, maxPages, apikey }) {
    const [clicked, setClicked] = useState(false);
    
    if (pageNum >= maxPages) {
        return <div>
            <NavButton buttonType={"PREVIOUS"} pageNum={pageNum} setPageNum={setPageNum} publisherInterface={publisherInterface} apikey={apikey} setClicked={setClicked} clicked={clicked}/>
            <SaveButton apikey={apikey} publisherInterface={publisherInterface} />
        </div>
    }
    else if (pageNum == 1) {
        return <div>
            <NavButton buttonType={"NEXT"} pageNum={pageNum} setPageNum={setPageNum} publisherInterface={publisherInterface} apikey={apikey} setClicked={setClicked} clicked={clicked}/>
            <SaveButton apikey={apikey} publisherInterface={publisherInterface} />
        </div>
    }
    else {
        return <div>
            {/* <NavButton buttonType={"PREVIOUS"} pageNum={pageNum} setPageNum={setPageNum} publisherInterface={publisherInterface} apikey={apikey} setClicked={setClicked} clicked={clicked}/> */}
            <NavButton buttonType={"NEXT"} pageNum={pageNum} setPageNum={setPageNum} publisherInterface={publisherInterface} apikey={apikey} setClicked={setClicked} clicked={clicked}/>
            <SaveButton apikey={apikey} publisherInterface={publisherInterface} />
        </div>
    }
}