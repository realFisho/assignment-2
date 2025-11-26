const path=require("node:path");
function resolve(filepath){
    return path.resolve(filepath);
}
console.log({path:resolve("Q1.js")});
