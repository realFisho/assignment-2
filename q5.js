function parsePath(filepath){
 var parts=filepath.split("/");
 var name=parts[parts.length-1].split(".");
 console.log({Name:name[0],Ext:name[1]});
}
parsePath("/home/app/main.js");