# Assessment - All Parts (1 to 5)

This repository contains all parts of the assignment showing the final UI. 

## Getting Started

### Project Structure

`src/components/`: \
This directory contains reusable UI components.

`Accordion.js`: \
The Accordion component that handles expanding/collapsing categories.

`TreeMenu.js`: \
The TreeMenu component which contains the logic for expanding and collapsing nodes at the top-level.

`TreeMenuNode.js`: \
A reusable component used for individual nodes within the tree structure. \
Manages nested nodes and propagates the correct open state for each child.

`TreeNode.js`: \
Responsible for displaying individual nodes. \
Handles click interactions to expand or collapse a particular node and pass down the relevant data to children.

`src/index.css`: \
Contains all of the styles needed for the application. \
Styles for the tree navigation, accordion cards, modal, dark mode, and other UI elements are defined here. 

`src/App.js`: \
The main application component that brings together all the other components. \
Contains the menu data. \
Handles state for the entire app, including user interactions like dark mode, modals, etc. 

`src/index.js`: \
The entry point of the application, which renders the App component. \
Includes important global imports like React, ReactDOM, and any global styles. 

`src/logo.png`: \
`logo.png` is used for branding in the header.

### Installation

Clone the repository: \
`git clone https://github.com/Mahek-Jain/test1.git` 

Navigate to the project directory: \
`cd test1` 

Install dependencies: \
`npm install`

### Running the App

Start the development server: \
`npm start` 

The app will be available at http://localhost:3000.
