const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("569560663727276044")
setInterval(function() {
channel.send(`**???? ???? ????**`);
}, 4)
})

client.login("NTM3Mjg1Mzg0MzQyNzMyODI1.XLojjA.m0FtJPwryI7iody0ZD5MFogltoA");
