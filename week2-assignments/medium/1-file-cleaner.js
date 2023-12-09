const fs=require("fs");

fs.readFile("sample.txt", "utf-8", (err, data)=>{
    let data1=data;
    let data2=data1.replace(/\s+/g, " ").trim();
    fs.writeFile("sample.txt", data2, (err)=>{
        if(err){
            console.error(err);
        }
        else{
            console.log("File saved successfully");
        }
    });
});

