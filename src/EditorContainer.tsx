import React, { useEffect, memo } from "react";
import { PublisherInterface } from "@chili-publish/publisher-interface"

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

export const MemoizedEditorContainer = memo(EditorContainer);