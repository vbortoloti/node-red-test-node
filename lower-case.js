module.exports = function(RED) {
    function LowerCaseNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var gpioCommand = __dirname+'/print.sh';
        var spawn = require("child_process").spawn;
        node.child = spawn(gpioCommand, [2]);
        console.log("Trying to spwn");

        function inputlistener(msg, send, done) {
            if (msg.payload === "true") { msg.payload = true; }
            if (msg.payload === "false") { msg.payload = false; }
            var out = Number(msg.payload);
            var limit = 1;
            
            if (node.child !== null) {
                node.child.stdin.write(out+"\n", () => {
                    if (done) { done(); }
                });
            }else {
                console.log("erro")
            }
            node.send(msg);
        }

        node.on('input',inputlistener);
    }
    RED.nodes.registerType("lower-case",LowerCaseNode);
}