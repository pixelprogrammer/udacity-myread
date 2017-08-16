# SETUP GUIDE

In order to start the app server you will need to run `npm start` or `yarn start` (depending on which program you use) within the project folder.

A new browser window should open in your default browser and launch the app if done successfully.

## SETUP FOR PRODUCTION

In order to package the app for production, run `npm run build`.

Once the command has completed building, you can install `serve` globally (if not installed already)

`npm install -g serve`

Then run the command

`serve -s build`
