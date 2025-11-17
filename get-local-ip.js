#!/usr/bin/env node

const os = require("os");
const networkInterfaces = os.networkInterfaces();

function getLocalIP() {
  for (const interfaceName in networkInterfaces) {
    const interfaces = networkInterfaces[interfaceName];
    for (const iface of interfaces) {
      // Skip internal (loopback) and non-IPv4 addresses
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "localhost";
}

const localIP = getLocalIP();
console.log("\n🌐 Your local IP address:", localIP);
console.log(`📱 Access your app on mobile: http://${localIP}:3000\n`);

