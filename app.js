var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtts://message.51jinkela.com');

client.on('connect', function () {
    client.subscribe('api');
});

client.on('message', function (topic, message) {
    console.log(message.toString());
    client.publish('client','hello')
});

