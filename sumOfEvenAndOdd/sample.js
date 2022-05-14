function sum(number){
    let evenCount=0;
    let oddCount=0;

    for(let i=1;i<=number;i++){
        if(i%2 === 0){
            evenCount += i;
        }
        else 
        {
             oddCount +=i;
        }
    }
    console.log("Sum Of Even Numbers :" , evenCount);
    console.log("Sum Of Odd Numbers : " , oddCount);

}
sum(100);