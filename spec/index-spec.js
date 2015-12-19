var jsTest = require("jenkins-js-test");

describe("index.js", function () {
    it("- test", function (done) {
        jsTest.onPage(function() {
            var jQuery = require('jquery-detached');
            var $ = jQuery.getJQuery();
            var amq = require('../index.js');
            var requests = [];
            
            $.ajax = function(request) {
                requests.push(request);
            };            

            amq.init({
                uri: 'amq',
                logging: true,
                timeout: 20
            });
            
            var consumer = function () {};
            amq.addListener( 'handler', 'topic://test-topic', consumer, { selector: "property-name='property-value'" } );
            
            expect(requests[0].url).toBe('amq');
            expect(requests[0].data).toContain('timeout=1');
            expect(requests[0].beforeSend).toBeDefined();
            expect(requests[1].url).toBe('amq');
            expect(requests[1].data).toBe('destination=topic://test-topic&message=handler&type=listen');
            expect(requests[1].beforeSend).toBeDefined();
            
            amq.stop();
            done();
        });
    });
});