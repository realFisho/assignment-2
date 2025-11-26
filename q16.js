const fs=require("node:fs");
function checkDir(filepath){
    const exists=fs.existsSync(filepath)&&
    fs.lstatSync(filepath).isDirectory(); //bool
    console.log(exists);
    return exists;   
}
checkDir("folder1");