# CodeSnipets

Angular 7 project to store code snippets in diffent languages like: Angular, CSS, HTML, Javascript, React, SCSS, Typescript. 
Project build using code formating, flex-layout, ngrx store, SCSS and Firebase.
Adding snippets is possible for logged in user and visible for all.

## Installation pre-requisites

This project has minimal dependencies, you only need node and npm installed on your machine. These are some tutorials to install node in different operating systems.

Make sure to install the latest version of Node 6

## Installation Instructions

First clone or download as a Zip file using the green "Clone Or Download" button on the top right of the document.

Then change directory to the folder where you will find a node project with a package.json.

On the command line run the following:

<code>npm install</code>

You have to create new project on Firebase website at: `https://console.firebase.google.com/`

Edit file `src/environments/environment_start.ts` and set the following part - Firebase params:

```json

  firebase: {
    apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
    authDomain: 'xxxxxx.firebaseapp.com',
    databaseURL: 'https://xxxxxx.firebaseio.com/',
    projectId: 'xxxxxx',
    storageBucket: 'xxxxxx.appspot.com',
    messagingSenderId: 'xxxxxxxxxxx'
  } 

```
Then change the name of that file to `environment.ts`. Do the same with `src/environments/environment.prod_start.ts` file.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
