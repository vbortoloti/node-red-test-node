module.exports = function(RED) {
    function LowerCaseNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        var spawn = require("child_process").spawn;

        node.on('input', function(msg) {
            node.child = spawn('python',["./print.py",2,2]);
            console.log("Trying to spwn");
            let output;
            node.child.stdout.on("data", (data) => {
                output += data;
            });

            console.log(output);
            msg.payload = '-output-';
            node.send(msg);
        });
    }
    RED.nodes.registerType("lower-case",LowerCaseNode);
}