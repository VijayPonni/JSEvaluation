function reverseString(sentence){

    let split = sentence.split(" ");   //It splits the string into array format "" or '' is very important

   //console.log(split);

   let reverse = split.reverse();

   //console.log(reverse);
 
   let sentence2 = reverse.join(" ");

   console.log(sentence2);
  

   
}

reverseString("I am Vijay");
reverseString("How old are you?");

