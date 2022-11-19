// import * as fs from "node:fs";        //   file .mjs
const fs = require("node:fs")

fs.writeFile("message.txt", "Ciao!", { encoding: "utf-8"}, function(error){
    if(error) throw error;
    console.log(error)
})