const soap = require('soap');
const config = require('./config');

class Five9 {

  constructor(version) {
    this.url = 'https://api.five9.com/wsadmin/v' + version + '/AdminWebService?wsdl&user=' + config.username;
  }

  getSkills(){
    var args = {skillNamePattern: ''}
    soap.createClient(this.url, function(err, client) {
        client.setSecurity(new soap.BasicAuthSecurity(config.username, config.password));
        client.getSkills(args, function(err, result) {
            console.log(result);
        });
    });
  }


}

module.exports = Five9;
