function getEx(path){
    const parts=path.split(".");
    return parts[1];
}
console.log(getEx("/docs/readme.md"));
