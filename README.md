# INSTALLATION GUIDE

First clone the repo

`git clone git@github.com:pixelprogrammer/udacity-myread.git`

cd into the directory and install the node modules:

`npm install`

or if you have yarn installed:

`yarn install`

To start the server for development run:

`npm start` or `yarn start`

A new browser window should open in your default browser and launch the app if successful.

## SETUP FOR PRODUCTION

In order to package the app for production, run `npm run build`.

Once the command has completed building, you can install `serve` globally (if not installed already)

`npm install -g serve`

Then run the command

`serve -s build`
