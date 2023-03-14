import React, { useEffect, useState } from "react";
import { EditorContainer } from "./EditorContainer";
import { getDocumentsToLoad } from "./mockServerSideStuff";
import { LoginPage } from "./LoginPage";
import { PageSelector } from "./PageSelector";
import { getEditorUrl } from "./mockServerSideStuff";

export default function App () {
    const [apikey, updateAPIkey] = useState("xyl678bH8y6V3LGfvSFR6fPNwK0_hGkCGDHQcMg==");

    const [editorUrl, setEditorUrl] = useState("");
    const [publisherInterface, setPublisherInterface] = useState(null);

    useEffect(()=> {
        const loadEditor = async () => {
            const editorUrl = await getEditorUrl(apikey);

            setEditorUrl(editorUrl);
        }

        loadEditor();
    }, [apikey])

    if (apikey.trim().length == 0) {
        return <LoginPage updateAPIkey={updateAPIkey} />
    }
    else {
        return <div style={{display:"flex"}}>
        <PageSelector apikey={apikey} publisherInterface={publisherInterface} documents={getDocumentsToLoad()}/>
        <EditorContainer setPublisherInterface={setPublisherInterface} src={editorUrl} />
    </div>
    }
}