function check(){
    console.log(1==1);
    console.log("1"==1);   //Only checks values not types so return true
    console.log("1"===1);  //Check the type so returns false
}
check();