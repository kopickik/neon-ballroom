var nconf               = require('nconf');

nconf.argv();
nconf.env();
nconf.file('dev', 'env/private/defaults.json');

module.exports = nconf.get.bing(nconf);
