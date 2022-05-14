

function isPrime(num){
   let count=0;
    if(num<0) {
        console.log("Prime number must be positive integers ");
    }
  else if(num===0 || num===1){
      console.log( " Entered number is Neither prime nor composite" ) ;
  }
  else if( num===2 )
  {
         console.log( " Entered Number is prime" ) ;
  }

  else
  {
      for(let i=1;i<=num;i++){
          if(num%i===0)
          count++;
      }
       (count ===2 ) ?  console.log("Prime") : console.log( "Not prime" );
}
}
isPrime(0);
isPrime(1);
isPrime(2);
isPrime(91);
isPrime(-67);
