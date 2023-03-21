import React, { useEffect, useState } from "react";
import { EditorContainer, MemoizedEditorContainer } from "./EditorContainer";
import { getDocumentsToLoad, saveDocument } from "./mockServerSideStuff";
import { LoginPage } from "./LoginPage";
import { PageSelector } from "./PageSelector";
import { getEditorUrl } from "./mockServerSideStuff";
import { Bottom } from "./Bottom";
import { NavButton } from "./NavButton";
import { createPublisherHandler } from "./publisherHandler";

/**
 * 
 * @description Returns the App component to be rendered, which is the top level of our application and contains most of the global state
 */
export default function App() {
    
    // Used to store the API key, which is needed for loading the Editor and image previews
    const [apikey, updateAPIkey] = useState("");
    // Called by Page and NavButton components, we should move the effects of saving and loading to this spot
    const [pageNum, setPageNum] = useState(1);
    // editorUrl should only be set once when apiKey is set
    const [editorUrl, setEditorUrl] = useState("");
    const [publisherInterface, setPublisherInterface] = useState(null);
    const [publisherHandler, setPublisherHandler] = useState<any>(null);

    const maxPages = getDocumentsToLoad().length;

    useEffect(() => {
        const loadEditor = async () => {
            const editorUrl = await getEditorUrl(apikey, getDocumentsToLoad()[0].id);

            setEditorUrl(editorUrl);
        }

        loadEditor();
    }, [apikey])


    useEffect(() => {

        if (publisherInterface != null) {
            setPublisherHandler(createPublisherHandler(publisherInterface, (a: string, b: string) => saveDocument(apikey, a, b)));
        }
    }, [publisherInterface])


    if (apikey.trim().length == 0) {
        return <LoginPage updateAPIkey={updateAPIkey} />
    }
    //Clean up formatting of this later
    else {
        return <div style={{ display: "flex" }}>
            <PageSelector apikey={apikey} publisherHandler={publisherHandler} documents={getDocumentsToLoad()} setPageNum={setPageNum} />
            <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "95vh" }}>
                <MemoizedEditorContainer setPublisherInterface={setPublisherInterface} src={editorUrl} />
                <Bottom pageNum={pageNum} setPageNum={setPageNum} publisherHandler={publisherHandler} maxPages={maxPages} apikey={apikey} />
                <span>{pageNum}</span>
            </div>
        </div>
    }
}