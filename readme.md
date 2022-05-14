# JavaScript Evaluation 1 #
## Q :1    1. Check prime number? ##
## Algorithm ##

* Step 1 : Start the process.

* Step 2 : check the given number num<0,

  * Step 2.1 : Print "Prime number must be positive integers ".

* Step 3 : Check wheather the given number is (num===0 || num===1)

   * Step 3.1 : Print "Entered number is Neither prime nor composite".

* Step 4 : Check number is wheather (n===2)

   * Step 4.1 Print " Entered Number is prime" .

* Step 5 : else the above conditions fails, check the factors for given number:

         for(let i=1;i<=num;i++){
          if(num%i===0)
          count++;

    * Step 5.1 : If the counnt value is (count===2) , then Print "Prime" or Print "Not prime";

* Step 6 : Stop the process.

## Program : ##

```javascript


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
```

* Output:

```javascript
 Entered number is Neither prime nor composite
 Entered number is Neither prime nor composite
 Entered Number is prime
Not prime
Prime number must be positive integers 
```
## 2. What is difference between == and === with an example? ##

## Difference ##

* == is an comparaitive operative which compares the left anf right side value are equal.

* === is also the comparitive opeartor which strictly compares the values of each sides including it's type.

## Example : ##

```javascript
function check(){
    console.log(1==1);
    console.log("1"==1);   //Only checks values not types so return true
    console.log("1"===1);  //Check the type so returns false
}
check();
```
* Output:

```javascript
true
true
false
```

## Q3. How would you reverse a string in JavaScript? ##

## Method : 1 reverse forloop method ##

## Algorithm ##

* Step 1 : Start the process.

* Step 2 : initialize new String with empty velue  like String2="";

* Step 3 : Iterate the given srtring in reverse manner using forloop as below:

         for (let i=String.length;i!==0;i--)

    * Step 3.1 : In this iteration ,conactinate the given string elements with string2 using   String2 += String[i-1];

    * Step 3.2 Terminate the for loop iteration .

* Step 4 ; Print the Strings value which contains reverse value of given string      

* Step 5 : Stop the process.  

## Program ##

```javascript
function stringReverse(String){


let String2 = "";


for (let i=String.length;i!==0;i--){
 
  String2 += String[i-1];

}
console.log(String2);

}

stringReverse("Ajith");
stringReverse("Hi i am vijay");
```

* Output:

```javascript
htijA
yajiv ma i iH
```
## Method : 2 reverse string using split method ##

## Algorithm ##

* Step 1 : Start the process.

* Step 2 : Split the given string into individual array elements using split method like ,   let split = String.split(""); 

* Step 3 : Reverse the string elements using reverse method ,    let reverse = split.reverse(); 

* Step 4 : Join the reversed string elements using join method ,   let String2 = reverse.join("");

* Step 5 : Print the final reversed string .

* Step 6 : Stop the process.

## Program ##

```javascript
function reverseString(String){

    let split = String.split("");   //It splits the string into array format "" or '' is very important

  //  console.log(split);

    let reverse = split.reverse();  // It reverse the items in array string

   // console.log(reverse);

    let String2 = reverse.join("");  //It joind the string characters of a arrat tyoe string "" or '' is very important
 
    console.log(String2);
}
reverseString("Yajiv");
reverseString("I am Vijay");
```

* Output:

```javascript
vijaY
yajiV ma I
```
## Q 4. How would you reverse words in a sentence? ##

## Algorithm ##

* Step 1 : Start the process.

* Step 2 : Read the given sentence as string format.

* Step 3 : split the entered string using .split(" ") method , " " --> It is very important to split the sentence in space to identify words.

* Step  4 : Reverse the splited string using .reverse() method.

* Step 5 : Join the reversed string By " " with .join(" ") method to make array format to string.

* Step 6 : Store the final string.

* Step 7 : display the string.

* Step 8 : Stop the process.

## Program ##

```javascript
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
```
* Output:

```javascript
Vijay am I
you? are old How
```




## Q 5. How will you verify a word as a palindrome? ##

### Palindrome : ###

* Palindrome menas the word that reads the same in forwars and backword.

## Algorithm ##

* Step 1 : Start the process.

* Step 2 : Reverse the given string using for loop .

* Step 3 : Store reversed string in new variable.

* Step 4 : Compare reversed string with given string using === operaor.

  * Step 4.1 : If both are equal , Print " Palindrome "

  * Step 4.2 : If both are not equal , Print " NOT Palindrome "

* Step 5 : Stop the process.

## Program ##

```javascript

function palindromeOrNot(word){

let word2 = "";

for (let i=word.length;i!==0;i--){
    word2 += word[i-1];
}

(word2===word) ? console.log("Palindrome") : console.log("Not palindrome");

}

palindromeOrNot("vijay");
palindromeOrNot("ere");
```

* Output:

```javascript
Not palindrome
Palindrome
```
## Q 6. Write your own program to explain the difference between forEach and map? ##

* Array.foreach will not return anything but array.amp can return value.

* We can use array.filter or other other higher order functions after array.map bu we can not do that after array.forEach() method.

## Program ##

```javascript

let elements=[100,200,300,400,500];

let divide = (item) => {  return item/10 };   // Divide 10 for each element

let final = elements.map(divide);            // Using Array.map

console.log(final);                           //Array after map

console.log(elements);                       //Original array (Unchanged)


let multiply = (item) => { return (  item * 2 ) };   // forEach method will not return anything only undefined

 let mul = elements.forEach(multiply);                   

console.log(mul);            

let alter = (item) => { console.log(item * 2) }

let sec =  elements.forEach(alter);

```
* Output:

```javascript
[ 10, 20, 30, 40, 50 ]
[ 100, 200, 300, 400, 500 ]
undefined
200
400
600
800
1000
```
## Q 7. Generate a random number between 1 to 5? ##

## Program ##

```javascript
function range(min,max){
    return Math.floor(Math.random() *  (max - min + 1)) + min;
}
console.log(range(1,5));
console.log(range(1,5));
console.log(range(1,5));
console.log(range(1,5));
```

* Output:

```javascript
4
2
4
3
```

## Q 8. Remove duplicate from the following array?([1,2,9,4,5,8,3,5,1,4,5]) ##

## Algorithm ##

* Step 1 : Start the process.

* Step 2 : REad given array.

* Step 3 : Create a new  empty array .

* Step 4 : Iterate over the given array usiing forloop upto the length.

* Step 5 : Check if(array2.indexOf(array1[i]) === -1),

      * Step 5.1 : If condition true , push the element in new array.

* Step 6 : Print the second array.

* Step 7 : Stop the process.

## Program ##

```javascript
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
```
* Output:

```javascript
[ 1, 3, 5, 6 ]
[
  1, 2, 9, 4,
  5, 8, 3
]
```

## Q 9. Write a program to calculate the sum of the first 10 natural numbers. ##

## Algorithm ##

* Step 1 : Start thr process.

* Step 2 : fix initial sum value to 0.

* Step 3 : Iterate with while loop untill the given number is reched.

  * Step 3.1 : set i value as 1 as natural numbers starts with 1.
  
  * step 3.2 : add sum and i and store it in sum.

  * Step 3.3 : Increament i for each iteration.

* Step 4 : print sum .

* Step 5 : Stop the process.

## Program ## 

```javascript
function sumOfNaturalNumbers(num){
    let i=1;
let sum=0;
while(i<=num){
    sum += i;
    i++;
}
console.log(sum);
}
sumOfNaturalNumbers(10);
sumOfNaturalNumbers(2);
```
* Output:

```javascript
55
3
```
## Q 10. Write a program to print the sum of the even and odd numbers for a given number? (100) ##

## Algorithm ##

* Step 1 : start the process.

* Step 2 : Read the number from user.

* Step 3 : initialize the oddcount=0 and evencount=0

* Step 4 : Iterate using for loop to check every numbers either odd or even upto the given number.

* Step 5 : If The number which is iterating is even , Update the value of evencount += i;

* Step 6 : Else , increase the oddcount += i;

* Step 7 : Print The Even count value and oddcount value.

* Step 8 : Stop the process.

## Program ##

```javascript
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
```
* Output:

```javascript
Sum Of Even Numbers : 2550
Sum Of Odd Numbers :  2500
```

## 11. Write a program to merge two arrays? ([1,2,9,3,5,1,4,5], [11,54,70,40]) ##

## Algorithm ##

* Step 1 : Start the process.

* Step 2 : Get array1 and array 2 to merge.

* Step 3 : iterate the second array to it's length using for loop.

  * Step 3.1 : Push the each items of array2 in array1 using array.push method as follows:

       array1.push(array2[i]);

* Step 4 : Print the array1 as result.

* Step 5 : Stop the process.

## Program ##

```javascript
function mergeTwoArrays(array1,array2){

for(let i=0;i<array2.length;i++)

{
array1.push(array2[i]);
}

console.log(array1);
}
mergeTwoArrays([1,2,9,3,5,1,4,5],[11,54,70,40]);
mergeTwoArrays([1,2,3],[4,5,6]);
```

* Output:

```javascript
[
   1,  2, 9,  3,  5,
   1,  4, 5, 11, 54,
  70, 40
]
[ 1, 2, 3, 4, 5, 6 ]
```

## Q 12. Remove duplicate from an array of an object by id and name? ##

## Algorithm ##

* Step 1 : Start the process.

* Step 2 : Read the give arrayOfObjects.

* Step 3: use array.filter method to extract the non-duplicant arrayelements.

  *  Step 3.1 : Use the array.findIndex() method as inner function in the filter method to identify the repeatation of id and name of given object array.

  * Step 3.2 :  check wheather t.id===thing.id && t.name===thing.name in function t.

  * Step 3.3 : Pass this function as arument to findIndex method which produces the non-duplicant array.

* Step 4 : Print the resultant array.

* Step 5 : Stop the process.

## Program ##

```javascript

function removeDuplicate(array){

    let result = array.filter((thing,index,self) => index===self.findIndex((t) => t.id===thing.id && t.name===thing.name))
    console.log(result);

}
removeDuplicate([{id: 1, name: "Stephen covey" }, {id: 2, name: "Robin Sharma" }, {id: 3, name:
    "Tolstoy"}, {id: 3, name: "Tolstoy"}, {id: 5, name: "James clear"}])
```
* Output:

```javascript
[
  { id: 1, name: 'Stephen covey' },
  { id: 2, name: 'Robin Sharma' },
  { id: 3, name: 'Tolstoy' },
  { id: 5, name: 'James clear' }
]
```

## Q 13. Compare two objects, If all properties are equal return true or return false? ##

## Algorithm ##

* Step 1 : Start the process.

* Step 2 : Convert the objects to string form using JSON.stringify method.

* Step 3 : Assign variables for the converted objects.

* Step 4 : Compare the variables using === operator ,

  * Step 4.1 : If both are same , Print true.

  * Step 4.2 : If both are not same , print false.

* Step 5 : Stop the process. 

## Program ## 

```javascript
let object1 = {
    id : 1,
    name : "edison",
    age : 10
}
let object2 = {
    id : 1,
    name : "edison",
    age : 10
}
let object3 = {
    id : 1,
    name : "edison",
    age : 10
}
let object4 = {
    id : 2,
    name : "edison",
    age : 10
}
let a = JSON.stringify(object1);
let b = JSON.stringify(object2);
let c = JSON.stringify(object3);
let d = JSON.stringify(object4);

(a===b) ? console.log("True") : console.log("False");
(c===d) ? console.log("True") : console.log("False");
```
* Output:

```javascript
True
False
```
## Q 14. Take a multidimensional array and flat the array?[1,4,2,3,[10,20,20], [100,500,700,600],[2000,1000]] ##

## Algorithm ##

* Step 1 : Start the process.

* Step 2 : Get a multidiamensional array .

* Step 3 : Usr arraynem.flat(Infinity) method to flat the array with any number of diamesndions within it.

* Step 4 : print the result.

* Step 5 : Stop the process.

## Program ##

```javascript
function arrayFlat(multi){
   console.log(multi.flat(Infinity));
}
arrayFlat([1,4,2,3,[10,20,20], [100,500,700,600],[2000,1000]]);
arrayFlat([[1,2,3,4],5,6,7]);
```
* Output:

```javascript
[
     1,   4,   2,    3,
    10,  20,  20,  100,
   500, 700, 600, 2000,
  1000
]
[
  1, 2, 3, 4,
  5, 6, 7
]
```
## Q 15. Group by the id of the following array of objects using the Array.reduce method? ##

## Algorithm ##

* Step 1 : Start the process.

* Step 2 : Get arrayOfObjects from user.

* Step 3 : Reduce the given arrayOfObject using arrayname.reduce method as below : 

  * Step 3.1 : Set An empty array as accumulator and the given arrayOfObject as current value in reduce function.

  * Step 3.2 : push the id's of the objects using array.push method in the function.

  * Step 3.3 : Return the array in the function.

* Step 4 : Print the variable which is assigned to the array.reduce method.

* Step 5 : Stop the process.

## Program ##

```javascript
function groupById(nameList){
let group_id = nameList.reduce ((arr,nameList) => {
   arr.push(nameList.id);
   return arr;
},[] )
console.log(group_id);
}
groupById([{id: 1, name: "edison" }, {id: 2, name: "Annand" }, {id: 3, name: "Vasnath"}]);
```
* Output:

```javascript
[ 1, 2, 3 ]
```

## Q 16. Write a program in Javascript to display the pattern like right angle triangle using an asterisk. ##

### Sample Output ###

```javascript
*
**
***
****
*****
```
## Algorithm ##

* Step 1 : Start the process.

* Step 2 : Assign an empty string.

* Step 3 : Create an external for loop for coloumns and internal forloop for rows in pattern.

* Step 4 : Set external for loop length to given number i<=number.

* Step 5 : Set Internal forloop length as i<j .

* Step 6 : concat the * with empty string.

* Step 7 : Concat "\n" with string in external loop.

* Step 8 : Print the string.

* Step 9 : Stop the process.

## Program ##

```javascript
function pattern(number){
string="";
for(let i=1;i<=number;i++){
    
for(let j=0;j<i;j++){
    string += "*";
}
  string +="\n";
}
console.log(string);
}
pattern(5);
```
* Output:

```javascript
*
**
***
****
*****
```

## Q 17. Write a program in Javascript to make such a pattern like right angle triangle with number increased by 1 ##

### Sample Output: ###

```javascript
1
2 3
4 5 6
7 8 9 10
```
## Algorithm ##

* Step 1 : Start the process.

* Step 2 : Assign an empty string and temporary variable.

* Step 3 : Create an external for loop for coloumns and internal forloop for rows in pattern.

* Step 4 : Set external for loop length to given number i<=number.

* Step 5 : Set Internal forloop length as i<=j .

* Step 6 : concat the " " and the temporary variable  with empty string.

  * Step 6.1 : Increament the temporary variable.

* Step 7 : Concat "\n" with string in external loop.

* Step 8 : Print the string.

* Step 9 : Stop the process.

## Program ##

```javascript

let string="";
let temp=1;
for(let i=1;i<=4;i++){
    for(let j=1;j<=i;j++){
      string += " "+temp;
      temp++;
    
    }
  string += "\n"
}
console.log(string);
```
* Output:

```javascript
 1
 2 3
 4 5 6
 7 8 9 10
```
## Q 18. Write a program in Javascript to make such a pattern like a pyramid with numbers increased by 1 ##

### Sample output ###

```javascript
   1
  2 3
 4 5 6
7 8 9 10
```
## Algorithm ##

* Step 1 : Start the process.

* Step 2 : Assign  empty string and temporary variable.

* Step 3 : Create one outer forloop and two inner forloop.

* Step 4 : set First inner for loop to print space for every line according to the length , here 4-i.

* Step 5 : Set scond inner for loop to print the numbers and increament the temporary vriable.

* Step 6 : Set the outer forloop to make nextline in string.

* Step 7 : print the final string.

* Step 8 : Stop the process.

## Program ##

```javascript
let string="";
let temp=1;
for(let i=1;i<=4;i++){
    for(let j=1;j<=4-i;j++){
        string += " ";
    }
    for(let k=1;k<=i;k++){
      string += " "+temp;
      temp++;
    
    }
  string += "\n"
}
console.log(string);
```
* Output:

```javascript
    1
   2 3
  4 5 6
 7 8 9 10
```
## Q 19. Write a program in Javascript to display the pattern like a diamond ##

### Sample output : ###

```javascript
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

## Algorithm ##

Step 1 : Start the process.

Step 2 : Create the triangle shaped pyramid using 3 forloops with 2*(i-1) as condition in first inner forloop.

Step 3 : Created another reversed triangle using three forloop.

Step 4 : print the resultant string.

Step 5 : Stop the process.

## Program ##

```javascript
let string="";
let length=5;
for(let i=1;i<=length;i++){
    for(let j=1;j<=length-i;j++){
        string += " ";
    }
        for(let k=1;k<=2*i-1;k++){
            string += "*";
        }
        string += "\n"
    }
// Reverse method
    for(let i=1;i<=length-1;i++){
        for(let j=1;j<i+1;j++){
            string += " ";
        }
            for(let k=1;k<=2*(length-i)-1;k++){
                string += "*";
            }
            string += "\n"
        }

console.log(string);
```
* Output:

```javascript
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

```

## Q 20. Explain following terms ##

## a. console.log ##

* The log() method writes (logs) a message to the console.

* The log() method is useful for testing purposes.

## Example : ## 

```javascript
console.log("hello");
```
* output:

```javascript
hello
```

## b. console.dir ##

* The method console.dir() displays an interactive list of the properties of the specified JavaScript object. 

* The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects.

## Example : ##

```javascript
let a = {
    name : "vijay",
    age : 12
}
console.dir(a);
```
* Output:

```javascript
{ name: 'vijay', age: 12 }
```


## c. console.count ##

* The console.count() method logs the number of times that this particular call to count() has been called.

* We can give name inside the paranthesis othrwise the default will be displayed.

## Example : ##

```javascript
function show(){
    console.count("CountOfShow");
 console.log( "hi");
}
show();
show();
```
* Output:

```javascript
CountOfShow: 1
hi
CountOfShow: 2
hi
```

## d. console.table ##

* The console.table() method displays tabular data as a table.

* This function takes one mandatory argument data, which must be an array or an object, and one additional optional parameter columns.

## Example : ##

```javascript
console.table(["car","bike","lorry"]);

let object = {
    name : "vijay",
    age : 21
}
console.table(object);

function show(name , gender){
    this.name = name;
    this.gender = gender;
}

let info = new show("vijay","male");
console.table(info);
```
* Output:

```javascript
┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│    0    │  'car'  │
│    1    │ 'bike'  │
│    2    │ 'lorry' │
└─────────┴─────────┘
┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│  name   │ 'vijay' │
│   age   │   21    │
└─────────┴─────────┘
┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│  name   │ 'vijay' │
│ gender  │ 'male'  │
└─────────┴─────────┘
```
## e. console.time/timeLog/timeEnd ##

* The time() method starts a timer in the console view.

* The time() method allows you to time code for testing purposes.

* Ue console.time() method before start of the code where you want to test and also use console.timeEnd()/console.timeLOg()
after the code to see the time.

* We can use lables according to our wish.

## Example : ##

```javascript
console.time("time");
for(let i=0;i<=5;i++){
    console.log("hi");
}
console.timeEnd("time");
```
* Output:

```javascript
hi
hi
hi
hi
hi
hi
time: 4.908ms
```
## f. console.trace ##

* The trace() method displays a trace that show how the code ended up at a certain point.

* It is mainly used to trace the parents of functions.

## Example : ##

```javascript
function outer(){
    console.log("I am outer");
  
    function inner(){
        console.log("I am inner");
        console.trace();
     
    }
    inner();
}
outer();
```
* Output in console : 

```javascript
I am outer
VM35:4 I am inner
VM35:5 console.trace
inner @ VM35:5
outer @ VM35:7
(anonymous) @ VM35:9
```
* Output in VS code :

```javascript
I am outer
I am inner
Trace
    at inner (/home/guest/Documents/JSEvaluation1/consoleStatements/trace.js:6:17)
    at outer (/home/guest/Documents/JSEvaluation1/consoleStatements/trace.js:9:5)
    at Object.<anonymous> (/home/guest/Documents/JSEvaluation1/consoleStatements/trace.js:11:1)
    at Module._compile (internal/modules/cjs/loader.js:1076:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)
    at Module.load (internal/modules/cjs/loader.js:941:32)
    at Function.Module._load (internal/modules/cjs/loader.js:782:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
```

## g. console.group/groupEnd ##

* The console.group() method creates a new inline group in the Web console log, causing any subsequent console messages to be indented by an additional level, until console.groupEnd() is called.

## Example : ##

```javascript
console.log("Hi");
console.group();
console.log("hello");
console.log("hello2");
console.groupEnd();

console.group("Actors");
console.log("vijay");
console.log("alith");
console.groupEnd("Actors");
```
* Output:

```javascript
Hi
  hello
  hello2
Actors
  vijay
  alith
```
## h. console.assert ##

* The assert() method writes a message to the console if an expression evaluates to false.

## Example : ##

```javascript
console.assert(1===1);   //True nothing will be return
console.assert(1+1===3);   //  Assertion failed
```
* Output:

```javascript
Assertion failed
```




























































