const fs = require('fs');
const arr=[];

arr.push(fs.readFileSync('file.txt'));

const file = Buffer.concat(arr).toString();

console.log(file);
//creating array
const ar=file.split(" ");

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

function del(map, pred) 
{
    const ar=[]
    for (let [k, v] of map) 
    {
      if (pred(k,v)) {
        ar.push(k);
      }
    }
    return ar;
}

const uniqueEle = del(map,(k,v)=>(v==1));
console.log(uniqueEle);
