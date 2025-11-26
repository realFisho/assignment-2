const fs=require("node:fs")
function deleteFile(filepath){
    fs.unlink(filepath,(error)=>{
       if(error){ console.log("Error");}
       else{
         console.log("file deleted");
          }
        
    })
}
deleteFile("C:/Users/Mostafa/OneDrive/Desktop/route/Mostafa_Nader_C45_sat_10-4_assignment2_01118669666/file.txt")