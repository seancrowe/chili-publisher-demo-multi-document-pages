import React from "react";

/**
 * 
 * @description Returns the SaveButton component to be rendered, which is a child of the Bottom component. Provides an option to save a document without changing the page.
 */
export function SaveButton({ apikey, publisherHandler }: { apikey: string, publisherHandler: any }) {

    const save = async () => {
        // Notably follows the same rules as all other save action, so button will do nothing if document hasn't been modified.
        await publisherHandler.ifDirtySave();
    }

    return <div>
        <button onClick={save}>Save</button>
    </div>
}