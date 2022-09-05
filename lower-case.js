module.exports = function(RED) {
    function LowerCaseNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var gpioCommand = __dirname+'/print.sh';
        var spawn = require("child_process").spawn;
        node.child.stdout.on('data', function (data) {
            var d = data.toString().trim().split("\n");
            for (var i = 0; i < d.length; i++) {
                console.log("ss"+d[i]);
            }
        });
        node.on('input', function(msg) {
            console.log("gogogo");
        });
    }
    RED.nodes.registerType("lower-case",LowerCaseNode);
}