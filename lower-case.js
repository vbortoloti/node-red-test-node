module.exports = function(RED) {
    function LowerCaseNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var gpioCommand = 'python3 '+__dirname+'/print.py';
        var spawn = require("child_process").spawn;
        node.child = spawn(gpioCommand, [2,2]);
        console.log("Trying to spwn");
        let output;
        node.child.stdout.on("data", (data) => {
            output += data;
        });
        console.log(output);

        node.on('input', function(msg) {
            console.log("sdsd");

            msg.payload = '-output-';
            node.send(msg);
        });
    }
    RED.nodes.registerType("lower-case",LowerCaseNode);
}