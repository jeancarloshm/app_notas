var cluster = require('cluster');
var http = require('http');
var CPUs = 4;

if (cluster.isMaster) {
 for (var i = 0; i < CPUs; i++) {
  cluster.fork();
 }
} else {
    require("./main");
    console.log("Running!")
}