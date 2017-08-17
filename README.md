# OVERVIEW

My Reads is an app that allows you to keep track of books you want to read, are currently reading and that have finished reading.

# INSTALLATION GUIDE

First clone the repo

    git clone git@github.com:pixelprogrammer/udacity-myread.git

**Note:** _if you have yarn installed just replace `npm` with `yarn` in the following commands_

cd into the directory and install the node modules:

    npm install

To start the server for development run:

    npm start 

A new browser window should open in your default browser and launch the app if successful.

## SETUP FOR PRODUCTION

In order to package the app for production, run 

    npm run build

Once the command has completed building, you can install `serve` globally (if not installed already)

    npm install -g serve

Then run the command

    serve -s build
