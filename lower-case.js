module.exports = function(RED) {
    function LowerCaseNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var gpioCommand = __dirname+'/print.sh';
        var spawn = require("child_process").spawn;
        node.child = spawn(gpioCommand, [2]);
        console.log("Trying to spwn");

        node.on('input', function(msg) {
            console.log(output);
            msg.payload = '-output-';
            node.send(msg);
        });
    }
    RED.nodes.registerType("lower-case",LowerCaseNode);
}