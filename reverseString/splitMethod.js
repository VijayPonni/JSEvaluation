function reverseString(String){

    let split = String.split("");   //It splits the string into array format "" or '' is very important

   console.log(split);

    let reverse = split.reverse();  // It reverse the items in array string

    console.log(reverse);

    let String2 = reverse.join("");  //It joind the string characters of a arrat tyoe string "" or '' is very important
 
    console.log(String2);
}
reverseString("Yajiv");
reverseString("I am Vijay");