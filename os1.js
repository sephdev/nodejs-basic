const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();
var uptime = os.uptime();
var platform = os.platform();
var homedir = os.homedir();
var release = os.release();
var cpus = os.cpus();
var networkInterfaces = os.networkInterfaces();
var type = os.type();

console.log(`Total Memory ${totalMemory}`);
console.log(`Free Memory ${freeMemory}`);
console.log(`Uptime ${uptime}`);
console.log(`Platform ${platform}`);
console.log(`Home Directory ${homedir}`);
console.log(`Releae ${release}`);
console.log(`CPUs ${cpus}`);
console.log(`Network Interfaces ${networkInterfaces}`);
console.log(`Type ${type}`);