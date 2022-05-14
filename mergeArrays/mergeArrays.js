function mergeTwoArrays(array1,array2){

for(let i=0;i<array2.length;i++)

{
array1.push(array2[i]);
}

console.log(array1);
}
mergeTwoArrays([1,2,9,3,5,1,4,5],[11,54,70,40]);
mergeTwoArrays([1,2,3],[4,5,6]);