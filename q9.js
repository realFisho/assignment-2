const path=require("node:path")
function joinPath(path1,path2){
 return path.join(path1,path2)
}
console.log({path:joinPath("folder","folder2/file.tx")});
