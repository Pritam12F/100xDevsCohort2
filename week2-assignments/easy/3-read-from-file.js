const fs=require("fs");
fs.readFile("sample.txt", "utf-8", (err, data)=>{
    console.log(data);
})
let a=0;
for(let i=0; i<10000000000; i++){
    a+=i;
}
console.log(a);