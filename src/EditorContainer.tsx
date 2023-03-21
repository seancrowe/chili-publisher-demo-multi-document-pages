import React, { useEffect, memo } from "react";
import { PublisherInterface } from "@chili-publish/publisher-interface"

/**
 * 
 * @description Returns the EditorContainer component, which is a child of the App component. Creates an iframe to access the CHILI editor and sets the publisher interface.
 */
export function EditorContainer({ src, setPublisherInterface }: { src: any, setPublisherInterface: any }) {


  useEffect(() => {
    const createInterface = async () => {

      const iframe = document.getElementById("editor1") as HTMLIFrameElement;
      console.log(iframe);
      const pi = await PublisherInterface.build(iframe);

      setPublisherInterface(pi);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      window.publisherInterface = pi;
    };

    createInterface();
  })

  return <iframe id="editor1" style={{ width: "100%", height: "95vh" }} src={src}></iframe>
}

// Memoizing EditorContainer to prevent iframe from being recreated on App rerenders
export const MemoizedEditorContainer = memo(EditorContainer);