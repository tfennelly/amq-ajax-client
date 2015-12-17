# ActiveMQ Ajax Client NPM Package

[ActiveMQ Ajax client](http://activemq.apache.org/ajax.html) NPM package.

Basically just a copy and tweak of the `.js` files in the [activemq-web-demo](https://github.com/apache/activemq/tree/master/activemq-web-demo),
making them usable in CommonJS style JavaScript modules.   

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