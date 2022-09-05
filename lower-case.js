module.exports = function(RED) {
    function LowerCaseNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var spawn = require("child_process").spawn;

        node.child = spawn("python3",["print.py",2,2]);
            console.log("Trying to spwn");
            node.child.stdout.on('data', function (data) {
                var d = data.toString().trim().split("\n");
                for (var i = 0; i < d.length; i++) {
                    console.log(d[i] === '');
                    console.log("kkk")
                }
            });

        node.on('input', function(msg) {
            
            msg.payload = '-output-';
            node.send(msg);
        });
    }
    RED.nodes.registerType("lower-case",LowerCaseNode);
}