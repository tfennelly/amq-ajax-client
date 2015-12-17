var jQuery = require('jquery-detached');
var adapterFactory = require('./internal/amq_jquery_adapter.js');
var amqFactory = require('./internal/amqFactory.js');
var $ = jQuery.getJQuery();
var amqAdapter = adapterFactory.newAdapter($);

// Only supports a jQuery based "adapter" atm. Probably never going to support anything else :)

module.exports = amqFactory.newAmq(amqAdapter);
