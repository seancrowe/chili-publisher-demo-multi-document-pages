# This Project
This is an example project of implementing GraFx Publisher so that each "page" is actually a document. It is meant to give you an idea on how to implement this, but is not a complete project.

## Setup
To setup the project you need to run this on a system with node - any version after 10 should be good. Then do the following:

1. git clone this repo
2. `npm install` to install packages
3. `npm run serve` to start the local server

## Overview
The project source files can be found in `./src`. Below we will overview the project files and how they connect.

index.tsx - is the main entry point, and basically just renders the component from App.tsx
App.tsx - is the main parent component for the app
EditorContainer.tsx - holds the editor iframe
LoginPage.tsx - rendered in App.tsx if apikey value is empty, provides input field to enter an apikey
PageSelector.tsx - renders the page preview sidebar, holds one Page component per document in getDocumentsToLoad()
Page.tsx - renders individual pages seen in PageSelector, pages consist of a clickable img tag that points to the attached document preview, and the document's specified page number
Bottom.tsx - renders navigation button bar, holds next/previous page NavButtons and a SaveButton
NavButton.tsx - renders next/previous page navigation buttons, on button click the next or previous document is loaded in the editor iframe
SaveButton.tsx - renders save button, saves the currently displayed document on click
publisherHandler.tsx - holds publisherInterface functions that are used in document saving and document loading for ease of use in passing functionality throughout components
mockServerSideStuff.ts - holds mock server side functions meant to emulate retrieving documents to load, generating editor URLs, and ResourceItemSave API calls

## Improvements
There are many improvements that are needed or should be done:
- Move the state from props to a store, to make things more simple
- The effect of next/previous buttons and the effect of selecting a page should be moved into its own logic on setPageNum