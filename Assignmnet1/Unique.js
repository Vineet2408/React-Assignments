const fs = require('fs');
const arr=[];

arr.push(fs.readFileSync('file.txt'));

const file = Buffer.concat(arr).toString();

console.log(file);
const ar=file.split(" ");
for(let i=0;i<ar.length;i++)
{
    console.log(ar[i]);
}
let map = new Map();
for(let i=0;i<ar.length;i++)
{
    if(map.get(ar[i]))
    {
        map.set(ar[i],map.get(ar[i])+1);
    }
    else{
        map.set(ar[i],1);
    }
}
console.log("=================================");
for(let entry of map.entries())
{
    let key = entry[0];
    let value = entry[1];
    if(value===1)
    {
        console.log(key);
    }
    
}