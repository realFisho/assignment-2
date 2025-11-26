function isAbsolute(filepath){
    parts=filepath.split("/");
    if(parts[parts.length-1].includes("."))
    {
        return "True";
    }
    else{
        return "False";
    }
}
console.log(isAbsolute("/home/user/file.txt"));
