This is a really small demo app to show how to interact with the Five9 SOAP Configuration API from node.

This currently demonstrates getting a list of Skills but could easily be updated for any portion of the API.s

To run the app:

Step 1) Install node, clode repo and type 'npm install'
Step 2) Make config.js file as shown below
Step 3) type 'node index.js'

------ CODE START -------


var config = {};

config.username = '<five9_username>'

config.password = '<five9_password>'

module.exports = config;

------ CODE END -------
