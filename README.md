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
App.tsx - 

## Improvements
There are many improvements that are needed or should be done:
- Move the state from props to a store, to make things more simple
- The effect of next/previous buttons and the effect of selecting a page should be moved into its own logic on setPageNum