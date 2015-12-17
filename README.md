# ActiveMQ Ajax Client NPM Package

[ActiveMQ Ajax client](http://activemq.apache.org/ajax.html) NPM package.

CommonJS version of the API defined in [ActiveMQ Ajax client](http://activemq.apache.org/ajax.html) docs.
See the `.js` files in the [activemq-web-demo](https://github.com/apache/activemq/tree/master/activemq-web-demo).   

## Install

```sh
npm install --save amq-ajax-client
```

## Use

```javascript
var amq = require('amq-ajax-client');

amq.init({ 
    uri: 'amq', 
    logging: true,
    timeout: 20
  });
  
// etc...  
```

See the [ActiveMQ Ajax client docs](http://activemq.apache.org/ajax.html) for more on usage.