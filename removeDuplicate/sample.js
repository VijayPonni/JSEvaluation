function removeDuplicate(array1){
   
   let array2=[];
   let len = array1.length;

   for(let i=0;i<len;i++){
      if(array2.indexOf(array1[i]) === -1){
         array2.push(array1[i]);
      
      }

   }
   console.log(array2);
}
removeDuplicate([1,3,5,6,1,3,6]);
removeDuplicate([1,2,9,4,5,8,3,5,1,4,5]);


