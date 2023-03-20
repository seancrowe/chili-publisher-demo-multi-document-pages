import React, { useEffect, useState } from "react";
import { EditorContainer } from "./EditorContainer";
import { getDocumentsToLoad } from "./mockServerSideStuff";
import { LoginPage } from "./LoginPage";
import { PageSelector } from "./PageSelector";
import { getEditorUrl } from "./mockServerSideStuff";
import { Bottom } from "./Bottom";
import { NavButton } from "./NavButton";

export default function App() {
    //LOOK AT ME ----------------------------------------------------------------------------
    const [apikey, updateAPIkey] = useState(""); //REMOVE BEFORE PUSHING CHANGES
    //SERIOUSLY LOOK AT ME ------------------------------------------------------------------
    const [pageNum, setPageNum] = useState(1);
    const maxPages = getDocumentsToLoad().length;

    const [editorUrl, setEditorUrl] = useState("");
    const [publisherInterface, setPublisherInterface] = useState(null);

    useEffect(() => {
        const loadEditor = async () => {
            const editorUrl = await getEditorUrl(apikey, getDocumentsToLoad()[0].id);

            setEditorUrl(editorUrl);
        }

        loadEditor();
    }, [apikey])

    if (apikey.trim().length == 0) {
        return <LoginPage updateAPIkey={updateAPIkey} />
    }
    //Clean up formatting of this later
    else {
        return <div style={{ display: "flex" }}>
            <PageSelector apikey={apikey} publisherInterface={publisherInterface} documents={getDocumentsToLoad()} setPageNum={setPageNum} />
            <EditorContainer setPublisherInterface={setPublisherInterface} src={editorUrl} />
            <Bottom pageNum={pageNum} setPageNum={setPageNum} publisherInterface={publisherInterface} maxPages={maxPages} apikey={apikey} />
            <span>{pageNum}</span>
        </div>
    }
}