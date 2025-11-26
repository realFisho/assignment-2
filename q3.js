const path=require("node:path");
function buildpath(fileObj)
{
    return path.join(fileObj.dir,fileObj.name+fileObj.ext);
}
console.log(buildpath({ dir: "/folder", name: "app", ext: ".js"}));
