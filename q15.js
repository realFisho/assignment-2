const { log } = require("node:console");
const fs=require("node:fs");
function writeFile(filepath,content)
{
    fs.writeFile(filepath,content,{encoding:"utf8"},(error)=>{
     if(error){
      console.log("error");
      
    }else{
        console.log("written successfully");
        
    }
    });
    
}

writeFile("file3.txt","Question 14");