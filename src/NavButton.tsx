import React from "react";
import { getDocumentsToLoad } from "./mockServerSideStuff";

export function NavButton({ buttonType, pageNum, setPageNum, publisherHandler }: { buttonType: string, pageNum: number, setPageNum: any, publisherHandler: any }) {
    const navigate = async () => {
        let tempPageNum = pageNum;
        if (buttonType == "NEXT") {
            tempPageNum = pageNum + 1;
        }
        else {
            tempPageNum = pageNum - 1;
        }
        setPageNum(tempPageNum);
        // console.log(pageNum); //can remove later
        // console.log(tempPageNum);
        await publisherHandler.ifDirtySave();
        await publisherHandler.loadDocument(getDocumentsToLoad().filter(d => d.page == tempPageNum)[0].id);
    }

    return <div>
        <button onClick={navigate}>{buttonType}</button>
    </div>
}