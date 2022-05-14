function outer(){
    console.log("I am outer");
  
    function inner(){
        console.log("I am inner");
        console.trace();
     
    }
    inner();
}
outer();
