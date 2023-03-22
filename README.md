# This Project
This example demonstrates how to implement GraFx Publisher with each "page" as a separate document to improve performance.

This is not a complete project, and there are many improvements that could be made.

## High Level Overview
Instead of loading all pages within a single document, this implementation treats each document as a page and uses a UI to display them. A JavaScript function is called when a user selects a page or clicks preview/next, changing the loaded document in the Publisher editor:

```javascript
editorObject.ExecuteFunction("document","OpenDocumentFromXml", ...props)
```

Where props is made up the document ID or XML, the workspace ID or XML (optional), the view preference ID (optional)

The signature for the this function would be
```
(document_id_or_xml:string, workspace_id_or_xml:string, view_preference_id:string) => void
```

When using the PublisherInterface:

```javascript
publisherInterface.editorObject.ExecuteFunction("document","OpenDocumentFromXml", ...props)

// or

publisherInterface.executeFunction("document","OpenDocumentFromXml", ...props)
```

## Setup
To setup the project you need to run this on a system with node - any version after 10 should be good. Then do the following:

1. git clone this repo
2. `npm install` to install packages
3. `npm run serve` to start the local server

## Overview
The project source files can be found in `./src`. Below we will overview the project files and how they connect.

- `index.tsx`: Main entry point, renders App.tsx.
- `App.tsx`: Main parent component for the app.
- `EditorContainer.tsx`: Holds the editor iframe.
- `LoginPage.tsx`: Renders when apikey is empty; contains input field for API key.
- `PageSelector.tsx`: Renders page preview sidebar, one Page component per document.
- `Page.tsx`: Renders individual pages in PageSelector with a clickable image preview and page number.
- `Bottom.tsx`: Renders navigation bar with NavButton components and a SaveButton.
- `NavButton.tsx`: Renders next/previous page navigation buttons, loading the corresponding document.
- `SaveButton.tsx`: Renders save button, saving the displayed document on click.
- `publisherHandler.tsx`: Holds publisherInterface functions for document saving and loading.
- `mockServerSideStuff.ts`: Holds mock server-side functions for retrieving documents, generating editor URLs, and API calls.

## Improvements
There are many improvements that are needed or should be done:
- Move the state from props to a store, to make things more simple
- Separate the logic for next/previous buttons and page selection into a dedicated function - lift the state