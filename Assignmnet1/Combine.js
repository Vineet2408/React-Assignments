const ar1 = [[1,2,3],[4,1,3],[5,6,4]];
const ar2 = [[9,0,8],[6,4,2],[1,5,9]];

for(let i=0;i<3;i++)
{
        console.log(ar1[i]);
}
console.log("------------ 1");
for(let i=0;i<3;i++)
{
        console.log(ar2[i]);
}

console.log("------------ 2");

//combine vertically
const ar3=[];
for(let i=0;i<3;i++)
{
        ar3.push(ar1[i]);
        
}
for(let i=0;i<3;i++)
{
        ar3.push(ar2[i]);
}

console.log(ar3);

//combine horizontally
console.log("------------ 3");
const ar4 = [];
for(let i=0;i<3;i++)
{
        ar4.push(ar1[i]);
        ar4.push(ar2[i]);
}

//printing
for(let i=0;i<6;i++)
{
    console.log(ar4[i++],ar4[i]);
}
console.log(ar4);