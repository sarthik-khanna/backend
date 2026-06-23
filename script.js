const fs = require('fs');

// write file
// append file
// copy file 
//readfile 


fs.rename ("info.txt","hello.txt", function(err){
    if(err) console.error(err);
    else{
        console.log("done")
    }
})


// copy the file

fs.copyFile("hello.txt","./copy/copy.txt",(err)=>{
    if(err) console.error(err);
    console.log("copy the file to copy folder")
})


// unlink the file

fs.unlink("./copy/copy.txt",function(err){
    if(err) console.log(err);
    else console.log("removed")
})


// delete the folder

fs.rmdir("./copy", function(err){
if(err) console.log(err);
else console.log("removed")
})


//  create the folder through fs 

fs.mkdir("./my-folder" , {recursive:true},(err)=>{
    if(err) console.log(err);
    else console.log("directory created")
})



fs.writeFile("./my-folder/hello.txt" ,"this is  my file",(err)=>{
    if(err) console.log(err);
    else console.log("created")
})