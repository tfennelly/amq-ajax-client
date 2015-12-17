var jsTest = require("jenkins-js-test");

describe("index.js", function () {
    it("- test", function (done) {
        jsTest.onPage(function() {
            var amq = require('../index.js');
            amq.init({
                uri: 'amq',
                logging: true,
                timeout: 20
            });
            amq.stop();
            done();
        });
    });
});