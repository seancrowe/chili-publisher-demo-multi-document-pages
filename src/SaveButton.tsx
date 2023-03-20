import React from "react";

export function SaveButton({ apikey, publisherHandler }: { apikey: string, publisherHandler: any }) {

    const save = async () => {
        //notably doesn't do anything if you haven't touched the document, arguably a pointless button
        await publisherHandler.ifDirtySave();
    }

    return <div>
        <button onClick={save}>Save</button>
    </div>
}