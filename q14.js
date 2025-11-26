const { log } = require("node:console");
const fs=require("node:fs");
function readFile(filepath){
    try{
        var data=fs.readFileSync(filepath, {encoding:"utf8"});
        console.log("file content =",`"${data}"`);
        
    }catch(error){
        console.log("Error");
        

    }
}
readFile("file2.txt");