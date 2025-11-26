const path= require("node:path");
function joinSegs(...seg){
    const x=path.join(...seg);
    return x;
}
console.log(joinSegs("src","components","app.js"));
