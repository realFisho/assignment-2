const fs =require("node:fs");
function create(filename)
{
    try{
    fs.mkdirSync(filename);
    console.log("file created");
    
    }
    catch(error){
       console.log("error");
       
    }
}
create("file2.txt");